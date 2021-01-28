const mongoose = require('mongoose');

const PreRegistrationSchema = new mongoose.Schema({

    pre_register_name: String,

    user_admin:{

        type: mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    }
  
})

module.exports = new mongoose.model('PreRegister', PreRegistrationSchema);