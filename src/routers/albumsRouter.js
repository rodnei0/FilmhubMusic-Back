import * as albumsController from '../controllers/albumsController.js'
import { Router } from "express";

const albumsRouter = Router();

albumsRouter.get("/albums", albumsController.getAlbums);

export default albumsRouter;
