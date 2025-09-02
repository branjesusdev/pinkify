import type { Product } from '@/types/product';
import type { APIRoute } from 'astro';
import productsData from '@/assets/bd/torefront-client.json';

export const GET: APIRoute = async ({ request }) => {
    try {
        const products: Product[] = productsData.products || [];
        const url = new URL(request.url);
        const productId = url.searchParams.get('id');

        if (productId && !isNaN(Number(productId))) {
            const product = products.find((p) => p.id === Number(productId));
            if (product) {
                return new Response(JSON.stringify(product), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        }
        return new Response(JSON.stringify({ message: 'Producto no encontrado' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Error al obtener el producto:', error);
        return new Response(JSON.stringify({ message: 'Error interno del servidor' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};