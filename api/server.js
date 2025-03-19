import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipeRoutes.js";

// express kurulumu
const app = express();
const port = 4004;

// cors hatalarını engelleyen middleware (otomatik header ekler)
app.use(cors());

// body deki json verilerini çeviren middleware
app.use(express.json());

// tarifler için crud operasyonlarını gerçekleştireceğimiz 
// endpointleri tanımla
app.use(recipeRouter);

// dinlenecek portu belirle
app.listen(port, () => {
    console.log(`Server ${port} portunda çalışmaya başladı.`);
});
