<script lang="ts">
	import { menuItems } from '$lib/stores/menuStore';
  import { sidebarMenuPosition } from '$lib/stores/sidebarStore';
	import { writable } from 'svelte/store';
  // let menuPosition: 'top' | 'middle' = 'top';

  // let menuPosition: 'top' | 'middle' = 'top';
  // let language: 'en' | 'es' = 'en';

  // function handleMenuPositionChange(position: 'top' | 'middle') {

  // function saveSettings() {
  //   localStorage.setItem('menuPosition', menuPosition);
  //   console.log('Menu position saved:', menuPosition);
  //   localStorage.setItem('language', language);
  //   console.log('Language saved:', language);
  // }

  // Create a writable copy of menuItems to track changes
  // const editableMenuItems = writable([...menuItems]);

  function toggleSidebarMenuPosition() {
    sidebarMenuPosition.update(current => current === 'justify-start' ? 'justify-between' : 'justify-start');
    console.log('Sidebar menu position toggled:', sidebarMenuPosition);
  }

  function toggleMenuItem(index: number) {
    menuItems.update(items => {
      const updatedItems = [...items];
      updatedItems[index] = {
        ...updatedItems[index],
        enabled: !updatedItems[index].enabled
      };
      return updatedItems;
    });
  }  

  function saveSettings() {
    // Here you would typically save the settings to localStorage or a backend
    // For now, we'll just log the changes
    console.log('Menu items to save:', menuItems);
    console.log('Sidebar position to save:', $sidebarMenuPosition);
    
    // In a real implementation, you would update the actual stores
    // menuItems.set($editableMenuItems);
  }

</script>


<div class="mx-auto">
  <h1 class="text-3xl font-bold mb-8">Settings</h1>
  
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <!-- Menu Position Section -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Posición del menú</h2>
        <div class="form-control flex flex-row gap-4">
          <input 
            id="radio-top" 
            type="radio" 
            name="menu-position" 
            class="radio radio-primary" 
            checked={$sidebarMenuPosition === 'justify-start'} 
            onchange={() => sidebarMenuPosition.set('justify-start')} 
          />
          <label class="label" for="radio-top">At the top</label>
          <input 
            id="radio-center" 
            type="radio" 
            name="menu-position" 
            class="radio radio-primary" 
            checked={$sidebarMenuPosition === 'justify-between'} 
            onchange={() => sidebarMenuPosition.set('justify-between')} 
          />
          <label class="label" for="radio-center">At the center</label>          
        </div>
      </section>
      
      <!-- Menu Items Section -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Menús habilitados</h2>
        <div class="form-control flex flex-col gap-4">
          {#each $menuItems as item, index}
            {@const Icon = item.icon}
            <label class="label cursor-pointer justify-start gap-4">
              <input 
                type="checkbox" 
                class="checkbox checkbox-primary"
                checked={item.enabled}
                onchange={() => toggleMenuItem(index)}
              >
              <Icon size="22" class="" />
              <span class="label-text">{item.name}</span>
            </label>
          {/each}
        </div>
      </section>

      <!-- Language Section -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Lenguaje (demo)</h2>
        <div class="form-control">
          <label class="label cursor-pointer justify-start gap-4">
            <input type="checkbox" class="checkbox checkbox-primary">
            <!-- <input 
              type="checkbox" 
              class="checkbox checkbox-primary" 
              checked={language === 'en'} 
              on:change={() => handleLanguageChange('en')}
            /> -->
            <span class="label-text">English</span>
          </label>
          
          <label class="label cursor-pointer justify-start gap-4">
            <input type="checkbox" class="checkbox checkbox-primary">
            <!-- <input 
              type="checkbox" 
              class="checkbox checkbox-primary" 
              checked={language === 'es'} 
              on:change={() => handleLanguageChange('es')}
            /> -->
            <span class="label-text">Spanish</span>
          </label>
        </div>
      </section>

      <section class="mb-8">
        
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn btn-secondary" onclick={() => (document.getElementById('my_modal_5') as HTMLDialogElement)?.showModal()}>Open modal</button>
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box shadow-none">
            <h3 class="text-lg font-bold">¡Hola!</h3>
            <p class="py-4">Presiona ESC o haz clic en el botón de abajo para cerrar.</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn btn-primary">Cerrar</button>
              </form>
            </div>
          </div>
        </dialog>

      </section>

    </div>
  </div>
  
  <!-- Save Button -->
  <div class="mt-6 flex justify-end">
    <!-- <button class="btn btn-primary" on:click={saveSettings}> -->
    <button class="btn btn-primary" >
      Save Settings
    </button>
  </div>
</div>
