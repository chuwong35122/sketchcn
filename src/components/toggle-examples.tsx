import { Bold, Italic, TextUnderline } from "@boxicons/react";
import { useState } from "react";
import { Toggle } from "../../registry/components/ui/toggle";
import { ShowcaseCard } from "./showcase-card";

const TOOLBAR_SNIPPET = `import { Toggle } from "@/components/ui/toggle";

const TEXT_MARKS = [
  { value: "bold", label: "Bold", Icon: Bold },
  { value: "italic", label: "Italic", Icon: Italic },
  { value: "underline", label: "Underline", Icon: TextUnderline },
];

export function TextToolbar() {
  const [marks, setMarks] = useState<string[]>(["bold"]);

  function toggleMark(value: string, pressed: boolean) {
    setMarks((current) => {
      if (pressed) {
        return [...current, value];
      }

      return current.filter((mark) => mark !== value);
    });
  }

  return (
    <div className="flex gap-1">
      {TEXT_MARKS.map(({ value, label, Icon }) => (
        <Toggle
          key={value}
          variant="outline"
          size="sm"
          aria-label={label}
          pressed={marks.includes(value)}
          onPressedChange={(pressed) => toggleMark(value, pressed)}
        >
          <Icon />
        </Toggle>
      ))}
    </div>
  );
}`;

const FILTER_SNIPPET = `import { Toggle } from "@/components/ui/toggle";

export function DraftsFilter() {
  const [showDrafts, setShowDrafts] = useState(false);

  return (
    <Toggle pressed={showDrafts} onPressedChange={setShowDrafts}>
      Show drafts
    </Toggle>
  );
}`;

const TEXT_MARKS = [
	{ value: "bold", label: "Bold", Icon: Bold },
	{ value: "italic", label: "Italic", Icon: Italic },
	{ value: "underline", label: "Underline", Icon: TextUnderline },
] as const;

export function ToggleExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Editor toolbars and controlled filters."
		>
			<ShowcaseCard.Example label="Formatting toolbar" code={TOOLBAR_SNIPPET}>
				<TextToolbarPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Controlled filter" code={FILTER_SNIPPET}>
				<DraftsFilterPreview />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}

function TextToolbarPreview() {
	const [marks, setMarks] = useState<string[]>(["bold"]);

	function toggleMark(value: string, pressed: boolean) {
		setMarks((current) => {
			if (pressed) {
				return [...current, value];
			}

			return current.filter((mark) => mark !== value);
		});
	}

	return (
		<div className="flex gap-1">
			{TEXT_MARKS.map(({ value, label, Icon }) => (
				<Toggle
					key={value}
					variant="outline"
					size="sm"
					aria-label={label}
					pressed={marks.includes(value)}
					onPressedChange={(pressed) => toggleMark(value, pressed)}
				>
					<Icon />
				</Toggle>
			))}
		</div>
	);
}

function DraftsFilterPreview() {
	const [showDrafts, setShowDrafts] = useState(false);

	return (
		<Toggle pressed={showDrafts} onPressedChange={setShowDrafts}>
			Show drafts
		</Toggle>
	);
}
