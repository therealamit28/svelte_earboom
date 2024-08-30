<script>
    import { slide, fade, fly } from 'svelte/transition';
    
    let faqs = [
      { question: 'How long does the battery last?', answer: 'Our EARBOOM earbuds typically last up to 8 hours on a single charge, with an additional 24 hours provided by the charging case.' },
      { question: 'Are EARBOOM earbuds water-resistant?', answer: 'Yes, all EARBOOM models are IPX5 water-resistant, making them suitable for workouts and light rain.' },
      { question: 'Do you offer a warranty?', answer: 'We offer a 2-year limited warranty on all EARBOOM products against manufacturing defects.' },
      { question: 'How do I pair my EARBOOM earbuds with my device?', answer: 'Simply open the charging case, and your earbuds will automatically enter pairing mode. Then, select "EARBOOM" from your device\'s Bluetooth settings.' },
    ];
  
    let activeIndex = null;
  
    function toggleFaq(index) {
      activeIndex = activeIndex === index ? null : index;
    }
  </script>
  
  <svelte:head>
    <title>EARBOOM - FAQ</title>
  </svelte:head>
  
  <div class="bg-gray-900 min-h-screen text-white py-16">
    <div class="container mx-auto px-4">
      <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-5xl font-bold mb-12 text-center">
        Frequently Asked <span class="text-earboom-primary">Questions</span>
      </h1>
      
      <div class="space-y-4 max-w-3xl mx-auto">
        {#each faqs as faq, index}
          <div 
            in:fade={{ delay: index * 100, duration: 500 }}
            class="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <button
              on:click={() => toggleFaq(index)}
              class="w-full text-left p-4 flex justify-between items-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h2 class="text-xl font-semibold">{faq.question}</h2>
              <span class="text-2xl transform transition-transform duration-300" class:rotate-45={activeIndex === index}>+</span>
            </button>
            {#if activeIndex === index}
              <div transition:slide={{ duration: 300 }} class="p-4 bg-gray-700">
                <p class="text-gray-300">{faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .text-earboom-primary {
      color: #FF4500;
    }
  </style>