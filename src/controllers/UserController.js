import User from "../models/UserRegister.js";
import Admin from "../models/Admin.js";
import APPErros from "../errors/APPErrors.js";


class UserRegister {
  async store(request, response) {
    const { name, email, cpf, competence, phone, validator } = request.body;
    const { admin_id } = request.headers;

    
      let admin = await Admin.findById(admin_id);

      if (!admin) {
       throw new APPErros("id does not exists");
      }

      let user = await User.findOne({ cpf });

      if (user)
        throw new APPErros('CPF already exists')

      user = await User.create({
        admin,
        name,
        email,
        cpf: cpf.replace(/\D+/g, "."),
        competence: competence.split(",").map((tech) => tech.trim()),
        phone,
        validator,
      });

      throw new APPErros(err);
    } 
  }


export default new UserRegister;
