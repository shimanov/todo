export class Model {
    user;
    items;
    constructor() {
        this.user = "Vasia";
        this.items = [new TodoItem("test 1", false),
                      new TodoItem("test 2", false),
                      new TodoItem("test 3", false),
                      new TodoItem("test 4", false),
                      new TodoItem("test 5", false)];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}