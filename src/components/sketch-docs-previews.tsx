import cn from "cnfast";
import type { ReactNode } from "react";
import type { SketchOutlineOptions } from "../../registry/components/ui/sketch-provider";
import {
	useSketchBg,
	useSketchOutline,
} from "../../registry/components/ui/sketch-provider";

export function OutlinePreview({
	children,
	className,
	...options
}: SketchOutlineOptions & { children: ReactNode; className?: string }) {
	const sketchOutline = useSketchOutline(options);

	return (
		<div
			className={cn("relative isolate rounded-lg px-4 py-3 text-sm", className)}
		>
			{children}
			<svg
				aria-hidden="true"
				data-sketch-outline
				className="-z-10"
				ref={sketchOutline.ref}
				style={sketchOutline.style}
			/>
		</div>
	);
}

export function BgPreview({
	children,
	className,
	...options
}: SketchOutlineOptions & { children: ReactNode; className?: string }) {
	const sketchBg = useSketchBg(options);

	return (
		<div
			className={cn("relative isolate rounded-lg px-4 py-3 text-sm", className)}
		>
			{children}
			<svg
				aria-hidden="true"
				data-sketch-bg
				className="-z-10"
				ref={sketchBg.ref}
				style={sketchBg.style}
			/>
		</div>
	);
}
