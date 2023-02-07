const tasks = [];

// function addTask(title, state) {
//   tasks.push({Title: title, State: state})
//       return tasks
// }
const addTask = (title, state) => {
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].Title === title) {
      return "Error: Ya existe";
    }
  }
      tasks.push({Title: title, State: state})
      return tasks
}

console.log(addTask("Jugar al basket", "Pendiente"));

console.log(addTask("Leer un libro", "Pendiente"));

const alreadyExist = (str) => {
  const tasksFilter = [];
  tasks.forEach((tareasss) => {
    if (tareita.Title.includes(str)) {
      tasksFilter.push(tareasss);
    }
  });
  return tasksFilter;
};

// function showTask(state){
//     for (const task of tasks) {
//         if (task.State === state){
//             task.filter(tar => tar === state)
//             return task
//         }
//     }
// }
// console.log(showTask("En progreso"))
// console.log(showTask("Pendiente"))
// console.log(showTask("shjdh"))



// --------------------

// const tasks = [
//   {
//     Title: "Eat Pizza",
//     State: "Finished/Done",
// }];

// const addTask = (title, state) => {
//   for (let index = 0; index < tasks.length; index++) {
//     if (tasks[index].Title === title) {
//       return "Error: Already Exists";
//     }
//   }
//       tasks.push({Title: title, State: state})
//       return tasks;
// };

//   const alreadyExistTask = (str) => {
//   const tasksFiltradas = [];
//   tasks.forEach((taskNew) => {
//     if (taskNew.Title.includes(str)) {
//       tasksFiltradas.push(taskNew);
//     }
//   });
//   return tasksFiltradas;
// };

//   function showTask(state){
//     for (const task of tasks) {
//         if (task.State === state){
//             // tasks.filter(task => task === state)
//             return task
//         }
//     }
// };

// console.log(addTask("Do Gym", "Pendient"))