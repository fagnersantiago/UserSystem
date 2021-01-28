const Admin = require("../models/Admin");
const User = require("../models/UserRegister");

class UserAdmin {
  
  async store(request, response) {
    const { name, email } = request.body;

    try {

      let admin = await Admin.findOne({ email });

      if (admin)
        return response
        .status(401)
        .send({ message: "Email already exists" });

      admin = await Admin.create({
        name,
        email,
      });

      return response.json(admin);
    } catch (error) {
      return response
      .status(400)
      .send({ message: error });
    }
  }
};

module.exports = new UserAdmin();