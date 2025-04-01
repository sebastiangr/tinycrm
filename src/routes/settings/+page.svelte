<script lang="ts">
  import { sidebarMenuPosition } from '$lib/stores/sidebarStore';
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

  function toggleSidebarMenuPosition() {
    sidebarMenuPosition.update(current => current === 'justify-start' ? 'justify-between' : 'justify-start');
    console.log('Sidebar menu position toggled:', sidebarMenuPosition);
  }

</script>


<div class="p-6  mx-auto">
  <h1 class="text-3xl font-bold mb-8">Settings</h1>
  
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <!-- Menu Position Section -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Menu Position</h2>
        <div class="form-control">
          <label class="label"> At the top</label>
          <input type="radio" name="radio-4" class="radio radio-primary" on:change={toggleSidebarMenuPosition} />
          <label class="label"> At the center</label>
          <input type="radio" name="radio-4" class="radio radio-primary" on:change={toggleSidebarMenuPosition} />
        </div>
        <div class="form-control">
          <label class="label cursor-pointer justify-start gap-4">
            <input type="checkbox" class="checkbox checkbox-primary">
            <!-- <input 
              type="checkbox" 
              class="checkbox checkbox-primary" 
              checked={menuPosition === 'top'} 
              on:change={() => handleMenuPositionChange('top')}
            /> -->
            <span class="label-text">At the top (justify-start)</span>
          </label>
          
          <label class="label cursor-pointer justify-start gap-4">
            <input type="checkbox" class="checkbox checkbox-primary">
            <!-- <input 
              type="checkbox" 
              class="checkbox checkbox-primary" 
              checked={menuPosition === 'middle'} 
              on:change={() => handleMenuPositionChange('middle')}
            /> -->
            <span class="label-text">In the middle (justify-between)</span>
          </label>
        </div>
      </section>
      
      <!-- Language Section -->
      <section>
        <h2 class="text-xl font-semibold mb-4">Language</h2>
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
