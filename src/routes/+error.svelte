<script>
    import { page } from '$app/stores';
  </script>
  
  <svelte:head>
    <title>EARBOOM - {$page.status} Error</title>
  </svelte:head>
  
  <div class="container mx-auto px-4 py-16 text-center">
    <h1 class="text-6xl font-bold mb-4">{$page.status}</h1>
    <p class="text-2xl mb-8">{$page.error?.message || 'Page not found'}</p>
    <a href="/" class="bg-earboom-primary text-white py-2 px-4 rounded hover:bg-earboom-secondary transition duration-300">
      Go back to homepage
    </a>
  </div>