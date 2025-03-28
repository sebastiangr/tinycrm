<script lang="ts">

</script>
<div class="flex flex-col w-full max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
  <h1 class="text-2xl font-semibold text-gray-800 mb-4">Tareas</h1>
  
  <div class="mb-4">
    <input type="text" placeholder="New Task" class="input input-bordered w-full" />
    <button class="btn btn-primary w-full mt-2">Añadir tarea</button>
  </div>
  
  <ul class="list-disc pl-5 space-y-2">
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
    </li>
  </ul>
</div>
