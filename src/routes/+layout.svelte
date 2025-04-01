<script lang="ts">
  import { sidebarOpen } from '$lib/stores/sidebarStore';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';

	let { children } = $props();
	// let isSidebarOpen = $state(true); // Track sidebar state

	// // Update `isSidebarOpen` when Sidebar changes
	// function handleSidebarStateChange(event: CustomEvent<boolean>) {
	// 	isSidebarOpen = event.detail;
	// }
</script>

<Sidebar />

<div id="content-area" class="transition-all duration-200 ease-in pt-16 {$sidebarOpen ? 'ml-0 md:ml-56' : 'ml-0 md:ml-14'}">
  <Header />
  
  <div class="p-8">
    {@render children()}
  </div>
</div>
