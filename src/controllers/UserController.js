const User = require("../models/UserRegister");
const Admin = require("../models/Admin");
const Pre_Register = require('../models/PreRegistration');

class UserRegister {
  async store(request, response) {
    const { name, email, cpf, competence, telefone } = request.body;
    const { pre_register_name } = request.body;
    const {admin_id } = request.headers;
    console.log(admin_id)
    
    try {

    let admin = await Admin.findById(admin_id);

    if(!admin) return response
    .status(400)
    .send({message: 'Id does not exists'})

      let user = await User.findOne({ cpf });

      if (user)
        return response
        .status(401)
        .send({ message: "CPF already exists" });
         
      user = await User.create({
        admin,
        pre_register_name,
        name,
        email,
        cpf,
        competence: competence.split(",").map((tech) => tech.trim()),
        telefone,
      });

    return response.json(user);

    } catch (error) {
      return response
      .status(400)
      .send({ message: "error" +  error});
    }
  }
}

module.exports = new UserRegister();
