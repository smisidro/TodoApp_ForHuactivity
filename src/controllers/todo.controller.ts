import { Request, Response } from "express";
import Joi from "joi";
import TodoSvc from "../services/todo.service";

export default class TodoCtrl {

  // GET ALL
  static async getAllTasks(req: Request, res: Response) {
    try {
      const result = await TodoSvc.getAllTasks();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  // CREATE
  static async createTask(req: Request, res: Response) {
    const { title } = req.body;

    const schema = Joi.object({
      title: Joi.string().required(),
    });

    const { error } = schema.validate({ title });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    try {
      const result = await TodoSvc.createTask({ title });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  // UPDATE
  static async update(req: Request, res: Response) {
    const { id, title, completed } = req.body;

    const schema = Joi.object({
      id: Joi.string().required(),
      title: Joi.string().optional(),
      completed: Joi.boolean().optional(),
    });

    const { error } = schema.validate({ id, title, completed });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    try {
      const updateData = { id, title, completed } as any;
      const result = await TodoSvc.update(updateData);
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  // DELETE
  static async delete(req: Request, res: Response) {
    const id = (req.query.id || req.body.id) as string;

    if (!id) {
      return res.status(400).json({ message: "Task ID is required." });
    }

    try {
      const result = await TodoSvc.delete(id);
      return res.json({ message: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}