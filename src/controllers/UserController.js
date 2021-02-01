const User = require("../models/UserRegister");
const Admin = require("../models/Admin");


class UserRegister {
  async store(request, response) {
    const { name, email, cpf, competence, phone, validator} = request.body;
    const {admin_id } = request.headers;

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
        name,
        email,
        cpf,
        competence: competence.split(",").map((tech) => tech.trim()),
        phone,
        validator
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
