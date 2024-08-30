<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: '#', icon: 'fab fa-instagram' },
  ];

  const quickLinks = [
    { name: 'Products', url: '/products' },
    { name: 'Blog', url: '/blog' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contact', url: '/contact' },
  ];
</script>

<footer class="bg-gray-900 text-white py-12">
  {#if visible}
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/3 mb-8 md:mb-0" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
          <h3 class="text-2xl font-bold mb-4 text-earboom-primary">EARBOOM</h3>
          <p class="text-gray-400">Revolutionizing audio experiences with cutting-edge earbuds.</p>
        </div>
        <div class="w-full md:w-1/3 mb-8 md:mb-0" in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
          <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            {#each quickLinks as link}
              <li>
                <a
                  href={link.url}
                  class="text-gray-400 hover:text-earboom-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        <div class="w-full md:w-1/3" in:fly="{{ y: 50, duration: 1000, delay: 600 }}">
          <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
          <div class="flex space-x-4">
            {#each socialLinks as link}
              <a
                href={link.url}
                class="text-gray-400 hover:text-earboom-primary transition-colors duration-300 text-2xl"
                aria-label={link.name}
              >
                <i class={link.icon}></i>
              </a>
            {/each}
          </div>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-gray-800 text-center" in:fade="{{ duration: 1000, delay: 800 }}">
        <p class="text-gray-500">&copy; {new Date().getFullYear()} EARBOOM. All rights reserved.</p>
      </div>
    </div>
  {/if}
</footer>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
  .text-earboom-primary {
    color: #FF4500;
  }
</style>