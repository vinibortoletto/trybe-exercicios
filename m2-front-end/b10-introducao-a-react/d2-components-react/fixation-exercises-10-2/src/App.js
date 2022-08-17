import React from 'react';
import Image from './Image';
import Order from './Order';

class App extends React.Component {
  render() {
    const orders = [
      {
        id: 102,
        user: 'cena@gmail.com',
        product: 'Razer Headphone',
        price: {
          value: 99.99,
          currency: 'dollars',
        },
      },
      {
        id: 77,
        user: 'cena@gmail.com',
        product: 'Monster 500mL',
        price: {
          value: 9.99,
          currency: 'dollars',
        },
      },
    ];

    return (
      <div className="App">
        <Image
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
          alt="Cute cat staring"
        />

        {orders.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    );
  }
}

export default App;
