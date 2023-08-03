import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class Product {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  getInfo() {
    return {
      title: this.title,
      price: `${this.price}`,
    };
  }
}
