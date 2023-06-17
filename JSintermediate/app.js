const todos = [{
            id: 1,
            title: "Teach react to student",
            completed: true
        }, {
            id: 2,
            title: "Breakfast",
            completed: false

        }, {
            id: 3,
            title: "Go to bank",
            completed: false

        },

    ]
    //----------------------------------------------

//const titles = todos.map(todo => todo.title);

//----------------------------------------------

//const titles = todos.map(function(todo) => {
//   return todo.title;
//})
//----------------------------------------------
const titles = todos.map(todo => {
    return todo.title;
})

console.log(titles);