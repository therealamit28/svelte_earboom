<script>
  import '../app.css';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-grow">
    {#key $page.url.pathname}
      <div in:fade="{{ duration: 300, delay: 300 }}" out:fade="{{ duration: 300 }}">
        <slot />
      </div>
    {/key}
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    font-family: 'Montserrat', sans-serif;
    background-color: #111827; /* dark gray-900 */
    color: #ffffff;
  }
</style>