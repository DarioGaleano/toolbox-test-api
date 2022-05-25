export default function notFound () {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    body: { message: 'Endpoint not found' },
    statusCode: 200
  }
}
