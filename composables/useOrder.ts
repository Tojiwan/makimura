type OrderItem = { 
  [key: string]: {
    count: number;
    price: number;
    name : string;
    img  : string;
  };
};

export const useOrder = () => {
  const order = useLocalStorage<OrderItem>('order', {});

  const increaseOrder = (meal: string, price: number, name: string, img:string) => {
    if (order.value[meal]) {
      order.value[meal].count += 1;
    } else {
      order.value = {
        ...order.value,
        [meal]: { count: 1, price, name, img }
      };
    }
  };

  const decreaseOrder = (meal: string) => {
    if (!order.value[meal]) return;

    const updatedOrder = { ...order.value };

    if (updatedOrder[meal].count > 1) {
      updatedOrder[meal].count -= 1;
    } else {
      const { [meal]: _, ...newArray } = updatedOrder;
      order.value                      = newArray;
      return
    }

    order.value = updatedOrder;
  };

    // ✅ Add computed property for total count
  const count = computed(() => {
    return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
  });

  return { increaseOrder, decreaseOrder, order, count };
};
