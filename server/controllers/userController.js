const db = require('../models/index')

const register = async function (req, res) {
  try {
    let params = req.body
    const repeatNameUsers = await db.user.findAll({
      where: {
        name: params.name
      }
    })
    if (repeatNameUsers.length > 0) {
      return res.send({
        code: '000001',
        data: false,
        message: 'Name already used'
      })
    }
    await db.user.create(params, { fields: ['id', 'name', 'avatar'] })
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

}