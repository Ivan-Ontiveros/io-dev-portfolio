import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HyperlinkButtonProps = {
  className?: string;
  url: string;
  label: string;
  isExternal?: boolean;
};

export const HyperlinkButton = ({
  className,
  url,
  label,
  isExternal = false,
}: HyperlinkButtonProps) => (
  <Button asChild className={className ? className : ""}>
    <Link
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {label}
    </Link>
  </Button>
);
