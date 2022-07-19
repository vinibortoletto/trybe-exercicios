const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const { name, phoneNumber } = order;
  const { deliveryPerson } = order.order.delivery;
  const { street, number, apartment } = order.address;

  return `Olá ${name}, entrega para: ${deliveryPerson}, Telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`;
};

// customerInfo(order)

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const { name } = order;

  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  order.payment.total = 50;
  const { total } = order.payment;

  return `Olá ${name}, o total do seu pedido de ${pizzas[0]} e ${drink} é R$ ${total},00.`;
};

orderModifier(order);
