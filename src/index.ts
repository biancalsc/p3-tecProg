import Geometry from "./classes/Geometry";
import Point from "./classes/Point";
import dotenv from "dotenv";
import cors from "cors";
import express, {Request, Response} from "express"

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/dois", (req:Request, res:Response) => {
    const geometry = new Geometry(toString);
    const points = geometry.getPoints();
    const perimetro = geometry.perimeter();

    res.send(geometry.toString());
})

