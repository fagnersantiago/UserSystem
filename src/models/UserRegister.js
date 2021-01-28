const mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema ({

    name: String,
    email: String,
    cpf: Number,
    competence: [String],
    telefone: String,
    validator: Boolean,

    user_admin:{

      type: mongoose.Schema.Types.ObjectId,
      ref:'Admin'
  },

  pre_register_name: {

      type: mongoose.Schema.Types,
      ref:'PreRegister'
  }

  });
  
module.exports = mongoose.model('UserRegister', UserRegisterSchema);