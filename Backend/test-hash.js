import bcrypt from "bcryptjs";

const hashed = "$2b$10$7WtNY0Lj8hal4JaaeUrsBOnfTgj8eX4WCpwrHYsWFh2YRtjCaojYW";

bcrypt.compare("123456", hashed).then(result => {
  console.log("Password Match:", result);
});
