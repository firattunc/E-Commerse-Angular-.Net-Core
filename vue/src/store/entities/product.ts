import Entity from './entity'
export default class Product extends Entity<number>{    
    name:string;
    description:string;
    price:number;
    imgUrl:string;
    categoryId:number;
}