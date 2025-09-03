import { getAmountFormatted } from '@/lib/utils';
import type { Product } from '@/types/product';
import { twMerge } from 'tailwind-merge';

type Props = {
	price: Product['price'];
	discount: Product['discount'];
	class?: string;
};

export function ProductPrice(props: Props) {
	return (
		<span class={twMerge('flex gap-2 font-medium', props.class)}>
			{getAmountFormatted(props.price - props.discount)}
			{props.discount > 0 && (
				<span class="text-slate-400 line-through text-sm">{getAmountFormatted(props.price)}</span>
			)}
		</span>
	);
}
