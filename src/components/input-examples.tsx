import { Search } from "@boxicons/react";
import { useId, useState } from "react";
import { Button } from "../../registry/components/ui/button";
import { Input } from "../../registry/components/ui/input";
import { ShowcaseCard } from "./showcase-card";

const LABELLED_SNIPPET = `import { Input } from "@/components/ui/input";

export function EmailField() {
  const id = useId();

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="text-sm">
        Email
      </label>
      <Input id={id} type="email" placeholder="hello@chuwii.com" />
      <span className="text-muted-foreground text-xs">
        We only use this to send you sketches.
      </span>
    </div>
  );
}`;

const SEARCH_SNIPPET = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  const [term, setTerm] = useState("");

  return (
    <div className="flex w-full items-center gap-2">
      <Input
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="Search sketches"
      />
      <Button size="icon" aria-label="Search" onClick={() => onSearch(term)}>
        <Search />
      </Button>
    </div>
  );
}`;

const VALIDATION_SNIPPET = `import { Input } from "@/components/ui/input";

export function UsernameField() {
  const [username, setUsername] = useState("");
  const isTooShort = username.length > 0 && username.length < 3;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <Input
        value={username}
        aria-invalid={isTooShort}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      {isTooShort && (
        <span className="text-destructive text-xs">
          Usernames need at least 3 characters.
        </span>
      )}
    </div>
  );
}`;

export function InputExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Labelled fields, search bars and live validation."
		>
			<ShowcaseCard.Example
				label="Labelled field with a hint"
				code={LABELLED_SNIPPET}
			>
				<LabelledFieldPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Search bar" code={SEARCH_SNIPPET}>
				<SearchBarPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Live validation" code={VALIDATION_SNIPPET}>
				<UsernameFieldPreview />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}

function LabelledFieldPreview() {
	const id = useId();

	return (
		<div className="flex w-full flex-col gap-1.5">
			<label htmlFor={id} className="text-sm">
				Email
			</label>
			<Input id={id} type="email" placeholder="hello@chuwii.com" />
			<span className="text-muted-foreground text-xs">
				{"We only use this to send you sketches."}
			</span>
		</div>
	);
}

function SearchBarPreview() {
	const [term, setTerm] = useState("");

	return (
		<div className="flex w-full items-center gap-2">
			<Input
				value={term}
				onChange={(event) => setTerm(event.target.value)}
				placeholder="Search sketches"
			/>
			<Button size="icon" aria-label="Search">
				<Search />
			</Button>
		</div>
	);
}

function UsernameFieldPreview() {
	const [username, setUsername] = useState("");
	const isTooShort = username.length > 0 && username.length < 3;

	return (
		<div className="flex w-full flex-col gap-1.5">
			<Input
				value={username}
				aria-invalid={isTooShort}
				onChange={(event) => setUsername(event.target.value)}
				placeholder="Username"
			/>
			{isTooShort && (
				<span className="text-destructive text-xs">
					{"Usernames need at least 3 characters."}
				</span>
			)}
		</div>
	);
}
