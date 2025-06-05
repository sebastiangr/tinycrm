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

  import { ChevronRight, ChevronLeft, Pencil, Trash, Reply } from "lucide-svelte";

  const messages = [
    { id: 1, subject: "Message 1", from: "John Doe", date: "2023-02-20" },
    { id: 2, subject: "Message 2", from: "Jane Doe", date: "2023-02-19" },
    { id: 3, subject: "Message 3", from: "Bob Smith", date: "2023-02-18" },
  ];

  let selectedMessage: number | null = null;

</script>

<div class="mx-auto">
  <h1 class="text-3xl font-bold mb-8">Inbox</h1>


  <div class="flex h-screen">
    <!-- Left inbox list -->
    <div class="w-1/3 bg-base-200 p-4">
      <ul>
        {#each messages as message}
          <li
            class={`py-2 px-4 cursor-pointer hover:bg-base-100 ${
              selectedMessage === message.id ? "bg-base-100" : ""
            }`}
            on:click={() => (selectedMessage = message.id)}
          >
            <div class="flex justify-between">
              <div>
                <span class="font-semibold">{message.subject}</span>
                <span class="text-sm text-gray-500"> from {message.from}</span>
              </div>
              <div class="text-sm text-gray-500">{message.date}</div>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Right new message block -->
    <div class="w-2/3 bg-base-200 p-4">
      {#if selectedMessage}
        <h2 class="text-xl font-semibold mb-4">Message {selectedMessage}</h2>
        <div class="flex justify-between mb-4">
          <button class="btn btn-sm btn-primary">
            <Pencil />
            Reply
          </button>
          <button class="btn btn-sm btn-error">
            <Trash />
            Delete
          </button>
        </div>
        <div class="prose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      {:else}
        <h2 class="text-xl font-semibold mb-4">Select a message</h2>
      {/if}
    </div>
  </div>


  <!-- <div class="card bg-base-200">
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
  </div> -->
</div>