/* external imports */
require("dotenv").config();

/* internal imports */
const app = require("./app");
const connectDB = require("./utils/database.util");

/* application port */
const port = process.env.PORT || 3000;

/* database connection */
connectDB();

/* establish server port */
app.listen(port, () => {
  console.warn(`Server is running on port ${port}`);
});
