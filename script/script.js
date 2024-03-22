// class

class Todo{
constructor(type, section) {
    this.todoArr = [];
    this.type= type;
    this.section = section;
}

get TodoList(){
    return `${this.todoArr} ${this.type} ${this.section}`;
}

AddTodo(todo) {
    this.todoArr.push(todo);
}

editTodo(todoEdit, newTodo){
    //map over the array with index.
    this.todoArr.map((item, index) => {
        if (value === todoEdit){
            this.todoArr[index] = newTodo;
            return this.todoArr;
                }
    })
    const newTodoArray = this.todoArr.map((item, index))
        if (value === todoEdit){
            this.todo
        }

        module.export = {
            Todo,
        };

    //if todoItem == given

    //add the new todo to that  index

}
}

const ALTSchoolTodo = new Todo()
const 