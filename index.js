const express = require("express");
const app = express();
const port = 3030;

const cors = require("cors");
const morgan = require("morgan");

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// REQUIRE ROUTERS
const usersRouter = require("./src/routers/users");

// ADD ROUTERS TO APP

const userRouter = require('./src/routers/users')
app.use('/users', userRouter)

const booksRouter = require('./src/routers/books')
app.use('/books', booksRouter )

const filmRouter = require('./src/routers/films')
app.use('/films', filmRouter )

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
