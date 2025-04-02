<!-- src/routes/auth/register/+page.svelte -->
<script>
  import { enhance } from "$app/forms";
  
  export let form;
</script>

<div class="flex justify-center items-center">
  <div class="card w-96 bg-base-200">
    <div class="card-body">
      <h2 class="card-title">Registrarse</h2>
      
      {#if form?.message}
        <div class="alert alert-error">{form.message}</div>
      {/if}
      
      <form method="POST" use:enhance>
        <div class="form-control">
          <label class="label" for="username">
            <span class="label-text">Nombre de usuario</span>
          </label>
          <input id="username" name="username" type="text" class="input input-bordered" required />
        </div>
        
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Email</span>
          </label>
          <input id="email" name="email" type="email" class="input input-bordered" required />
        </div>
        
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Contraseña</span>
          </label>
          <input id="password" name="password" type="password" class="input input-bordered" required />
        </div>
        
        <div class="form-control mt-6 ">
          <button class="btn btn-primary w-full">Registrarse</button>
        </div>
      </form>
      
      <div class="text-center mt-4">
        <a href="/auth/login" class="link link-hover">¿Ya tienes una cuenta? Inicia sesión</a>
      </div>
    </div>
  </div>
</div>