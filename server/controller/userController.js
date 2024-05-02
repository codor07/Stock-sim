import mongoose from "mongoose";
import User from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    const { name, email, password, attemptedQuizes } = req.body;
    if (!name || !email || !password) {
      return res.status(422).json({ message: "Some Field is missing" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.json({ error: "User already Exist" });
    }

    let total_money = 1000000;
    let company_invested = [];
    let company_watchlist = [];

    const user = new User({ name, email, password, total_money, company_invested, company_watchlist});
    const userRegister = await user.save();
    if (userRegister) {
      return res.status(201).json({ message: "User registered successfully" });
    } else return res.status(500).json({ message: "Cannot Register" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).json({ message: "Something is missing" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(200).json({ message: "User does not exist" });
    }

    const isPasswordValid = (await user.password) === password;
    if (!isPasswordValid) {
      return res.status(200).json({ message: "Invalid Password" });
    }
    // console.log(user)
    return res
      .status(201)
      .json({ userInfo: user, message: "User login successfully" });
  } catch (error) {
    console.log("Some error occured during getting user", error);
  }
};

export const userBuy = async (req, res) => {
  try{
    const {email, newBalance, quantity, company_name, company_invested} = req.body;
    let prev_quant = 0;
    for(let item of company_invested){
      if(item.name === company_name)prev_quant = item.quantity;
    }
    let new_company_invested = company_invested.filter(
      (item) => {
        return item.name !==  company_name;
      }
    )
    new_company_invested.push({name:company_name, quantity: (quantity + prev_quant)});

    await User.updateOne({email: email}, {
      $set: {
        total_money : newBalance,
        company_invested: new_company_invested
      }
    })

    return res.json({ status : "ok", data: "investement has been successfull"});
  }
  catch(error){

    return res.json({ status : "not ok", data: error});
  }
};

export const userSell = async (req, res) => {
  try{
    const {email, ownedCurrently, quantity, newBalance, company_name, company_invested} = req.body;
    let new_quant = ownedCurrently - quantity;
    
    let new_company_invested = company_invested.filter(
          (item) => {
            return item.name !==  company_name;
          }
        )
        
    if(new_quant != 0){
      new_company_invested.push({name:company_name, quantity: (new_quant)});
    }

    await User.updateOne({email: email}, {
      $set: {
        total_money : newBalance,
        company_invested: new_company_invested
      }
    })

    return res.json({ status : "ok", data: "stock has been sold successfully"});
  }
  catch(error){

    return res.json({ status : "not ok", data: "error in selling"});
  }
};


export const updateUserWatchList = async (req, res) => {
  try{
    const {email, newEntry, allWatchList} = req.body;
    
    allWatchList.push(newEntry);
    await User.updateOne({email: email}, {
      $set: {
        company_watchlist : allWatchList
      }
    })

    return res.json({ status : "ok", data: "watchlist  has been updated"});
  }
  catch(error){

    return res.json({ status : "watchlist cannot be updated", data: error});
  }
};
