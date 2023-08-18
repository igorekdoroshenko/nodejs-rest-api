const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

// mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message);
    process.exit(1);
  });

// app
//   .listen(3000, () => {
//     console.log("Server running. Use our API on port: 3000");
//   })

// .then(() => console.log("Database connect sucess"))
// .catch((error) => console.log(error.message));
