/*
Automatically generated code. DO NOT edit this file!

To use, ensure the following:

1. That this code is copied into the application that is going to communicate with the server.
2. That server-bridge-superagent-client is added as a dependency in the client application. Install it by running:

   npm install --save server-bridge-superagent-client
*/
/* tslint:disable */
// ReSharper disable All
import {ClientBase} from "server-bridge-superagent-client";

export interface IServerFoodItems {
    list(): Promise<FoodItem[]>;
    remove(opts: { foodItemID: string; }): Promise<number>;
    set(foodItem: FoodItem): Promise<FoodItem>;
}

export interface IServerOrders {
    list(): Promise<Order[]>;
    remove(opts: { orderID: string; }): Promise<number>;
    set(order: Order): Promise<Order>;
}

export interface FoodItem {
    foodItemID?: string;
    name: string;
    price?: number;
    status?: FoodItemStatus;
}

export interface Order {
    orderID?: string;
    name: string;
    address1: string;
    address2: string;
    city: string;
    status?: OrderStatus;
    priority?: OrderPriority;
    receivedDate: Date;
    foodItems: FoodItem[];
}

export enum FoodItemStatus {
    Active = 0,
    Inactive = 1
}

export enum OrderStatus {
    Pending = 0,
    Received = 1,
    Enroute = 2,
    Delivered = 3,
    Canceled = 5
}

export enum OrderPriority {
    Low = 0,
    Medium = 1,
    High = 2
}

export class ServerFoodItems extends ClientBase implements IServerFoodItems {
    constructor(options?: { urlPrefix: string; }) {
        super((options == null ? "" : (options.urlPrefix || "")) + "/food-items");
    }

    list() {
        return super.get<FoodItem[]>("/list");
    }

    remove(opts: { foodItemID: string; }) {
        return super.post<number>("/remove", opts);
    }

    set(foodItem: FoodItem) {
        return super.post<FoodItem>("/", foodItem);
    }
}

export class ServerOrders extends ClientBase implements IServerOrders {
    constructor(options?: { urlPrefix: string; }) {
        super((options == null ? "" : (options.urlPrefix || "")) + "/orders");
    }

    list() {
        return super.get<Order[]>("/list");
    }

    remove(opts: { orderID: string; }) {
        return super.post<number>("/remove", opts);
    }

    set(order: Order) {
        return super.post<Order>("/", order);
    }
}