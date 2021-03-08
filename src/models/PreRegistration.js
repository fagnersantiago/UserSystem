import  mongoose from 'mongoose';
const { Schema, model } = mongoose
const PreRegistrationSchema = new Schema({

    pre_register_name: String,

    // user_admin:{

    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'Admin'
    // }
  
})

export default new model('PreRegister', PreRegistrationSchema);