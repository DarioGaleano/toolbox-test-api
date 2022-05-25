import makeFormatFilesData from './format-files-data'
import makeFilesList from './files-list'
import { getFile, getFiles } from '../../services'

const formatFilesData = makeFormatFilesData({
  getFiles,
  getFile
})

const filesList = makeFilesList({ getFiles })

const filesServices = Object.freeze({
  formatFilesData,
  filesList
})

export default filesServices
