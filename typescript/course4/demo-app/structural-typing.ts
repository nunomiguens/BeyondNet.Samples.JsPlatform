export class FoodItem {
    name!: string;
    // type = 'fruit';
    // private brand!: 'minka';
}

export class Customer {
    name!: string;
}

export const logName = (foodItem: FoodItem): void => {
    console.log(foodItem.name);
};

//Structural Typing
const foodItem = new FoodItem();
foodItem.name = 'apple';

const customer = new Customer();
customer.name = 'beto';

logName(foodItem);

logName(customer);

// logName({ name: 'orange', type: 'fruit', price: 10, status: 'available' } as Customer);

// logName({ name: 'orange', type: 'fruit', price: 10 });
