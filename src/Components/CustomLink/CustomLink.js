import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          // fontSize: "20px",
          // color: match ? "red" : "black",
          // textDecoration: match ? "underline" : "none",
          padding: "var(--underline-gap, 1rem) 0",
          borderBottom: match
            ? "0.2rem solid hsl(var(--clr-white) / 0.5)"
            : "0.2rem solid hsl(var(--clr-white) / 0)",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
