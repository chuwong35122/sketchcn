import { Button } from "../../registry/components/ui/button";
import { Input } from "../../registry/components/ui/input";
import { Separator } from "../../registry/components/ui/separator";
import { ShowcaseCard } from "./showcase-card";

const SIGN_IN_SNIPPET = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SignInForm() {
  return (
    <form className="flex w-full max-w-sm flex-col gap-3">
      <Input type="email" placeholder="you@sketch.app" />
      <Button type="submit">Continue with email</Button>
      <Separator>or</Separator>
      <Button variant="outline" type="button">
        Continue with GitHub
      </Button>
    </form>
  );
}`;

const TOOLBAR_SNIPPET = `import { Separator } from "@/components/ui/separator";

export function ProfileMeta() {
  return (
    <div className="flex h-6 items-center gap-3 text-muted-foreground text-sm">
      <span>12 sketches</span>
      <Separator orientation="vertical" />
      <span>3 drafts</span>
      <Separator orientation="vertical" />
      <span>Updated today</span>
    </div>
  );
}`;

const SECTION_SNIPPET = `import { Separator } from "@/components/ui/separator";

export function NoteSection() {
  return (
    <section className="flex w-full flex-col gap-4">
      <p className="text-sm">Everything above is the rough draft.</p>
      <Separator variant="double" />
      <p className="text-sm">Everything below is the inked version.</p>
    </section>
  );
}`;

export function SeparatorExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Labelled dividers, inline meta rows, and section breaks."
		>
			<ShowcaseCard.Example label="Sign-in divider" code={SIGN_IN_SNIPPET}>
				<form className="flex w-full max-w-sm flex-col gap-3">
					<Input type="email" placeholder="you@sketch.app" />
					<Button type="submit">Continue with email</Button>
					<Separator>or</Separator>
					<Button variant="outline" type="button">
						Continue with GitHub
					</Button>
				</form>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Inline meta row" code={TOOLBAR_SNIPPET}>
				<div className="flex h-6 items-center gap-3 text-muted-foreground text-sm">
					<span>12 sketches</span>
					<Separator orientation="vertical" />
					<span>3 drafts</span>
					<Separator orientation="vertical" />
					<span>Updated today</span>
				</div>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Section break" code={SECTION_SNIPPET}>
				<section className="flex w-full flex-col gap-4">
					<p className="text-sm">Everything above is the rough draft.</p>
					<Separator variant="double" />
					<p className="text-sm">Everything below is the inked version.</p>
				</section>
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
