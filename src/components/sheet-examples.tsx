import { useId, useState } from "react";
import { Button } from "../../registry/components/ui/button";
import { Input } from "../../registry/components/ui/input";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../registry/components/ui/sheet";
import { Textarea } from "../../registry/components/ui/textarea";
import { ShowcaseCard } from "./showcase-card";

const FORM_SNIPPET = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

export function EditSketchSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button>Edit details</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit details</SheetTitle>
          <SheetDescription>Update the sketch without leaving the canvas.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-4">
          <Input placeholder="Sketch name" />
          <Textarea placeholder="What is it for?" />
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`;

const CONTROLLED_SNIPPET = `import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function FiltersSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Filters
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>Narrow the sketches you are looking at.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>Apply</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}`;

export function SheetExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Sheets holding forms, and sheets you open yourself."
		>
			<ShowcaseCard.Example label="Form in a sheet" code={FORM_SNIPPET}>
				<EditSketchSheetPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example
				label="Controlled open state"
				code={CONTROLLED_SNIPPET}
			>
				<FiltersSheetPreview />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}

function EditSketchSheetPreview() {
	const nameId = useId();
	const purposeId = useId();

	return (
		<Sheet>
			<SheetTrigger render={<Button>Edit details</Button>} />
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit details</SheetTitle>
					<SheetDescription>
						{"Update the sketch without leaving the canvas."}
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col gap-3 px-4">
					<Input id={nameId} placeholder="Sketch name" />
					<Textarea id={purposeId} placeholder="What is it for?" />
				</div>
				<SheetFooter>
					<SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
					<Button>Save changes</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

function FiltersSheetPreview() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant="outline" onClick={() => setOpen(true)}>
				Filters
			</Button>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Filters</SheetTitle>
						<SheetDescription>
							{"Narrow the sketches you are looking at."}
						</SheetDescription>
					</SheetHeader>
					<SheetFooter>
						<Button onClick={() => setOpen(false)}>Apply</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	);
}
