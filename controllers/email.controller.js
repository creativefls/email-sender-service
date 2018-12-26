const { email } = require('../services')

const sendOne = async (req, res) => {
  const { to, subject, secret, html } = req.body

  if (secret != process.env.SECRET) return res.status(400).json('bad request')

  const response = await email.sendOne({ to, subject, html })
  res.json(response)
}

module.exports = {
  sendOne
}