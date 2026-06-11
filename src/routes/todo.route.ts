import express from "express";
import TodoCtrl from "../controllers/todo.controller"; // Keep this one

const router = express.Router();

router.get("/", TodoCtrl.getAllTasks); 
router.post("/", TodoCtrl.createTask);
router.put("/", TodoCtrl.update);
router.delete("/", TodoCtrl.delete);

export default router;