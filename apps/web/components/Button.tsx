import classNames from "classnames";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  imageURL?: string;
  content: string | ReactNode;
}

export default function Button({
  className,
  onClick,
  imageURL,
  content,
}: Props) {
  return (
    <button
      className={classNames(
        "rounded border border-gray-300 px-2.5 py-1.5",
        className,
      )}
      onClick={onClick}
    >
      {!!imageURL && (
        <Image src={imageURL} width={20} height={20} alt={imageURL} />
      )}

      <span className="text-sm capitalize">{content}</span>
    </button>
  );
}
