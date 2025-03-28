<script lang="ts">
  let tasks = $state([
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
    { id: 4, name: 'Task 4' },
  ]);

  // function addTask() {
  //   const taskName = (document.querySelector('input[type="text"]') as HTMLInputElement).value;
  //   if (taskName) {
  //     tasks.push({ id: tasks.length + 1, name: taskName });
  //     (document.querySelector('input[type="text"]') as HTMLInputElement).value = '';
  //     renderTasks();
  //   }
  // }

  // function deleteTask(id: number) {
  //   tasks = tasks.filter(task => task.id !== id);
  //   renderTasks();
  // }

  // function renderTasks() {
  //   const taskList = document.querySelector('ul.list-disc');
  //   taskList!.innerHTML = '';
  //   tasks.forEach(task => {
  //     const taskElement = document.createElement('li');
  //     taskElement.className = 'flex items-center justify-between';
  //     taskElement.innerHTML = `
  //       <span>${task.name}</span>
  //       <button class="btn btn-xs btn-error" onclick="deleteTask(${task.id})">Borrar</button>
  //     `;
  //     taskList!.appendChild(taskElement);
  //   });
  // }

  // renderTasks();


  function addTask() {
    const taskName = (document.querySelector('input[type="text"]') as HTMLInputElement).value;
    if (taskName) {
      tasks.push({ id: tasks.length + 1, name: taskName });
      (document.querySelector('input[type="text"]') as HTMLInputElement).value = '';
    }
  }

  function deleteTask(id: number) {
    tasks = tasks.filter(task => task.id !== id);
  }


</script>

<div class="flex flex-col w-full max-w-md mx-auto mt-8 p-6 bg-base-200">
  <h1 class="text-2xl font-semibold text-base-content mb-4">Tareas</h1>
  
  <div class="mb-4">
    <input type="text" placeholder="New Task" class="input input-bordered w-full" />
    <button class="btn btn-primary w-full mt-2" onclick={addTask}>Añadir tarea</button>
  </div>
  
  <ul class="list-disc pl-5 space-y-2">

    {#each tasks as task}
      <li class="flex items-center justify-between">
        <span>{task.name}</span>
        <button class="btn btn-xs btn-error">Borrar</button>
      </li>
    {/each}
<!-- 

    <li class="flex items-center justify-between">
      <span>Task 1</span>
      <button class="btn btn-xs btn-error">Borrar</button>
    </li>
    <li class="flex items-center justify-between">
      <span>Task 2</span>
      <button class="btn btn-xs btn-error">Borrar</button>
    </li>
    <li class="flex items-center justify-between">
      <span>Task 3</span>
      <button class="btn btn-xs btn-error">Borrar</button>
    </li> -->
  </ul>
</div>


<!-- <div class="flex flex-col w-full max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
  <h1 class="text-2xl font-semibold text-gray-800 mb-4">Tareas</h1>
  
  <div class="mb-4">
    <input type="text" placeholder="New Task" class="input input-bordered w-full" />
    <button class="btn btn-primary w-full mt-2" onclick="addTask()">Añadir tarea</button>
  </div>
  
  <ul class="list-disc pl-5 space-y-2"></ul>
</div>  -->
<!-- 
<script lang="ts">

</script>




-->