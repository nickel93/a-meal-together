"use client";

import { useState } from "react";
import { CheckedIcon, DisabledCheckIcon } from "@/icon";

export interface LzCheckboxProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  asBadge?: boolean;
}

const LzCheckbox = (props: LzCheckboxProps) => {
  const {
    id,
    name,
    value,
    disabled,
    checked,
    defaultChecked = false,
    onChange,
    asBadge = true,
    className,
    ...rest
  } = props;

  const isControlled = typeof checked === "boolean";
  const [internal, setInternal] = useState(defaultChecked);
  const isChecked = isControlled ? (checked as boolean) : internal;

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      id={id}
      name={name}
      value={value}
      aria-pressed={isChecked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={toggle}
      className={[
        asBadge ? "absolute top-3 right-3" : "",
        "h-6 w-6 inline-flex items-center justify-center",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className || "",
      ].join(" ")}
      {...rest}
    >
      {isChecked ? <CheckedIcon /> : <DisabledCheckIcon />}
    </button>
  );
};

export default LzCheckbox;
