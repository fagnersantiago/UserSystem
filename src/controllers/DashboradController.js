const User = require("../models/UserRegister");

class Dashboard {
  async index(request, response) {
    const userName = await User.find();

    //order by name
    userName.sort(function (name1, name2) {
      return name1.name < name2.name ? -1 : name2.name > name1.name ? 1 : 0;
    });

    return response.status(200).json(userName);
  }
 // search by name 
  async show(request, response) {
    const { name } = request.query;
    const userValidator = await User.find({ name });
    console.log(name)
    return response.json(userValidator);
    
  }
}

module.exports = new Dashboard();
