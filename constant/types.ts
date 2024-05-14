export interface Category {
    id?: string;
}
export interface Product {
    id?: string | number;
    name: string;
    code: string;
    color: string;
    price: string;
    category?: Category
}
