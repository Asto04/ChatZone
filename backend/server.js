const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
//router
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running ashish");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server started on port 5000 ${PORT}`.yellow.bold)
);

// backend :-npm i colors
// 	  npm i jsonwebtoken
// 	  npm i nodejs
// 	  npm i express
// 	  npm i axios
// 	  npm i dotenv
// 	  npm i express-async-handler
// 	  npm i mongoose
// 	  npm i nodemon
//    npm i bcryptjs

// frontend :- npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//  	    npm i react
// 	    npm i react
// 	    npm i react-router-dom
// npm i jsonwebtoken
