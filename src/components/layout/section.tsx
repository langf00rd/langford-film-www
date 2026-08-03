export function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="min-h-screen pb-32 md:mb-0 flex flex-col p-5 md:p-18 bg-black/30 md:pr-38"
    >
      {children}
    </section>
  );
}
