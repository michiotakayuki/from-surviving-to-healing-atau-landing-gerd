import { ArrowRight } from "./icons";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} group ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
