import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//Connection
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Started And Connected To Database "));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map