export enum FoodItemStatus {
    Active = 0,
    Inactive = 1,
}

export interface FoodItem {
    foodItemID?: string;
    name: string;
    price?: number;
    status?: FoodItemStatus;
}

const primaryKeyPropertyName: keyof FoodItem = 'foodItemID';

// export type ReadonlyFoodItem = {
//     readonly [key in keyof FoodItem]: FoodItem[key];
// };

// export type Readonly<T> = {
//     [key in keyof T]: T[key];
// };

// export type Partial<T> = {
//     [key in keyof T]?: T[key];
// };

// export type Deferred<T> = {
//     [key in keyof T]: Promise<T[key]>;
// };

const myReadOnlyFoodItem: Readonly<FoodItem> = {
    foodItemID: 'anyValue',
    name: 'beto',
    price: 2,
    status: FoodItemStatus.Active,
};

console.log(primaryKeyPropertyName);

console.log(myReadOnlyFoodItem);
