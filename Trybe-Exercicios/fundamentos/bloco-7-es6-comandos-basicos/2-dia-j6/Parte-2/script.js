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
		}
	  },
	  drinks: {
		coke: {
		  type: 'Coca-Cola Zero',
		  price: 10,
		  amount: 1,
		}
	  },
	  delivery: 'Ana Silveira',
	},
	payment: {
	  total: 60,
	  pagamento: 'R$ 50,00' ,
		},
  };
  
  const customerInfo = (order) => {
	// Adicione abaixo as informações necessárias
let endereço = Object.entries(order.address);
  console.log(`Ola Ana Silveira,entrega para:${order.name},Telefone:${order.phoneNumber}
  ,${endereço}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
	// Adicione abaixo as informações necessárias.
		const newBuyer = order.name = 'Luiz Silva';
		const pizzas = Object.keys(order.order.pizza);
		const drinks = order.order.drinks.coke.type;
		const newTotal = order.payment.total = '50';
	  
		console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
	  }
  orderModifier(order);