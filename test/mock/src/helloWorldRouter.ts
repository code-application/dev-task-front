import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, CODE!" });
  console.debug("Received a request for /.");
});

export { router as helloWorldRouter };
