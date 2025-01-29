import { Product } from "@/types/Product";
import { NextResponse } from "next/server";

export const GET = async () => {

  const products: Product[] = [
    { id: 1, title: "Laptop", description: "High-performance laptop with 16GB RAM", price: 1200 },
    { id: 2, title: "Smartphone", description: "Latest model with 128GB storage", price: 800 },
    { id: 3, title: "Headphones", description: "Noise-canceling over-ear headphones", price: 200 },
    { id: 4, title: "Smartwatch", description: "Fitness tracking and notifications", price: 250 },
    { id: 5, title: "Camera", description: "DSLR camera with 24MP sensor", price: 900 },
    { id: 6, title: "Tablet", description: "10-inch display with stylus support", price: 600 },
    { id: 7, title: "Gaming Console", description: "Next-gen console with 4K support", price: 500 },
    { id: 8, title: "Monitor", description: "27-inch 144Hz gaming monitor", price: 300 },
    { id: 9, title: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard", price: 150 },
    { id: 10, title: "Wireless Mouse", description: "Ergonomic design with long battery life", price: 100 },
  ];

  return NextResponse.json({
    items: products
  });
};