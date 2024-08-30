<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';

  let visible = false;
  let productsVisible = false;
  let blogVisible = false;

  onMount(() => {
    visible = true;
    setTimeout(() => productsVisible = true, 1000);
    setTimeout(() => blogVisible = true, 2000);
  });

  const featuredProducts = [
    { id: '1', name: 'EarBoom Pro', description: 'Our flagship model with noise-cancelling technology.' },
    { id: '2', name: 'EarBoom Lite', description: 'Affordable, high-quality earbuds for everyday use.' },
    { id: '3', name: 'EarBoom Sport', description: 'Sweat-resistant earbuds designed for athletes.' }
  ];

  const blogPosts = [
    { slug: 'future-of-wireless-audio', title: 'The Future of Wireless Audio' },
    { slug: 'choosing-right-earbuds', title: 'Why EARBOOM?' }
  ];
</script>

<svelte:head>
  <title>EARBOOM - Revolutionary Earbuds</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white font-montserrat">
  <main class="container mx-auto px-4">
    <section class="hero py-20 text-center">
      {#if visible}
        <h1 in:fly="{{ y: 50, duration: 1000 }}" class="text-6xl font-bold mb-4 leading-tight">
          Experience Sound <br><span class="text-earboom-primary">Like Never Before</span>
        </h1>
        <p in:fade="{{ delay: 500, duration: 1000 }}" class="text-xl mb-8">
          EARBOOM: Where Technology Meets Crystal Clear Audio
        </p>
        <a
          href="/products"
          in:scale="{{ delay: 1000, duration: 500 }}"
          class="bg-earboom-primary hover:bg-earboom-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block transform hover:scale-105"
        >
          Explore Our Products
        </a>
      {/if}
    </section>

    <section class="featured-products py-16">
      {#if productsVisible}
        <h2 in:fly="{{ y: 30, duration: 800 }}" class="text-4xl font-bold mb-12 text-center">
          Our <span class="text-earboom-primary">Featured Products</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {#each featuredProducts as product, i}
            <div
              in:scale="{{ delay: i * 200, duration: 500 }}"
              class="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 class="text-2xl font-bold mb-4">{product.name}</h3>
              <p class="mb-4">{product.description}</p>
              <a href="/products/{product.id}" class="text-earboom-primary hover:underline">
                Learn more →
              </a>
            </div>
          {/each}
        </div>
      {/if}
    </section>

    <section class="latest-blog py-16">
      {#if blogVisible}
        <h2 in:fly="{{ y: 30, duration: 800 }}" class="text-4xl font-bold mb-12 text-center">
          Latest from Our <span class="text-earboom-primary">Blog</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each blogPosts as post, i}
            <div
              in:fade="{{ delay: i * 300, duration: 800 }}"
              class="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 class="text-2xl font-bold mb-4">{post.title}</h3>
              <p class="mb-4">Discover the latest insights and news from the world of audio technology.</p>
              <a href="/blog/{post.slug}" class="text-earboom-primary hover:underline">
                Read more →
              </a>
            </div>
          {/each}
        </div>
      {/if}
    </section>
  </main>
</div>

<style>
  :global(body) {
    font-family: 'Montserrat', sans-serif;
  }

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