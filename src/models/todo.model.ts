// src/models/todo.model.ts

/**
 * Core Type representing a fully formed Todo record from the PostgreSQL database.
 */
export type TTodo = {
  id: string;              
  title: string;
  description?: string | null; 
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Payload required to create a brand new Todo.
 */
export type TTodoCreateInput = {
  title: string;
  description?: string | null;
  isDone?: boolean;
};

/**
 * Payload required when executing an update operation.
 */
export type TTodoUpdateOptions = {
  id: string; 
  title?: string;
  description?: string | null;
  isDone?: boolean;
};