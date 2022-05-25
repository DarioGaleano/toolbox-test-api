import makeGetFilesData from './get-files-data'
import makeGetFilesList from './get-files-list'
import { filesServices } from '../../use-cases'

const getFilesData = makeGetFilesData(filesServices.formatFilesData)
const getFilesList = makeGetFilesList(filesServices.filesList)

const filesController = Object.freeze({
  getFilesData,
  getFilesList
})

export default filesController
