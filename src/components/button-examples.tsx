import { ArrowRight, Plus, Trash } from "@boxicons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";
import { ShowcaseCard } from "./showcase-card";

const FORM_ACTIONS_SNIPPET = `import { Button } from "@/components/ui/button";

export function FormActions() {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="ghost">Cancel</Button>
      <Button type="submit">
        <Plus />
        Save sketch
      </Button>
    </div>
  );
}`;

const AS_LINK_SNIPPET = `import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function DocsLink() {
  return (
    <Button variant="outline" render={<Link to="/docs" />}>
      Read the docs
      <ArrowRight />
    </Button>
  );
}`;

const CONFIRM_SNIPPET = `import { Button } from "@/components/ui/button";

export function DeleteRow({ onDelete }: { onDelete: () => void }) {
  return (
    <Button variant="destructive" size="sm" onClick={onDelete}>
      <Trash />
      Delete
    </Button>
  );
}`;

export function ButtonExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Common places a hand-drawn button shows up."
		>
			<ShowcaseCard.Example label="Form actions" code={FORM_ACTIONS_SNIPPET}>
				<div className="flex w-full justify-end gap-2">
					<Button variant="ghost">Cancel</Button>
					<Button type="submit">
						<Plus />
						Save sketch
					</Button>
				</div>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example
				label="Rendered as a link with the render prop"
				code={AS_LINK_SNIPPET}
			>
				<Button variant="outline" render={<Link to="/docs" />}>
					Read the docs
					<ArrowRight />
				</Button>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example
				label="Destructive row action"
				code={CONFIRM_SNIPPET}
			>
				<Button variant="destructive" size="sm">
					<Trash />
					Delete
				</Button>
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
