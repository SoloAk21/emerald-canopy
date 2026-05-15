// components/ui/BackgroundEffects.tsx
const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      {/* Grained noise overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.000015]"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.8"/%3E%3C/svg%3E')`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />

      {/* Subtle light leaks */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
    </div>
  );
};

export default BackgroundEffects;
