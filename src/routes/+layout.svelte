<script lang="ts">
  import { sidebarOpen, sidebarType } from '$lib/stores/sidebarStore';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';

	let { children } = $props();

</script>

<Sidebar />

<div id="content-area" class="transition-all duration-200 ease-in pt-16 {$sidebarOpen ? 'ml-0 md:ml-56' : 'ml-0 md:ml-14'}">
  <Header />
  
  <div class="p-8
    {$sidebarType ? '' : 'pl-12'}">
    {@render children()}
  </div>
</div>
