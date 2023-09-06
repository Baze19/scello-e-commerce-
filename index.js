const app = require("./app.js");
const {sequelize} = require('./models')
// const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, async () =>{
   console.log(`server running in ${process.env.NODE_ENV} mode on port:${PORT}`)
  await sequelize.authenticate()
  console.log("database synced")
}
  // console.log(`server running in ${process.env.NODE_ENV} mode on port:${PORT}`)
  
);

module.exports =app;