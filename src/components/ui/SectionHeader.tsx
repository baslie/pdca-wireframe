interface SectionHeaderProps {
  title: string;
  noMargin?: boolean;
  centered?: boolean;
}

export function SectionHeader({ title, noMargin, centered }: SectionHeaderProps) {
  return (
    <div className={noMargin ? "" : "mb-10"}>
      <h2
        className={`text-2xl lg:text-3xl font-extrabold text-black tracking-tight ${
          centered ? "text-center" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
