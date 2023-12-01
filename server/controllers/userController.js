const db = require('../models/index')

const login = async function (req, res) {
  try {
    let params = req.body
    const currUser = await db.user.findOne({
      where: {
        name: params.username
      }
    })
    if (!currUser) {
      return res.send({
        code: '000001',
        data: false,
        message: 'Incorrect Username'
      })
    }
    if (currUser.password !== params.password) {
      return res.send({
        code: '000001',
        data: false,
        message: 'Incorrect Password'
      })
    }
    return res.send({
      code: '000000',
      data: {
        id: currUser.id,
        name: currUser.name,
        avatar: currUser.avatar,
      },
      message: 'success'
    })
  } catch (error) {
    return res.send({
      code: '000005',
      message: JSON.stringify(error)
    })
  }
}

const register = async function (req, res) {
  try {
    let params = req.body
    const repeatNameUser = await db.user.findOne({
      where: {
        name: params.username
      }
    })
    if (repeatNameUser) {
      return res.send({
        code: '000001',
        data: false,
        message: 'Username already used'
      })
    }
    await db.user.create({
      name: params.username,
      avatar: params.avatar,
      password: params.password,
    })
    return res.send({
      code: '000000',
      data: true,
      message: 'success'
    })

  } catch (error) {
    return res.send({
      code: '000005',
      message: JSON.stringify(error)
    })
  }
}

module.exports = {
  register,
  login
}