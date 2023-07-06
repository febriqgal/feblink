"use client";
import { Snippet } from "@nextui-org/react";
import React from "react";

export default function SnippetC({
  link,
  className,
}: { link: string } & React.ComponentPropsWithRef<"div">) {
  return (
    <Snippet
      size="xs"
      className={className}
      tooltipProps={{ content: "Copy Link" }}
    >
      {link}
    </Snippet>
  );
}
