import express from "express";
import todoRouter from "./todo.route"; // Or organization.route.ts
const router = express.Router();

router.get("/v1", (_, res) => {
  res.json({
    message: "Welcome to my API",
  });
});
router.use("/todo", todoRouter);
export default router;
