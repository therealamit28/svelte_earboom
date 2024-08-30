<script>
  import { scale, fly, fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { spring } from 'svelte/motion';

  export let data;
  let { products } = data;

  let hovered = {};

  function handleMouseEnter(id) {
    hovered[id] = true;
  }

  function handleMouseLeave(id) {
    hovered[id] = false;
  }
</script>

<svelte:head>
  <title>EARBOOM - Our Products</title>
  <meta name="description" content="Discover our range of high-quality EARBOOM earbuds, including the Pro, Lite, and Sport models.">
  <link rel="canonical" href="https://yourdomain.com{$page.url.pathname}">
</svelte:head>

<div class="bg-gray-900 min-h-screen text-white py-16">
  <div class="container mx-auto px-4">
    <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-5xl font-bold mb-12 text-center">
      Our <span class="text-earboom-primary">Products</span>
    </h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each products as product, index (product.id)}
        <div
          role="article"
          in:scale="{{ delay: index * 100, duration: 500, start: 0.8 }}"
          class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          on:mouseenter={() => handleMouseEnter(product.id)}
          on:mouseleave={() => handleMouseLeave(product.id)}
        >
          <img src={product.image} alt={product.name} class="w-full h-48 object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2 text-earboom-primary">{product.name}</h2>
            <p class="text-gray-400 mb-2">${product.price.toFixed(2)}</p>
            <p class="text-gray-300 mb-4">{product.description}</p>
            
            <a
              href={`/products/${product.id}`}
              class="bg-earboom-primary text-white py-2 px-4 rounded-full hover:bg-earboom-secondary transition duration-300 inline-block"
              aria-label={`Learn more about ${product.name}`}
            >
              Learn More
              {#if hovered[product.id]}
                <span in:fade={{ duration: 200 }}>→</span>
              {/if}
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .text-earboom-primary {
    color: #FF4500;
  }
  .bg-earboom-primary {
    background-color: #FF4500;
  }
  .hover\:bg-earboom-secondary:hover {
    background-color: #d60c5a;
  }
</style>