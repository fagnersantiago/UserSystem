import "../models/Admin.js";

class UserAdmin {
  
  async store(request, response) {
    const { name, email } = request.body;
    console.log(name)

//    search an email 
      let admin = await findOne({ email });
//    if email exist return message and stop to create a new admin
      if (!admin)
      
//    create new admin
      admin = await create({
        name,
        email,
      });

      return response.json(admin);
    } 
};

export default new UserAdmin();