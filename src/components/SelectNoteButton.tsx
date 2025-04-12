"use client";

import useNote from "@/hooks/use-note";
import { Note } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarMenuButton } from "./ui/sidebar";
import Link from "next/link";
import { format } from "date-fns";

type Props = {
  note: Note;
};

function SelectNoteButton({ note }: Props) {
  const noteId = useSearchParams().get("noteId") || "";

  const { noteText: selectedNoteText } = useNote();
  const [shouldUseGlobalNoteText, setShouldUseGlobalNoteText] = useState(false);
  const [localNoteText, setLocalNoteText] = useState(note.text || "EMPTY NOTE");

  useEffect(() => {
    if (noteId === note.id) {
      setShouldUseGlobalNoteText(true);
    } else {
      setShouldUseGlobalNoteText(false);
    }
  }, [noteId, note.id]);

  useEffect(() => {
    if (shouldUseGlobalNoteText) {
      setLocalNoteText(selectedNoteText);
    }
  }, [selectedNoteText, shouldUseGlobalNoteText]);

  const blankNoteText = "EMPTY NOTE";
  let noteText = localNoteText || blankNoteText;

  if (shouldUseGlobalNoteText) {
    noteText = selectedNoteText || blankNoteText;
  }

  // Format the date using date-fns for consistent output
  const formattedDate = format(new Date(note.updatedAt), "yyyy-MM-dd");

  console.log("Server-rendered note.text:", note.text);
  console.log("Client-rendered noteText:", noteText);

  return (
    <SidebarMenuButton
      asChild
      className={`items-start gap-0 pr-12 ${note.id === noteId && "bg-sidebar-accent/50"}`}
    >
      <Link href={`/?noteId=${note.id}`} className="flex h-fit flex-col">
        <p className="w-full truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {noteText || "EMPTY NOTE"}
        </p>
        <p className="text-muted-foreground text-xs">{formattedDate}</p>
      </Link>
    </SidebarMenuButton>
  );
}

export default SelectNoteButton;
