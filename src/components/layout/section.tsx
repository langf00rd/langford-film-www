export function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="h-screen flex flex-col p-5 md:p-18 bg-black/30">
      {children}
    </section>
  );
}
