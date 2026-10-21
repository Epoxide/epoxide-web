/* eslint-disable no-console */
// Decides whether CI should post the "visual snapshot tests failed" PR comment.
//
// Reads the Playwright JSON reports (paths passed as arguments — one per
// framework package) and emits `failed=true` only when a snapshot test *fully* failed — i.e. its final status is
// `unexpected` (it exhausted all retries), not `flaky` (it passed on a retry).
// A snapshot failure is identified by a `*-actual.png` attachment, so ordinary
// non-visual e2e failures don't trigger the snapshot comment.
//
// Writes `failed=true|false` to $GITHUB_OUTPUT via stdout redirection.

import { readFileSync } from 'node:fs'

const reportPaths = process.argv.slice(2)

/** Depth-first walk over the report's nested suites, yielding every test. */
function* eachTest(suite) {
  for (const spec of suite.specs ?? []) {
    for (const test of spec.tests ?? []) yield test
  }
  for (const child of suite.suites ?? []) yield* eachTest(child)
}

function hasFullSnapshotFailure(report) {
  for (const suite of report.suites ?? []) {
    for (const test of eachTest(suite)) {
      // `flaky` means it eventually passed on retry — not a real failure.
      // Only `unexpected` (failed on every attempt) counts.
      if (test.status !== 'unexpected') continue
      const isSnapshot = (test.results ?? []).some((result) =>
        (result.attachments ?? []).some((attachment) =>
          attachment.name?.endsWith('-actual.png'),
        ),
      )
      if (isSnapshot) return true
    }
  }
  return false
}

let failed = false
for (const reportPath of reportPaths) {
  try {
    const report = JSON.parse(readFileSync(reportPath, 'utf8'))
    if (hasFullSnapshotFailure(report)) failed = true
  } catch (error) {
    // No report (suite crashed before writing) — treat as no snapshot failure;
    // the job-level failure still surfaces the problem.
    console.error(
      `Could not read Playwright report at ${reportPath}: ${error.message}`,
    )
  }
}

console.log(`failed=${failed}`)
