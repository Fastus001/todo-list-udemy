import {Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';

  config: { [key: string]: string | Date} = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];


  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista Zadań',
        footer: '© Lista Zadań zbudowana w angularze.',
        date: new Date()
      };
    }, 500);
    this.sortTasks();
  }

  clearTasks(): void{
      this.tasks = [];
  }

  createTask(): void{
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode(): void {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task): void {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks(): void {
    this.tasks = this.tasks.sort(((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1));
  }
}
