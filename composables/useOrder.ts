type OrderItem = { [key: string]: number };
export const useOrder = () => {
  const order = useState<OrderItem[]>('order', () => []);

  const increaseOrder = (meal: string) => {
    const item = order.value.find((item) => meal in item);
    if (item) {
      item[meal] += 1;
    } else {
      order.value.push({ [meal]: 1 });
    }
  };

  const decreaseOrder = (meal: string) => {
    const item = order.value.find((item) => meal in item);
    if (item) {
      item[meal] -= 1;
      if (item[meal] === 0) {
        order.value.splice(order.value.indexOf(item), 1); // Fix incorrect removal
      }
    }
  };

  return { 
    increaseOrder, 
    decreaseOrder 
  };
};
