import { Router } from "express"; 
import albumsRouter from "./albumsRouter.js";

const router = Router();

router.use(albumsRouter);

export default router;