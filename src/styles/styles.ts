import { type ClassNameValue, twMerge } from 'tailwind-merge';


export function card({ className }: { className?: ClassNameValue } = {}) {
	return twMerge('relative flex', className);
}
