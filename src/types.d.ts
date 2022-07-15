export interface Items {
    author: Author
    categories: string[],
    items: Item[]
}

interface Author {
    name: string
    lastname: string
}

interface Item {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string
    free_shipping: boolean    
}

export interface Price {
    currency: string,
    amount: number | string,
    decimals: number | string
}

export interface Category {
    id: string,
    name: string
}

interface ItemDetails {
    author: Author,
    categories: string[],
    item: ItemDescription
}

interface ItemDescription extends Item {
    sold_quantity: number,
    description: string
}