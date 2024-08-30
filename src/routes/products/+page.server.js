export async function load({ fetch }) {
   
    const products = [
      { id: 1, name: 'EARBOOM Pro', price: 199.99, image: '/images/pro.jpg', description: 'Our flagship model with noise-cancelling technology.' },
      { id: 2, name: 'EARBOOM Lite', price: 99.99, image: '/images/lite.jpg', description: 'Affordable, high-quality earbuds for everyday use.' },
      { id: 3, name: 'EARBOOM Sport', price: 149.99, image: '/images/sport.jpg', description: 'Sweat-resistant earbuds designed for athletes.' },
    ];
  
    
    await new Promise(resolve => setTimeout(resolve, 100));
  
    return { products };
  }