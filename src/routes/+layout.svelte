<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';

	let { children } = $props();
	let isSidebarOpen = $state(true); // Track sidebar state

	// Update `isSidebarOpen` when Sidebar changes
	function handleSidebarStateChange(event: CustomEvent<boolean>) {
		isSidebarOpen = event.detail;
	}
</script>

<Sidebar on:stateChange={handleSidebarStateChange} />

<div id="content-area" class="transition-all pt-16 {isSidebarOpen ? 'ml-0 lg:ml-64' : 'ml-0 lg:ml-14'}">
  <Header />
  
  <div class="p-6">
    {@render children()}
  </div>
</div>
