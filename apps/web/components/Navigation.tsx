"use client";
import classNames from "classnames";

interface Props {
  className?: string;
  defaultCountry?: "kr" | "jp";
}

export default function Navigation({ className }: Props) {
  return <nav className={classNames("", className)}></nav>;
}
