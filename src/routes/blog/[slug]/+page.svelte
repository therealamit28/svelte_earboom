<script>
  import { fly, fade } from 'svelte/transition';
  import { page } from '$app/stores';

  export let data;
  const { title, date, author, content } = data;
</script>

<svelte:head>
  <title>EARBOOM Blog - {title}</title>
  <meta name="description" content={title}>
  <link rel="canonical" href="https://yourdomain.com{$page.url.pathname}">
</svelte:head>

<div class="bg-gray-900 min-h-screen text-white py-16">
  <div class="container mx-auto px-4 max-w-3xl">
      <article>
          <header class="mb-8">
              <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-4xl md:text-5xl font-bold mb-4 text-center">
                  <span class="text-earboom-primary">{title}</span>
              </h1>
              <div in:fade="{{ duration: 500, delay: 300 }}" class="text-center text-gray-400">
                  <p>By {author} | Published on {date}</p>
              </div>
          </header>

          <div 
              in:fade="{{ duration: 500, delay: 600 }}" 
              class="prose prose-lg prose-invert mx-auto"
          >
              {@html content}
          </div>

          <div class="mt-12 text-center">
              <a
                  href="/blog"
                  class="bg-earboom-primary text-white py-2 px-4 rounded-full hover:bg-earboom-secondary transition duration-300 inline-block"
              >
                  Back to Blog
              </a>
          </div>
      </article>
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
  :global(.prose) {
      --tw-prose-invert-body: #D1D5DB;
      --tw-prose-invert-headings: #F3F4F6;
      --tw-prose-invert-links: #FF4500;
      --tw-prose-invert-bold: #F3F4F6;
      max-width: none;
  }
  :global(.prose a:hover) {
      color: #d60c5a;
  }
</style>