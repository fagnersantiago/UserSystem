const User = require("../models/UserRegister");


class Dashboard {
  async index(request, response) {
    const userName = await User.find();

    userName.sort(function (name1, name2) {
      return name1.name < name2.name ? -1 : name2.name > name1.name ? 1 : 0;
    });

    return response
    .status(200)
    .json(userName);  
  }
 
    
}

module.exports = new Dashboard();
