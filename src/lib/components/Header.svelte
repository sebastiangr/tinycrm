<script lang="ts">
  import { sidebarOpen } from '$lib/stores/sidebarStore';
	import { Search, Settings, UserRound } from 'lucide-svelte';
</script>

<header class="bg-base-200 transition-[padding] duration-200 ease-in fixed top-0 right-0 left-0 {$sidebarOpen ? 'pl-4 lg:pl-56' : 'pl-4 lg:pl-24'} bg-base-100 z-10 pt-4 pb-4">
  <div class="flex flex-row justify-between p-0 h-auto">
    
    <div class="pl-4">
      <!-- Mobile menu button -->
      <!-- <button id="mobile-menu-button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button> -->
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