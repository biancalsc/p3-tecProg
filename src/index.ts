import Geometry from "./classes/Geometry";
import dotenv from "dotenv";
import cors from "cors";
import express, {Request, Response} from "express"
import Point from "./classes/Point";

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/dois/:x/:y", (req:Request, res:Response) => {
    const {x,y} = req.params;
    const ponto = new Point(parseInt(x), parseInt(y));

    const geometry = new Geometry(ponto)
    const points = geometry.getPoints();
    const perimetro = geometry.perimeter();
    res.send(`points: (${points},perimeter: ${perimetro})`);

})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
});