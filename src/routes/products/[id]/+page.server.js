export async function load({ params }) {
    const products = [
      {
        id: "1",
        name: 'EARBOOM Pro',
        price: 199.99,
        image: '/images/pro.jpg',
        description: 'Our flagship model with noise-cancelling technology.',
        features: [
          'Active Noise Cancellation',
          '8-hour battery life',
          'Wireless charging case',
          'IPX5 water resistance',
          'Touch controls'
        ]
      },
      {
        id: "2",
        name: 'EARBOOM Lite',
        price: 99.99,
        image: '/images/lite.jpg',
        description: 'Affordable, high-quality earbuds for everyday use.',
        features: [
          '6-hour battery life',
          'Compact charging case',
          'IPX4 water resistance',
          'Single-touch controls'
        ]
      },
      {
        id: "3",
        name: 'EARBOOM Sport',
        price: 149.99,
        image: '/images/sport.jpg',
        description: 'Sweat-resistant earbuds designed for athletes.',
        features: [
          'Enhanced sweat and water resistance (IPX7)',
          '7-hour battery life',
          'Secure-fit ear hooks',
          'Ambient sound mode for outdoor safety'
        ]
      },
    ];
  
    const product = products.find(p => p.id === params.id);
  
    if (!product) {
      return {
        status: 404,
        error: new Error('Product not found')
      };
    }
  
    return { product };
  }