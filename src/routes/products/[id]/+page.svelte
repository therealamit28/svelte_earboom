<script>
    import { fly, fade } from 'svelte/transition';
    import { page } from '$app/stores';
  
    export let data;
    const { product } = data;
  </script>
  
  <svelte:head>
    <title>EARBOOM - {product.name}</title>
    <meta name="description" content="Learn more about {product.name} - {product.description}">
    <link rel="canonical" href="https://yourdomain.com{$page.url.pathname}">
  </svelte:head>
  
  <div class="bg-gray-900 min-h-screen text-white py-16">
    <div class="container mx-auto px-4">
      <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-5xl font-bold mb-12 text-center">
        <span class="text-earboom-primary">{product.name}</span>
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div in:fade="{{ duration: 500 }}">
          <img src={product.image} alt={product.name} class="w-full h-auto rounded-lg shadow-lg" />
        </div>
        
        <div in:fade="{{ duration: 500, delay: 300 }}" class="space-y-6">
          <p class="text-2xl font-semibold text-earboom-primary">${product.price.toFixed(2)}</p>
          <p class="text-gray-300">{product.description}</p>
          
          <h2 class="text-2xl font-semibold mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside space-y-2">
            {#each product.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
          
          <a
            href="/products"
            class="bg-earboom-primary text-white py-2 px-4 rounded-full hover:bg-earboom-secondary transition duration-300 inline-block mt-8"
          >
            Back to Products
          </a>
        </div>
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