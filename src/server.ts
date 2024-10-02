import "./config/dotenv";
import app from "./index";
import { connectToDb } from "./db/mongoose";

const PORT: number = parseInt(process.env.PORT as string);

app.listen(PORT, (err?: any): void => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is up and Run on PORT : 4000`);
  connectToDb();
});
