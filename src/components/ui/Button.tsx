import type { ComponentProps } from "solid-js";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  type = "button",
  variant = "primary",
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      class={[
        ` rounded w-[fit-content] font-bold cursor-pointer`,
        variant === "primary"
          ? "py-2 px-4 bg-[var(--color-theme-secondary)] text-black/90 "
          : "py-2 px-3 text-primary bg-[#212121] fill-neutral-50 border-1 border-white/30",
        props.class,
      ].join(" ")}
    >
      {children}
      {null}
    </button>
  );
}
