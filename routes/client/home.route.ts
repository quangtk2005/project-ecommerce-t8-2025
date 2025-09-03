import { Request, Response, Router } from "express";
const router = Router( { caseSensitive: true });

router.get("", (req: Request, res: Response) => {
  res.send("TRANG CHỦ")
});

export default router;