import { NavLink } from "react-router-dom";

function CustomNavLink({ to, children }) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/80 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300 text-lg";

  return (
    <li className="px-2.5">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${navLinkClass}
          ${
            isActive
              ? "bg-primary-100/80 text-primary-900"
              : "text-secondary-600"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
