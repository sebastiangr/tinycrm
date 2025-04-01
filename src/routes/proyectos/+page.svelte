<script lang="ts">

const projects = [
  { name: 'Proyecto 1', status: 'En curso' },
  { name: 'Proyecto 2', status: 'Completado' },
  { name: 'Proyecto 3', status: 'Pendiente' },
  { name: 'Proyecto 4', status: 'En curso' },
  { name: 'Proyecto 5', status: 'Completado' },
  { name: 'Proyecto 6', status: 'Pendiente' },
  { name: 'Proyecto 7', status: 'En curso' },
  { name: 'Proyecto 8', status: 'Completado' },
  { name: 'Proyecto 9', status: 'Pendiente' },
  { name: 'Proyecto 10', status: 'En curso' },
]

</script>

<div class="mx-auto">
  <h1 class="text-3xl font-bold mb-8">Proyectos</h1>

  <div class="card bg-base-200">
    <div class="card-body">
      <h2 class="text-xl font-semibold mb-4">Listado</h2>
      <ul class="list-disc pl-5 space-y-2">
        {#each projects as project}
          <li class="flex items-center gap-2">
            <span class="text-lg font-semibold">{project.name}</span>
            <span class="text-sm text-gray-500">({project.status})</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>