const Admin = require("../models/Admin");
const User_Pre_Register = require("../models/PreRegistration");

class UserPreRegister {
  async store(request, response) {
    const {  pre_register_name } = request.body;
    const { admin_id } = request.headers;

    try {
      let user_admin = await Admin.findById(admin_id);

      if (!user_admin)
        return response
        .status(400)
        .send({ message: "Id does not exist" });

      const user_pre_register = await User_Pre_Register.create({
        user_admin,
        pre_register_name,
      });

      return response
      .status(200)
      .json(user_pre_register);

    } catch (error) {
      return response
      .status(400)
      .send({ message: error });
    }
  }
}

module.exports = new UserPreRegister();
