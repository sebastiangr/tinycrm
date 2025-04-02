<!-- src/routes/auth/login/+page.svelte -->
<script>
  import { enhance } from "$app/forms";
  
  export let form;
</script>

<div class="flex justify-center items-center">
  <div class="card w-96 bg-base-200">
    <div class="card-body">
      <h2 class="card-title">Iniciar sesión</h2>
      
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
          <label class="label" for="password">
            <span class="label-text">Contraseña</span>
          </label>
          <input id="password" name="password" type="password" class="input input-bordered" required />
        </div>
        
        <div class="form-control mt-6">
          <button class="btn btn-primary w-full">Iniciar sesión</button>
        </div>
      </form>
      
      <div class="text-center mt-4">
        <a href="/auth/register" class="link link-hover">¿No tienes una cuenta? Regístrate</a>
      </div>
    </div>
  </div>
</div>