import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { createTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    try {
      if (taskFound) {
        return taskFound;
      } else {
        return new NotFoundError('Task not found');
      }
    } catch (error) {
      console.log(error);
    }
  }

  createTask(task: createTaskDto) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  updateTask(task : UpdateTaskDto) {
    return 'Update task';
  }

  deleteTask() {
    return 'Delete task';
  }

  updateTaskStatus() {
    return 'Patch task';
  }
}
