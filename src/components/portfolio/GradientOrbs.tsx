const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 50%), transparent)",
          filter: "blur(120px)",
          top: "-10%",
          left: "-10%",
          animation: "orb-move-1 25s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(270 70% 55%), transparent)",
          filter: "blur(120px)",
          bottom: "-10%",
          right: "-10%",
          animation: "orb-move-2 30s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(330 100% 50%), transparent)",
          filter: "blur(100px)",
          top: "40%",
          right: "20%",
          animation: "orb-move-3 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default GradientOrbs;
