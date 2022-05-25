export default function makeFilesList ({ getFiles }) {
  return async () => {
    const { response } = await getFiles()
    return response
  }
}
