import type { ComponentProps } from "solid-js";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  type = "button",
  variant = "primary",
  size = "md",
  children,
  ...props
}: Props) {

  return (
    <button
      {...props}
      type={type}
      class={[
        ` 
        backdrop-blur-xl border border-[rgba(255,255,255,0.2)] rounded w-[fit-content] font-bold cursor-pointer transition-all duration-200 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] before:transition-all before:duration-500 before:ease-in-out hover:before:left-full hover:border-[var(--color-theme-tickle-me-pink)] hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(255,107,157,0.3)] relative overflow-hidden
        `,
        variant === "primary"
          ? "py-2 px-4 bg-[var(--color-theme-secondary)] text-black/90 hover:bg-[var(--color-theme-secondary]/90"
          : "py-2 px-3 text-primary bg-[#212121] fill-neutral-50 border-1 border-white/30",
        size === "sm"
          ? "text-sm py-1 px-3 lg:px-4 lg:py-2"
          : size === "lg"
          ? "text-lg py-3 px-5 lg:px-7 lg:py-5 lg:text-xl"
          : "text-base py-2 px-4 lg:px-6 lg:py-4 lg:text-lg",
        props.class,
      ].join(" ")}
    >
      {children}
      {null}
    </button>
  );
}
