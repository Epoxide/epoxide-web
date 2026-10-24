import path from 'node:path'

const ESLINT =
  "eslint --rule 'no-console: error' --rule 'prettier/prettier: error'"

// Run ESLint from each package so its eslint.config.js and Prettier plugins resolve
const lintPerPackage = (files) => {
  const filesByDir = Object.groupBy(files, (file) => {
    const [dir, name] = path.relative(process.cwd(), file).split(path.sep)
    return dir === 'packages' ? path.join(dir, name) : '.'
  })

  return Object.entries(filesByDir).map(
    ([dir, dirFiles]) =>
      `pnpm --dir ${dir} exec ${ESLINT} ${dirFiles.map((file) => `'${file}'`).join(' ')}`,
  )
}

export default {
  '**/*.{js,jsx,cjs,mjs,ts,tsx,astro,vue,svelte}': lintPerPackage,
}
