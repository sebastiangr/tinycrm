<script lang="ts">
  // import { Calendar, ChevronLeft, FolderOpen, ListTodo, Moon, Sun, UserRoundSearch, UsersRound } from "lucide-svelte";
  import { Calendar, ChevronLeft, FolderOpen, ListTodo, Moon, Sun, UserRoundSearch, UsersRound  as IconType, Home, Library, Cog, UsersRound, ChevronRight, PanelRightClose, PanelRightOpen } from "lucide-svelte";
  import { sidebarOpen, sidebarMenuPosition, sidebarType } from '$lib/stores/sidebarStore';
	import { afterNavigate } from "$app/navigation";
	import { menuItems } from "$lib/stores/menuStore";

  let isDarkMode = $state(false);
  // let isSidebarOpen = $state(true); // Local state
  let path = "";
  let currentRoute = $state(); 
  let floatingSidebar = true; // Set to true for floating sidebar

  // Toggle theme and save preference to localStorage
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }
  
  // function toggleSidebar() {
  //   isSidebarOpen = !isSidebarOpen;
  //   // dispatch('stateChange', isSidebarOpen); // Emit state change event
  // }

  function toggleSidebar() {
    sidebarOpen.update(current => !current);
  }

  afterNavigate((navigation) => {
    currentRoute = navigation.to?.url.pathname as string;
  });

  // Use $effect for side effects in Svelte 5
  $effect(() => {
    // const savedTheme = localStorage.getItem("theme");
    // isDarkMode = savedTheme === "dark";
    // document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    // console.log("Current route", currentRoute);
  });

</script>
<!-- Sidebar -->
<div class="h-full">
<aside
  id=""
  class=" fixed hidden md:flex flex-col    
  bg-base-200 z-30 transition-[width] duration-200 w-ease-in 
  {$sidebarType ? 'top-0 left-0 h-full' : 'mt-4 mb-4 ml-4 h-[calc(100vh-2rem)] rounded-lg'}
  {$sidebarMenuPosition}
  {$sidebarOpen ? 'w-[14rem]' : 'w-[54px]'}">
<!-- style="width: {isSidebarOpen ? '16rem' : '54px'}" -->
  <!-- Sidebar Header with Logo and Toggle -->
  <div class="p-2 pt-4 pb-4 flex items-center justify-between">
    <div class="flex items-center">
      <div class="w-[38px] h-[38px] bg-primary rounded-md flex items-center justify-center text-primary-content font-bold text-xl">T</div>
      <span class="ml-2 text-lg font-semibold menu-label" class:hidden={!$sidebarOpen}>TinyCRM</span>
    </div>
    <button id="sidebar-toggle" class="btn btn-circle md:flex hidden {$sidebarOpen ? 'ml-0' : 'ml-6'}" onclick={toggleSidebar}>

      {#if $sidebarOpen}
        <ChevronLeft size="24" />
      {:else}
        <ChevronRight size="24" />       
      {/if}
    </button>
  </div>
  
  <!-- Sidebar Menu -->
  <ul class="menu p-2 w-full">

    {#each $menuItems as item}
      {@const Icon = item.icon}
      <li class="mb-2 {item.enabled ? 'flex' : 'hidden'}">
        <a href={item.href} class="{$sidebarOpen ? '' : 'tooltip'} tooltip-right group flex items-center p-2 transition duration-200 ease-in-out {(currentRoute === item.href) ? 'active' : ''}" data-tip={item.name}>          
          <!-- <Icon size="22" class="mr-2 group-hover:scale-110"/> -->
          <Icon size="22"/>
          <span class:hidden={!$sidebarOpen}>{item.name}</span>
        </a>
      </li>
    {/each}

  </ul>
    
  <!-- Theme Toggle at Bottom -->
  <div class="p-4 border-t border-base-300">
    <div class="flex">
      
      <label class="swap swap-rotate">
        <input type="checkbox" class="theme-controller hidden" value="emerald" />      
        <Sun class="swap-off" size="22"/> 
        <Moon class="swap-on" size="22"/>
      </label>

    </div>
  </div>


</aside>
</div>

<style>
  /* TODO: Change color */

</style>