import React from "react";
import "../style/links.css";

type Props = {
  link: string;
  label: string;
  variant?: "primary" | "secondary";
};

function Link({ link, label, variant = "primary" }: Props) {
  return (
    <a target="_blank" href={link}>
      <button type="button" className={variant}>
        {label}
      </button>
    </a>
  );
}

export default Link;
