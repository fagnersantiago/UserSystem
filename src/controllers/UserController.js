import User from "../models/UserRegister.js";
import Admin from "../models/Admin.js";
import APPErros from "../errors/APPErrors.js";


class UserRegister {
  async store(request, response) {
    const { name, email, cpf, competence, phone, validator } = request.body;
    const { admin_id } = request.headers
    ;

    
      let admin = await Admin.findById(admin_id);
      console.log(admin)

      if (!admin) {
        console.log(admin)
       throw new APPErros("id does not exists");
      }

      let user = await User.findOne({ cpf });

      if (user)
        throw new APPErros('CPF already exists')

      user = await User.create({
         admin,
        name,
        email,
        cpf: cpf.replace(/\d({3})?\d({3})?\d({3})?\d({2})/, "$1.$2.$3-$4"),
        competence: competence.split(",").map((tech) => tech.trim()),
        phone,
        validator,
      });
         
       console.log(user)
      throw new APPErros(err);
    } 
  }


export default new UserRegister;
