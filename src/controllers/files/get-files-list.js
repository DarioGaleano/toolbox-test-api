export default function makeGetFilesList (listFiles) {
  return async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const data = await listFiles()
      return {
        headers,
        statusCode: 200,
        body: { ...data }
      }
    } catch (e) {
      return {
        headers,
        statusCode: e.code ? 200 : 400,
        body: {
          error: {
            code: e.code,
            message: e.message
          }
        }
      }
    }
  }
}
