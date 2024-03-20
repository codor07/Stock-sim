import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  total_money : {
    type : Number,
    required : true
  },
  company_invested : {
      type : Array,
      required : true
  },
  company_watchlist : {
      type : Array,
      required : true
  }
  
});

const User = mongoose.model("User", userSchema);
export default User;
