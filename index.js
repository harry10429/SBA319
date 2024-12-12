const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const db = require("./db/conn");
const MenuRoutes = require("./routes/menus");

const PORT = process.env.PORT || 5052;

const MealMenu = require("./models/menu");

app.use(express.static("public"));
app.use((req, res, next) => {
  console.log("Middleware: I run for all routes");
  next();
});

app.use((req, res, next) => {
  const time = new Date();
  console.log(
    `-----
          ${time.toLocaleDateString()}: Received a ${req.method} request to ${
      req.url
    }.`
  );

  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

app.use("/api/menu", MenuRoutes);

app.get("/", (req, res) => {
  res.send(
    "<div>this is the homePage <br/> 'api/menu/' or 'api/menu/:id' to display one or all meal list <br/> 'api/menu/' to add json to database <br/> 'api/menu/:id' to update or delete one specific meal</div>"
  );
});

app.listen(PORT, () => {
  console.log("listening to the request");
});
