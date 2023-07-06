"use client";
import { Snippet } from "@nextui-org/react";

export default function SnippetC({ link }: { link: string }) {
  return (
    <Snippet
      size="xs"
      className="text-[#0A4D68] bg-slate-50"
      tooltipProps={{ className: "text-black", content: "Copy Link" }}
    >
      {link}
    </Snippet>
  );
}
