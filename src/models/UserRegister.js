const mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema ({

    name: String,
    email: String,
    cpf: Number,
    competence: [String],
    phone: String,
    validator: Boolean,

    user_admin:{

      type: mongoose.Schema.Types.ObjectId,
      ref:'Admin'
  },


  });
  
module.exports = mongoose.model('UserRegister', UserRegisterSchema);