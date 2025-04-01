<script lang="ts">
  import { sidebarOpen } from '$lib/stores/sidebarStore';
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

<header class="bg-base-200 transition-[padding] duration-200 ease-in fixed top-0 right-0 left-0 {$sidebarOpen ? 'pl-4 md:pl-56' : 'pl-4 md:pl-24'} bg-base-100 z-10 pt-4 pb-4">
  <div class="flex flex-row justify-between p-0 h-auto">
    
    <div class="md:pl-6 flex flex-row">
      <!-- Mobile menu button -->
      <!-- <button id="mobile-menu-button" class="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button> -->

      <!-- <a href="/" id="mobile-menu-button" class="flex md:hidden btn btn-ghost btn-circle mr-4">        
        <Menu />        
      </a>       -->
      <!-- Mobile menu button -->
      <button id="mobile-menu-button" class="flex md:hidden btn btn-ghost btn-circle mr-4" onclick={toggleMobileMenu}>        
        <Menu />
      </button>        
      <!-- Search -->
      <div class="form-control">
        <div class="input-group w-full max-w-lg ">
          <Search class="absolute top-1/2 ml-2 transform -translate-y-1/2 z-10" />
          <input type="text" placeholder="Buscar..." class="input input-bordered pl-10" />          
        </div>
      </div>
    </div>
  
    <div class="settings flex items-center justify-end space-x-2 mr-4">
      <!-- User and Settings -->
      <a href="/settings" class="btn btn-ghost btn-circle">
        <Settings />
      </a>

      <div class="dropdown dropdown-end">
        <button class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
            <!-- <span class="text-lg font-bold">U</span> -->
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
  <div 
    class="fixed top-0 left-0 h-full w-64 bg-base-200 z-30 md:hidden overflow-y-auto"
    transition:fly={{ x: -300, duration: 300 }}
  >
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
      <ul class="menu menu-md p-0">
        <li>
          <a href="/" class="flex items-center p-3 rounded-lg" onclick={closeMobileMenu}>
            <span class="material-icons">dashboard</span>
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/contacts" class="flex items-center p-3 rounded-lg" onclick={closeMobileMenu}>
            <span class="material-icons">contacts</span>
            <span class="ml-3">Contacts</span>
          </a>
        </li>
        <li>
          <a href="/companies" class="flex items-center p-3 rounded-lg" onclick={closeMobileMenu}>
            <span class="material-icons">business</span>
            <span class="ml-3">Companies</span>
          </a>
        </li>
        <li>
          <a href="/deals" class="flex items-center p-3 rounded-lg" onclick={closeMobileMenu}>
            <span class="material-icons">handshake</span>
            <span class="ml-3">Deals</span>
          </a>
        </li>
        <li>
          <a href="/tasks" class="flex items-center p-3 rounded-lg" onclick={closeMobileMenu}>
            <span class="material-icons">task</span>
            <span class="ml-3">Tasks</span>
          </a>
        </li>
        <li>
          <a href="/reports" class="flex items-center p-3 rounded-lg" onclick={closeMobileMenu}>
            <span class="material-icons">bar_chart</span>
            <span class="ml-3">Reports</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
{/if}