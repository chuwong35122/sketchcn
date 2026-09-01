import { createContext, type CSSProperties, type Ref } from "react";
import type { Options } from "roughjs/bin/core";

export const DEFAULT_SEED = 20_260_828;
export const DEFAULT_STROKE_INSET = 2;

export type SketchTheme = {
	options: Partial<Options>;
	seed: number;
};

export const SketchContext = createContext<SketchTheme | null>(null);

export type SketchOutlineOptions = Partial<Options> & {
	borderRadius?: number;
	opacity?: number;
};

export type SketchOutline = {
	ref: Ref<SVGSVGElement>;
	style: CSSProperties;
};

export function createSeed(seed: number, instanceId: string): number {
	let hash = seed;

	for (let index = 0; index < instanceId.length; index += 1) {
		hash = (hash << 5) - hash + instanceId.charCodeAt(index);
		hash |= 0;
	}

	return (hash >>> 0) % 2_147_483_647 || 1;
}

export function getCssSketchOptions(target: Element): Partial<Options> {
	const styles = getComputedStyle(target);
	const bowing = readCssNumber(styles, "--sketch-bowing");
	const roughness = readCssNumber(styles, "--sketch-roughness");
	const stroke = styles.getPropertyValue("--sketch-stroke").trim();
	const strokeWidth = readCssNumber(styles, "--sketch-stroke-width");
	const disableMultiStroke = readCssBoolean(styles, "--sketch-disable-multi-stroke");
	const preserveVertices = readCssBoolean(styles, "--sketch-preserve-vertices");
	const fill = styles.getPropertyValue("--sketch-fill").trim();
	const fillStyle = styles.getPropertyValue("--sketch-fill-style").trim();

	return {
		...(bowing === undefined ? {} : { bowing }),
		...(disableMultiStroke === undefined ? {} : { disableMultiStroke }),
		...(fill === "" ? {} : { fill }),
		...(fillStyle === "" ? {} : { fillStyle }),
		...(roughness === undefined ? {} : { roughness }),
		...(preserveVertices === undefined ? {} : { preserveVertices }),
		...(stroke === "" ? {} : { stroke }),
		...(strokeWidth === undefined ? {} : { strokeWidth }),
	};
}

export function getBorderRadius(target: Element): number {
	return Number.parseFloat(getComputedStyle(target).borderTopLeftRadius) || 0;
}

export function createRoundedRectanglePath(
	width: number,
	height: number,
	radius: number,
	strokeInset: number,
): string {
	const left = strokeInset;
	const top = strokeInset;
	const right = width - strokeInset;
	const bottom = height - strokeInset;
	const cornerRadius = Math.min(radius, (right - left) / 2, (bottom - top) / 2);

	if (cornerRadius === 0) {
		return `M ${left} ${top} H ${right} V ${bottom} H ${left} Z`;
	}

	return [
		`M ${left + cornerRadius} ${top}`,
		`H ${right - cornerRadius}`,
		`Q ${right} ${top} ${right} ${top + cornerRadius}`,
		`V ${bottom - cornerRadius}`,
		`Q ${right} ${bottom} ${right - cornerRadius} ${bottom}`,
		`H ${left + cornerRadius}`,
		`Q ${left} ${bottom} ${left} ${bottom - cornerRadius}`,
		`V ${top + cornerRadius}`,
		`Q ${left} ${top} ${left + cornerRadius} ${top}`,
		"Z",
	].join(" ");
}

function readCssNumber(styles: CSSStyleDeclaration, property: string): number | undefined {
	const value = Number.parseFloat(styles.getPropertyValue(property));

	if (Number.isNaN(value)) {
		return undefined;
	}

	return value;
}

function readCssBoolean(styles: CSSStyleDeclaration, property: string): boolean | undefined {
	const value = styles.getPropertyValue(property).trim();

	if (value === "true") {
		return true;
	}

	if (value === "false") {
		return false;
	}

	return undefined;
}
