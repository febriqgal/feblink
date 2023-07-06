import React from "react";

export default function Test({
  className,
  children,
}: React.ComponentPropsWithRef<"div">) {
  return <div className={className}>{children}</div>;
}
