export default function BackgroundVisualLayers() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial glow accents */}
      <div
        className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #7C3AED40 0%, #7C3AED1f 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #22D3EE33 0%, #22D3EE1a 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
