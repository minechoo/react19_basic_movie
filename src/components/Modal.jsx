export default function Modal({ children, open, onClose }) {
  console.log(onClose);

  return (
    <>
      {open && (
        <aside className="fixed w-7/10 h-7/10 top-1/2 left-1/2 bg-[oklch(var(--theme-bg)/0.4)] p-20 z-100 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md rounded-md shadow-xl">
          <div className="size-full">{children}</div>
          <span
            className="absolute top-5 right-10 theme-text font-semibold cursor-pointer opacity-50"
            onClick={onClose}
          >
            close
          </span>
        </aside>
      )}
    </>
  );
}
