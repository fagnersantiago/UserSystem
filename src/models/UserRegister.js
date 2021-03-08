import mongoose from 'mongoose';
const  { Schema, model } = mongoose
const UserRegisterSchema = new Schema ({

    name: String,
    email: String,
    cpf: Number,
    competence: [String],
    phone: String,
    validator: Boolean,

    user_admin:{

      type: Schema.Types.ObjectId,
      ref:'Admin'
  },


  });
  
export default model('UserRegister', UserRegisterSchema);