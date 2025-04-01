<script lang="ts">
	import { CircleX, Mail, Pencil } from "lucide-svelte";

  const contactLeads = [
    { name: "John Doe", email: "john.doe@example.com", portrait: "https://avatar.iran.liara.run/public/37" },
    { name: "Jane Doe", email: "jane.doe@example.com", portrait: "https://avatar.iran.liara.run/public/82"  },
    { name: "Bob Smith", email: "bob.smith@example.com", portrait: "https://avatar.iran.liara.run/public/12"  }      
  ]

</script>

<div class="mx-auto">
  <h1 class="text-3xl font-bold mb-8">Leads</h1>

  <div class="card bg-base-200">

    <ul class="list  rounded-box ">          
      {#each contactLeads as lead}
        <li class="list-row">
          <div class="flex items-center gap-2">            
            <img class="size-10 rounded-box" src="{lead.portrait}" alt="Profile avatar of NAME"/>
          </div>
          <div class="flex flex-col">
            <span>{lead.name}</span>
            <p class="text-xs font-semibold opacity-60">{lead.email}</p>
          </div>
          <div class="list-actions flex flex-row gap-2">
            <button class="btn btn-circle btn-ghost">
              <Mail size="22" strokeWidth="1.5" />
            </button>
            <button class="btn btn-circle btn-ghost">
              <Pencil size="22" strokeWidth="1.5" />
            </button>
            <button class="btn btn-circle btn-ghost">
              <CircleX size="22" strokeWidth="1.5"/>
            </button>          
          </div>            
        </li>
      {/each}        
    </ul> 

  </div>
</div>