import { Component } from '@angular/core';

/*
class Todo {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}
*/

class Todo {
    constructor(public title: string,
                public completed: boolean = false) {}
}

const todos: Todo[] = [
    {
        title: 'Make app',
        completed: true
    },
    {
        title: 'Learn Angular 2',
        completed: false
    },
    {
        title: 'Learn TS',
        completed: false
    }
];
@Component ({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular2Do';
    todos: Todo[] = todos;

    create() {
        let todo: Todo = new Todo(this.newTodoTitle);
        this.todos.push(todo);
        this.newTodoTitle = '';
    }

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}