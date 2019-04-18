export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal: number;
    customerSince: Date;
}

export interface IOrder {
    customerNo: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName : string;
    itemCost : number;
}
