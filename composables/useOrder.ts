type OrderItem = { 
  [key: string]: {
    count:number,
    price:number,
    name:string
  } 
};

export const useOrder = () => {
  const order = useState<OrderItem[]>('order', () => []);

  const increaseOrder = (meal: string, price:number, name:string) => {
    const item = order.value.find((item) => meal in item);
    if (item) {
      item[meal].count += 1;
    } else {
      order.value.push({ 
        [meal]: {
          count:1,
          price,
          name
      } 
    });
    }
    console.log(order.value);
    
  };

  const decreaseOrder = (meal: string) => {
    const item = order.value.find((item) => meal in item);
    if (item) {
      item[meal].count -= 1;
      if (item[meal].count === 0) {
        order.value.splice(order.value.indexOf(item), 1); // Fix incorrect removal
      }
    }
  };

  return { 
    increaseOrder, 
    decreaseOrder 
  };
};
