export default async function({ locale, country, folder, filename }) {
  let block
  try {
    if (folder) {
      block = await import(
        `~/data/cms-blocks/${locale}/${country}/${folder}/${filename}.md`
      )
    } else {
      block = await import(
        `~/data/cms-blocks/${locale}/${country}/${filename}.md`
      )
    }
  } catch {
    if (folder) {
      block = await import(
        `~/data/cms-blocks/${locale}/${folder}/${filename}.md`
      )
    } else {
      block = await import(`~/data/cms-blocks/${locale}/${filename}.md`)
    }
  }

  return block.default
}
