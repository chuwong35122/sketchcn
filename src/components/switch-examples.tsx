import { useId, useState } from "react";
import { Switch } from "../../registry/components/ui/switch";
import { ShowcaseCard } from "./showcase-card";

const SETTING_ROW_SNIPPET = `import { Switch } from "@/components/ui/switch";

export function SettingRow() {
  const id = useId();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm">
          Rough edges
        </label>
        <span className="text-muted-foreground text-xs">
          Redraw every outline with a hand-drawn wobble.
        </span>
      </div>
      <Switch id={id} defaultChecked />
    </div>
  );
}`;

const CONTROLLED_SNIPPET = `import { Switch } from "@/components/ui/switch";

export function AutosaveToggle() {
  const [autosave, setAutosave] = useState(true);

  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={autosave}
        onCheckedChange={setAutosave}
        aria-label="Autosave"
      />
      <span className="text-sm">
        Autosave is {autosave ? "on" : "off"}
      </span>
    </div>
  );
}`;

export function SwitchExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Settings rows and controlled switches."
		>
			<ShowcaseCard.Example label="Settings row" code={SETTING_ROW_SNIPPET}>
				<SettingRowPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Controlled" code={CONTROLLED_SNIPPET}>
				<AutosaveTogglePreview />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}

function SettingRowPreview() {
	const id = useId();

	return (
		<div className="flex w-full items-center justify-between gap-4">
			<div className="flex flex-col">
				<label htmlFor={id} className="text-sm">
					Rough edges
				</label>
				<span className="text-muted-foreground text-xs">
					{"Redraw every outline with a hand-drawn wobble."}
				</span>
			</div>
			<Switch id={id} defaultChecked />
		</div>
	);
}

function AutosaveTogglePreview() {
	const [autosave, setAutosave] = useState(true);
	const autosaveLabel = autosave ? "on" : "off";

	return (
		<div className="flex items-center gap-3">
			<Switch
				checked={autosave}
				onCheckedChange={setAutosave}
				aria-label="Autosave"
			/>
			<span className="text-sm">{`Autosave is ${autosaveLabel}`}</span>
		</div>
	);
}
