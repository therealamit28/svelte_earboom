<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let teamMembers = [
    { name: 'John Doe', role: 'CEO', image: '/images/john1.jpg' },
    { name: 'Jane Smith', role: 'CTO', image: '/images/john.jpg' },
    { name: 'Mike Johnson', role: 'Head of Design', image: '/images/mike.jpg' },
    { name: 'Sarah Lee', role: 'Marketing Director', image: '/images/sarah.jpg' },
  ];

  let visibleMembers = [];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleMembers = [...visibleMembers, entry.target.dataset.name];
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.team-member').forEach(member => {
      observer.observe(member);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>EARBOOM - Our Team</title>
  <meta name="description" content="Meet the passionate team behind EARBOOM's innovative audio technology.">
</svelte:head>

<div class="bg-gray-900 min-h-screen text-white py-16">
  <div class="container mx-auto px-4">
    <h1 in:fly="{{ y: -50, duration: 1000 }}" class="text-4xl md:text-5xl font-bold mb-12 text-center">
      Meet Our <span class="text-earboom-primary">Team</span>
    </h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each teamMembers as member, index}
        <div class="team-member" data-name={member.name}>
          {#if visibleMembers.includes(member.name)}
            <div 
              in:fade="{{ duration: 300, delay: index * 100 }}" 
              class="bg-gray-800 rounded-lg shadow-md overflow-hidden text-center transform hover:scale-105 transition-all duration-300"
            >
              <img src={member.image} alt={member.name} class="w-full h-48 object-cover" loading="lazy" />
              <div class="p-4">
                <h2 class="text-xl font-semibold mb-2 text-earboom-primary">{member.name}</h2>
                <p class="text-gray-400">{member.role}</p>
              </div>
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