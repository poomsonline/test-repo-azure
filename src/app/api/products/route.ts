import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
  ];
  return NextResponse.json(products);
}
