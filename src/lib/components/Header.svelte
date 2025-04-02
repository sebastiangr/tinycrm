<script lang="ts">
	import { menuItems } from '$lib/stores/menuStore';
  import { sidebarOpen, sidebarType } from '$lib/stores/sidebarStore';
	import { Menu, Search, Settings, UserRound, X } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
  
  // Mobile menu state
  let mobileMenuOpen = $state(false);  
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  // Close mobile menu when clicking outside or on navigation
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  $effect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        mobileMenuOpen = false;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  
</script>
<!-- bg-base-200 -->
<header class="transition-[padding] duration-200 ease-in fixed top-0 right-0 left-0 
{$sidebarOpen ? 'pl-4 md:pl-56' : 'pl-4 md:pl-24'} 
{$sidebarType ? '' : 'pt-8 ml-4'}
bg-base-100 z-10 pt-4 pb-4">
  <div class="flex flex-row justify-between p-0 h-auto">
    
    <div class="md:pl-6 flex flex-row w-full pr-4">
      <!-- Mobile menu button -->
      <button id="mobile-menu-button" class="flex md:hidden btn btn-ghost btn-circle mr-4" onclick={toggleMobileMenu}>        
        <Menu />
      </button>        

      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
          <Search class="h-5 w-5" />
        </div>
        <input type="search" class="input input-bordered pl-10 w-full md:w-96" placeholder="Buscar..." />
      </div>
    </div>
  
    <div class="settings flex items-center justify-end space-x-2 mr-4">
      <!-- User and Settings -->
      <a href="/settings" class="btn btn-ghost btn-circle">
        <Settings />
      </a>

      <div class="dropdown dropdown-end">
        <button class="btn btn-primary btn-circle ">
          <div class="w-10 rounded-full text-primary-content flex items-center justify-center">
            <UserRound />
          </div>
        </button>
        <ul class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    </div>

  </div>
</header>

<!-- Mobile Menu Drawer -->
{#if mobileMenuOpen}
  <!-- Overlay -->
  <button 
    type="button"
    class="fixed inset-0 bg-black opacity-50 z-20 md:hidden" 
    onclick={closeMobileMenu}
    onkeydown={e => e.key === 'Escape' && closeMobileMenu()}
    aria-label="Close mobile menu"
    transition:fade={{ duration: 200 }}
  ></button>
  
  <!-- Drawer -->
  <div class="fixed top-0 left-0 h-full w-64 bg-base-200 z-30 md:hidden overflow-y-auto"
    transition:fly={{ x: -300, duration: 300 }} >
    <div class="p-4">
      <!-- Close button -->
      <button class="btn btn-ghost btn-circle absolute top-4 right-4" onclick={closeMobileMenu}>
        <X />
      </button>
      
      <!-- App logo/name -->
      <div class="flex items-center justify-center mb-8 mt-2">
        <h1 class="text-xl font-bold">TinyCRM</h1>
      </div>
      
      <!-- Navigation items - same as sidebar -->
      <ul class="menu menu-md p-0 w-full">
        {#each $menuItems as item}
          {@const Icon = item.icon}
          <li class="{item.enabled ? 'flex' : 'hidden'}">
            <a href={item.href} class="group flex items-center p-2 transition duration-200 ease-in-out" onclick={closeMobileMenu}>
              <!-- <Icon size="22" class="mr-2 group-hover:scale-110"/> -->
              <Icon size="22"/>
              <span>{item.name}</span>
            </a>
          </li>
        {/each}
      </ul>

    </div>
  </div>
{/if}