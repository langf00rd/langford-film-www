export function Title({
  children,
  underline = false,
}: {
  children: React.ReactNode;
  underline?: boolean;
}) {
  return (
    <h1
      className={`font-display relative text-[74px] md:text-[90px] lg:text-[160px] w-full uppercase leading-[0.92] tracking-[-0.01em] ${underline && "border-b-[3px] left-1"}`}
    >
      {children}
    </h1>
  );
}
