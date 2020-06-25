const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const indexModel = require("./models/index");
const sequelize = require("./util/database");

const app = express();

var fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '"./public/images"');
  },
  filename: (req, file, cb) => {
    cb(null,   file.originalname);
  },
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage }).single("image"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
sequelize
  // .sync({force:true})
  .sync()

  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
