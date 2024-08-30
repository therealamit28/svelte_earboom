<script>
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';

  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
   
    console.log('Form submitted:', { name, email, message });
    submitted = true;
    setTimeout(() => {
     
      name = '';
      email = '';
      message = '';
      submitted = false;
    }, 3000);
  }

  let formSpring = spring({ y: 50, opacity: 0 });

  function focusInput(node) {
    const unsubscribe = formSpring.subscribe(({ y, opacity }) => {
      node.style.transform = `translateY(${y}px)`;
      node.style.opacity = opacity;
    });

    setTimeout(() => {
      formSpring.set({ y: 0, opacity: 1 });
    }, 100);

    return {
      destroy() {
        unsubscribe();
      }
    };
  }
</script>

<svelte:head>
  <title>EARBOOM - Contact Us</title>
</svelte:head>

<div class="bg-gray-900 min-h-screen text-white py-16">
  <div class="container mx-auto px-4">
    <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-5xl font-bold mb-12 text-center">
      Contact <span class="text-earboom-primary">Us</span>
    </h1>
    
    <div class="max-w-lg mx-auto">
      {#if !submitted}
        <form on:submit|preventDefault={handleSubmit} class="space-y-6" use:focusInput>
          <div>
            <label for="name" class="block mb-2 text-lg">Name</label>
            <input type="text" id="name" bind:value={name} required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-earboom-primary text-white" />
          </div>
          <div>
            <label for="email" class="block mb-2 text-lg">Email</label>
            <input type="email" id="email" bind:value={email} required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-earboom-primary text-white" />
          </div>
          <div>
            <label for="message" class="block mb-2 text-lg">Message</label>
            <textarea id="message" bind:value={message} required rows="5" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-earboom-primary text-white"></textarea>
          </div>
          <button type="submit" class="w-full bg-earboom-primary text-white py-3 px-6 rounded-md hover:bg-earboom-secondary transition duration-300 transform hover:scale-105">
            Send Message
          </button>
        </form>
      {:else}
        <div in:scale class="bg-green-500 text-white p-4 rounded-md text-center">
          <p class="text-xl font-semibold">Thank you for your message!</p>
          <p>We'll get back to you soon.</p>
        </div>
      {/if}
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
  
  .focus\:ring-earboom-primary:focus {
    --tw-ring-color: #FF4500;
  }
</style>