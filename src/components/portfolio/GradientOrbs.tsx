const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(220 70% 45%), transparent)",
          filter: "blur(140px)",
          top: "-15%",
          left: "-10%",
          animation: "orb-move-1 30s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 45%), transparent)",
          filter: "blur(140px)",
          bottom: "-10%",
          right: "-10%",
          animation: "orb-move-2 35s ease-in-out infinite",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default GradientOrbs;
