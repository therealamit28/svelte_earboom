<script>
  import { fade, fly, scale } from 'svelte/transition';

  let posts = [
    { slug: "future-of-wireless-audio", title: "The Future of Wireless Audio", date: "2024-03-15" },
    { slug: "choosing-right-earbuds", title: "Why EARBOOM?", date: "2024-03-10" },
    { slug: "science-of-sound", title: "The Science of Sound: Audio Engineering Explained", date: "2024-03-05" }
  ];
</script>

<svelte:head>
  <title>EARBOOM - Our Blog</title>
</svelte:head>

<div class="bg-gray-900 min-h-screen text-white py-16">
  <div class="container mx-auto px-4">
    <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-5xl font-bold mb-12 text-center">
      Our <span class="text-earboom-primary">Blog</span>
    </h1>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each posts as post, index}
        <li 
          in:scale="{{ delay: index * 100, duration: 500 }}"
          class="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 p-6"
        >
          <h2 class="text-2xl font-semibold mb-2 text-earboom-primary">{post.title}</h2>
          <p class="text-gray-400 mb-4">Published on {post.date}</p>
          <a 
            href="/blog/{post.slug}" 
            class="text-earboom-primary hover:text-earboom-secondary transition-colors duration-300 inline-flex items-center"
          >
            Read More →
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .text-earboom-primary {
    color: #FF4500;
  }
  .hover\:text-earboom-secondary:hover {
    color: #d60c5a;
  }
</style>