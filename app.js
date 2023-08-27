const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;



// const fs = require("fs/promises");
// const {nanoid}= require("nanoid");





// const contacts = [];

// app.get("api/contacts", (req, res) => {
//   res.json(contacts);
// });

// const contactsDir = path.join(__dirname, "public", "contacts");
// // controllers
// app.post("api/contacts", uploud.single("cover"), async (req, res) => {
//   const { path: tempUploud, originalname } = req.file;
//   const resultUploud = path.join(contactsDir, originalname);
//   await fs.rename(tempUploud, resultUploud);
//   const cover = path.join("contacts", originalname)
//   const newContacts = {
//     id: nanoid(),
//     ...req.body,
//     cover,
//   };
//   contacts.push(newContacts);

//   res.status(201).json(newContacts);
// });