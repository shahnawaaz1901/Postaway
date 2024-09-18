import "./config/dotenv";
import app from "./index";
import { connectToDb } from "./db/mongoose";
app.listen(4000, (err?: any): void => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is up and Run on PORT : 4000`);
  connectToDb();
});
