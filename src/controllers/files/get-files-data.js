export default function makeGetFilesData (formatFilesData) {
  return async (httpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const {
      query: { fileName }
    } = httpRequest

    try {
      const data = await formatFilesData({ fileName })
      return {
        headers,
        statusCode: 200,
        body: [...data]
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
