import fetch from 'node-fetch'
/** SERVICES FROM EXTERNAL API */

/** GET LIST OF FILES WITH DATA */
const getFiles = async () => {
  const request = await fetch(`${process.env.TOOLBOX_API}/secret/files`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOOLBOX_TOKEN}`
    }
  })
  const response = await request.json()
  return {
    status: request.status,
    response
  }
}

/** GET DATA FROM SPECIFIC FILE */
const getFile = async ({ fileName }) => {
  const request = await fetch(`${process.env.TOOLBOX_API}/secret/file/${fileName}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.TOOLBOX_TOKEN}`
    }
  })

  const response = await (await request.blob()).text()

  return {
    status: request.status,
    response
  }
}

export { getFiles, getFile }
