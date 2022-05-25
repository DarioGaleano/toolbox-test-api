'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const url = 'http://localhost:3000/api/v1'

describe('get all files list: ', () => {
  it('should get all files', (done) => {
    chai
      .request(url)
      .get('/files/list')
      .end(function (err, res) {
        if (err) {
          console.log({ err })
        }
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('get all the files with data: ', () => {
  it('should get an array with all files data', (done) => {
    chai
      .request(url)
      .get('/files/data')
      .end(function (err, res) {
        if (err) {
          console.log({ err })
        }
        expect(res.body).to.be.an('array')
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('get a file by query param: ', () => {
  it('should get the file with fileName test1.csv', (done) => {
    chai
      .request(url)
      .get('/files/data?fileName=test1.csv')
      .end(function (err, res) {
        if (err) {
          console.log({ err })
        }
        expect(res.body).to.be.an('array')
        expect(res.body.length).to.equal(1)
        expect(res).to.have.status(200)
        done()
      })
  })
})
