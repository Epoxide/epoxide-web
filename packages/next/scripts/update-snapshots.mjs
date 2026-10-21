#!/usr/bin/env node
/* eslint-disable no-console */
// Regenerate Playwright visual snapshots inside a Linux container that matches the
// GitHub CI environment (Ubuntu Noble + same Chromium build). Run this locally
// instead of relying on the GitHub bot commit, then commit the updated files yourself.
//
// node_modules and .next are cached in Docker volumes between runs.
// To clear the cache: docker volume rm next-snapshots-nm next-snapshots-next

import { spawnSync } from 'child_process'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..')
const NM_VOLUME = 'next-snapshots-nm'
const NEXT_VOLUME = 'next-snapshots-next'
const rootPkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))

const pwVersion = rootPkg.devDependencies['@playwright/test'].replace(
  /[\^~]/g,
  '',
)
const pnpmVersion = rootPkg.devEngines.packageManager.version.replace(
  /[^0-9.]/g,
  '',
)
const IMAGE = `mcr.microsoft.com/playwright:v${pwVersion}-noble`

const run = (cmd, args, opts = {}) => {
  const result = spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT, ...opts })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const docker = (...args) => run('docker', args)

console.log(`Updating snapshots (image: ${IMAGE})...`)
console.log(
  '(node_modules are cached in a Docker volume — first run may take a few minutes)',
)
docker(
  'run',
  '--rm',
  '-v',
  `${ROOT}:/app`,
  '-v',
  `${NM_VOLUME}:/app/node_modules`,
  '-v',
  `${NEXT_VOLUME}:/app/packages/next/.next`,
  '-w',
  '/app',
  '-e',
  'CI=true',
  IMAGE,
  'bash',
  '-c',
  [
    'set -e',
    `npm install -g pnpm@${pnpmVersion} --quiet`,
    'pnpm install --frozen-lockfile --silent',
    'pnpm --filter @epoxide/web-next exec playwright test --project chromium-snapshots --no-deps --update-snapshots',
  ].join('\n'),
)

console.log(
  '\nDone. Review the diff in packages/tests/snapshots/ and commit the changes.',
)
