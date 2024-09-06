"use client";
import classNames from "classnames";

import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  imageURL?: string;
  content: string | ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  className,
  imageURL,
  content,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "rounded border border-gray-300 px-2.5 py-1.5",
        className,
      )}
      onClick={onClick}
    >
      {!!imageURL && (
        <img src={imageURL} width={20} height={20} alt={imageURL} />
      )}
      <span className="text-sm capitalize">{content}</span>
    </button>
  );
};
