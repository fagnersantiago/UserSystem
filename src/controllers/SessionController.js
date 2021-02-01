const Admin = require("../models/Admin");

class UserAdmin {
  
  async store(request, response) {
    const { name, email } = request.body;

    try {
//    search an email 
      let admin = await Admin.findOne({ email });
//    if email exist return message and stop to create a new admin
      if (admin)
        return response
        .status(401)
        .send({ message: "Email already exists" });
//    create new admin
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