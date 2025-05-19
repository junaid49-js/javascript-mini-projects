let pendingTasks = [];
let completedTasks = [];

let addTask = (task) => {
    pendingTasks.push(task);
};

let showTasks = () => {
    console.log("Pending Tasks:");
    pendingTasks.forEach((task, i) => console.log(`${i}: ${task}`));
    console.log("Completed Tasks:");
    completedTasks.forEach((task, i) => console.log(`${i}: ${task}`));
};

let checkTask = (index) => {
    if (index >= 0 && index < pendingTasks.length) {
        let completedTask = pendingTasks.splice(index, 1)[0];
        completedTasks.push(completedTask);
    } else {
        console.log("Invalid task index.");
    }
};

let deletePendingTask = (index) => {
    if (index >= 0 && index < pendingTasks.length) {
        let deleted = pendingTasks.splice(index, 1)[0];
        console.log(`Deleted task: ${deleted}`);
    } else {
        console.log("Invalid task index.");
    }
};

let deleteCompletedTask = (index) => {
    if (index >= 0 && index < completedTasks.length) {
        let deleted = completedTasks.splice(index, 1)[0];
        console.log(`Deleted task: ${deleted}`);
    } else {
        console.log("Invalid task index.");
    }
};


console.log("to-do.js!");

//How to run
//> node
//> .load to-do.js
