import { Todo } from "../models/todo.model";

export class TodosService {
   
   
    public todos:Todo [] = [
        new Todo("Spring boot", new Date("12 Dec 2018"), true),
        new Todo("Spring Security", new Date("13 Jan 2018"), true),
        new Todo("Amazone Web services", new Date("25 Marc 2020"), true),
        new Todo("Javascript", new Date("15 Dec 2023"), true),
        new Todo("angular Framework", new Date("15 Dec 2023"), false)
        ]
    constructor() {}

    public getTodos(): Todo [] {
        return this.todos;
    }

    public addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    searchTodo(key: string): Todo[] {
        const result: Todo[] = [];

        for(const todo of this.todos) {
            if(todo.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                result.push(todo);
            }
        }
        return result;
    }


    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter((item)=> {return item !== todo});
    }
}