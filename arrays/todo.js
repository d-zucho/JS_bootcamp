todos = [{
    text: 'find job I like',
    completed: false
}, {
    text: 'redecorate office',
    completed: true
}, {
    text: 'keep studying code',
    completed: true
}, {
    text: 'download node.js',
    completed: false
}]



// ------ Create function to remove a todo by text value

const deleteTodo = function (todos, todoTitle) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
        console.log(todos)
    } else {
        console.log('no match found')
    }
}
//deleteTodo(todos, 'download node.js')




// ----- create function to filter out todos that are NOTE completed

const getThingsTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false
    })
}
// console.log(getThingsTodo(todos, false))




// ------ create function to sort array by which are compelted
// ------ use to put completed todos at bottom of list

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}



sortTodos(todos)

console.log(todos)