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
