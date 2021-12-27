const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const tasks = require('./overall.js');


// Delete a todo item 
var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter(
        (todo) => todo.title !== title);
    saveTodos(filteredtodos);
  
    return todos.length !== filteredtodos.length;
};


// Utility functions
var fetchTodos = () => {
    try {
        var todosString = 
            fs.readFileSync('tasks-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('tasks-data.json', 
        JSON.stringify(todos));
};
  
var logTodo = (todo) => {
    console.log('## ---## --- ##');
    console.log(`It's title is: ${todo.title}`);
};
  
module.exports ={
    deleteTodo
}