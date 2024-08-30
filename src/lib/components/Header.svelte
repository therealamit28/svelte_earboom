<script>
  import { page } from '$app/stores';
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';

  let isMenuOpen = false;
  
  const logoSpring = spring({ x: -100, y: 0 }, {
    stiffness: 0.1,
    damping: 0.4
  });

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/team', label: 'Team' },
    
    
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  $: {
    if ($page.url.pathname) {
      logoSpring.set({ x: 0, y: 0 });
    }
  }
</script>

<header class="bg-gray-900 text-white shadow-lg">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-3xl font-bold text-earboom-primary" style="transform: translate({$logoSpring.x}px, {$logoSpring.y}px)">
        EARBOOM
      </a>
      <div class="hidden md:flex space-x-6">
        {#each menuItems as item}
          <a
            href={item.href}
            class="relative hover:text-earboom-primary transition-colors duration-300"
            class:active={$page.url.pathname === item.href}
          >
            {item.label}
            {#if $page.url.pathname === item.href}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-earboom-primary"
                in:scale={{ duration: 300, start: 0.5 }}
              ></span>
            {/if}
          </a>
        {/each}
      </div>
      <button class="md:hidden text-2xl" on:click={toggleMenu}>
        ☰
      </button>
    </div>
  </nav>
  {#if isMenuOpen}
    <div
      class="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg z-50"
      in:fly={{ y: -50, duration: 300 }}
      out:fade={{ duration: 200 }}
    >
      {#each menuItems as item}
        <a
          href={item.href}
          class="block py-2 px-4 hover:bg-gray-700 transition-colors duration-300"
          class:active={$page.url.pathname === item.href}
          on:click={() => isMenuOpen = false}
        >
          {item.label}
        </a>
      {/each}
    </div>
  {/if}
</header>

<style lang="postcss">
  .active {
    @apply font-bold text-earboom-primary;
  }
</style>