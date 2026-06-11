import TodoRepo from "../repositories/todo.repository";

export default class TodoSvc {

  static async getAllTasks() {
    return await TodoRepo.getAllTasks();
  }

  static async createTask(task: { title: string }) {
    return await TodoRepo.createTask(task);
  }

  static async update(task: {
    id: string;
    title?: string;
    completed?: boolean;
  }) {
    return await TodoRepo.update(task);
  }

  static async delete(id: string) {
    return await TodoRepo.delete(id);
  }
}