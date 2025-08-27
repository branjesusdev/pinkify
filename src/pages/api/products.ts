import type { Product } from '@/types/product';
import type { APIRoute } from 'astro';
import productsData from '@/assets/bd/torefront-client.json';

export const GET: APIRoute = ({ request }) => {
  try {
    const products: Product[] = productsData.products || [];
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return new Response(JSON.stringify({ message: 'Error interno del servidor' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};