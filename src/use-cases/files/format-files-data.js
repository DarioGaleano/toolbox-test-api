export default function makeFormatFilesData ({ getFiles, getFile }) {
  return async ({ fileName }) => {
    /** check if was resquested by file name */
    if (fileName) {
      const lines = []
      /** fetch file data from external API */
      const { status: fileStatus, response: fileResponse } = await getFile({ fileName })
      if (fileStatus === 200) {
        /** split text in lines */
        const rows = fileResponse.split('\n')
        /** remove header */
        rows.shift()
        /** iterate lines */
        rows.forEach((row) => {
          let text, number, hex
          /** split line to get values */
          const values = row.split(',')
          /** check if all the values are correct */
          if (values[1] && !isNaN(values[2]) && /[0-9A-Fa-f]{6}/g.test(values[3])) {
            text = values[1]
            number = parseInt(values[2])
            hex = values[3]
            lines.push({ text, number, hex })
          }
        })
      }

      return [{ file: fileName, lines }]
    }

    /** else return all files */

    /** fetch all files */
    const { response } = await getFiles()
    const { files } = response
    const data = []

    /** if fetch fails return message */
    // if (status !== 200) {
    //   throw {
    //     message: 'Error, something went wrong with external API'
    //   }
    // }
    /** iterate every file */
    for (const fileName of files) {
      const lines = []
      /** fetch file data */
      const { status, response: fileResponse } = await getFile({ fileName })

      /** if fetch fails it is not included */
      if (status === 200) {
        /** split text in lines */
        const rows = fileResponse.split('\n')
        /** remove header */
        rows.shift()
        rows.forEach((row) => {
          let text, number, hex
          /** split line to get values */
          const values = row.split(',')
          /** check if all the values are correct */
          if (values[1] && !isNaN(values[2]) && /[0-9A-Fa-f]{6}/g.test(values[3])) {
            text = values[1]
            number = parseInt(values[2])
            hex = values[3]
            lines.push({ text, number, hex })
          }
        })
        if (lines.length) {
          data.push({ file: fileName, lines })
        }
      }
    }

    return data
  }
}
