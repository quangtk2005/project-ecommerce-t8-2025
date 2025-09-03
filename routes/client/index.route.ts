import { Application, Request, Response, Router } from "express";
import home from "./home.route";
import { checkInternet } from "../../middlewares/client/middlewares";
const router = Router();

// router.use(checkInternet);
router.use('/', home);

router.all('{*splat}', (req: Request, res: Response) => {
  res.status(404).render("client/pages/status/404");
});
export default router;
