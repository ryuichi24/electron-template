import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className="bg-@project-accent rounded-sm p-2">
      {children}
    </button>
  );
};

export default Button;
