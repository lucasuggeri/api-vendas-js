import { Router } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import productsRouter from "./products/productsRouter";

const routes = Router()

routes
    .use(cors())
    .use(bodyParser.json())
    .use('/', productsRouter)

    export default routes;