function SectionTitle({ title }) {
  return (
    <h2 className="mb-4 ml-4 flex items-center gap-3 text-2xl font-semibold text-slate-900">
      <span className="h-6 w-1 rounded bg-blue-600"></span>
      {title}
    </h2>
  );
}

export default SectionTitle;
