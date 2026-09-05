import cn from "cnfast";
import type { ReactNode } from "react";

export function FloatingComponent({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return (
		<div
			className={cn(
				"pointer-events-none absolute animate-float will-change-transform motion-reduce:animate-none",
				className,
			)}
		>
			<div className="pointer-events-auto transition-transform duration-300 hover:scale-110">
				{children}
			</div>
		</div>
	);
}
