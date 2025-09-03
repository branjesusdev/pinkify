export function ProductCardSkeleton({ repeat = 1 }: { repeat?: number }) {
  return (
    <>
      {Array.from({ length: repeat }).map((_, i) => (
        <div class="animate-pulse flex-[1_1_40%] sm:flex-[1_1_48%] lg:flex-[1_1_18%] min-w-[9rem] max-w-full lg:max-w-[24rem] bg-[var(--color-theme-accent)] border rounded-lg shadow-sm h-fit">
          <div class="h-48 lg:h-60 bg-gray-300 rounded-t-lg" />
          <div class="px-4 py-2 flex gap-2 flex-col">
            <div class="h-6 bg-gray-300 rounded" />
            <div class="h-8 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </>
  );
}
