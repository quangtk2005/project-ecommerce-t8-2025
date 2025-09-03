import { Request, Response, Router } from "express";
import * as giftCardsController from "../../controllers/admin/giftCards.controller";
const router = Router( { caseSensitive: true });

router.get("", giftCardsController.index);

export default router;