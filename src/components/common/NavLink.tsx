// src/components/common/NavLink.tsx
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkPropsExtended extends Omit<NavLinkProps, "className"> {
  className?:
    | string
    | ((props: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkPropsExtended>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={({ isActive, isPending }) =>
          cn(
            typeof className === "function"
              ? className({ isActive, isPending })
              : className,
            isActive && activeClassName,
            isPending && pendingClassName,
          )
        }
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
