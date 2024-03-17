import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, CODE!" });
  console.debug("Received a request for /.");
});

router.get("/healthz", (req, res) => {
  res.status(200);
  res.send("OK");
});

export { router as helloWorldRouter };
