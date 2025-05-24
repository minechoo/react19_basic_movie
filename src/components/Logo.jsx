import { Link } from "react-router-dom";

export default function Logo({ title, desc }) {
  return (
    <>
      <h1 className="font-orbitron text-2xl theme-text font-[800] tracking-tighter leading-none">
        <Link to="/">{title}</Link>
      </h1>
      {desc && (
        <h2 className="text-xs font-semibold theme-theme tracking-wide indent-0.5 opacity-50 -translate-x-[2px]">
          {desc}
        </h2>
      )}
    </>
  );
}
