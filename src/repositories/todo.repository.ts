import { prisma } from "../utils/prisma";

type TTodoCreateInput = {
  title: string;
};

type TTodoUpdateOptions = {
  id: string;
  title?: string;
  completed?: boolean;
};

export default class TodoRepo {

  // CREATE
  static async createTask(data: TTodoCreateInput) {
    try {
      const newTodo = await prisma.todo.create({
        data: {
          title: data.title,
          completed: false,
        },
      });

      return newTodo;
    } catch (error) {
      return Promise.reject("Failed to create task.");
    }
  }

  // READ ALL
  static async getAllTasks() {
    try {
      return await prisma.todo.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      return Promise.reject("Failed to retrieve tasks.");
    }
  }

  // UPDATE
  static async update(data: TTodoUpdateOptions) {
    try {
      const updatedTodo = await prisma.todo.update({
        where: { id: data.id },
        data: {
          title: data.title,
          completed: data.completed,
        },
      });

      return updatedTodo;
    } catch (error) {
      return Promise.reject("Invalid task id or task does not exist.");
    }
  }

  // DELETE
  static async delete(id: string) {
    try {
      await prisma.todo.delete({
        where: { id },
      });

      return "Successfully deleted task.";
    } catch (error) {
      return Promise.reject("Invalid task id or task does not exist.");
    }
  }
}