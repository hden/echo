const { send, text, json } = require('micro')
const { parse } = require('url')

module.exports = async (req, res) => {
  const url = parse(req.url, true)
  const { headers } = req
  let body = ''

  if (headers['Content-type'] === 'application/json') {
    body = await json(req)
  } else {
    body = await text(req)
  }

  return send(res, 200, { url, headers, body })
}
