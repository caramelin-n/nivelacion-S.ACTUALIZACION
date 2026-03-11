import express from 'express';
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();

// Servir archivos estáticos (CSS, JS, imágenes, etc.) desde la carpeta web1
app.use(express.static(path.join(__dirname, "web1")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "web1/index.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});