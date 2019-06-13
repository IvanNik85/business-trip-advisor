const path = require("path");
const fs = require("fs");

const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bc = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      maxlength: 30,
      validate(email) {
        if (!validator.isEmail(email)) throw new Error("Email is invalid!");
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 40
    },
    tokens: [{
      token: {
        type: String,
        required: true,
      }
    }]
  }, { timestamps: true }
);


// Create new jsonwebtoken for user
userSchema.methods.createJWT = function () {
  const token = jwt.sign({ _id: this._id }, JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../appconfig.json"))
  ).jwtSecret);
  this.tokens.push({ token });
  return token;
}


// Custom jsonStringify
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.isAdmin;
  delete userObject.tokens;
  return userObject;
}

// Find user by email and password
userSchema.statics.findByEmailAndPass = async function ({ email, password }) {
  const user = await this.findOne({email});
  if (!user) throw new Error("Invalid credentials!");
  if (!bc.compareSync(password, user.password)) throw new Error("Invalid credentials!");
  return user;
};

// save() preprocessor
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) this.password = await bc.hash(this.password, 8);
  next();
});

module.exports = mongoose.model('User', userSchema);
