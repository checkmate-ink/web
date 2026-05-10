export function TestCardSkeletonGrid() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="border-deep-brown/4 flex flex-col gap-4 rounded-[20px] border bg-white p-6"
        >
          <div className="bg-deep-brown/5 h-6 w-20 animate-pulse rounded-full" />
          <div className="bg-deep-brown/5 h-5 w-3/4 animate-pulse rounded" />
          <div className="bg-deep-brown/5 h-4 w-full animate-pulse rounded" />
        </div>
      ))}
    </div>
  );
}
