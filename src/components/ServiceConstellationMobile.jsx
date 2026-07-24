import { SERVICE_NODES, FOUNDERS } from "./serviceNodes";

const WIDTH = 320;
const HEIGHT = 320;
const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };

function polar(angle, radius) {
  return {
    x: CENTER.x + Math.cos(angle) * radius,
    y: CENTER.y + Math.sin(angle) * radius
  };
}

const founderPoints = FOUNDERS.map((_, i) => polar((i / FOUNDERS.length) * Math.PI * 2, 45));
const servicePoints = SERVICE_NODES.map((_, i) =>
  polar((i / SERVICE_NODES.length) * Math.PI * 2 + 0.4, 120 + (i % 3) * 12)
);

export default function ServiceConstellationMobile({ onSelectNode }) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full h-full"
      role="img"
      aria-label="RamTech services network, tap a dot to see a service"
    >
      <style>
        {`
          @keyframes rt-pulse-glow {
            0%, 100% { opacity: 0.55; }
            50% { opacity: 1; }
          }
          .rt-node-service, .rt-node-founder {
            animation: rt-pulse-glow 2.6s ease-in-out infinite;
          }
        `}
      </style>

      {servicePoints.map((p, i) => (
        <line
          key={`line-${i}`}
          x1={founderPoints[i % founderPoints.length].x}
          y1={founderPoints[i % founderPoints.length].y}
          x2={p.x}
          y2={p.y}
          stroke="#2a3550"
          strokeWidth="1"
        />
      ))}

      {founderPoints.map((p, i) => {
        const next = founderPoints[(i + 1) % founderPoints.length];
        return (
          <line
            key={`founder-line-${i}`}
            x1={p.x}
            y1={p.y}
            x2={next.x}
            y2={next.y}
            stroke="#2a3550"
            strokeWidth="1"
          />
        );
      })}

      {founderPoints.map((p, i) => (
        <circle
          key={`founder-${i}`}
          cx={p.x}
          cy={p.y}
          r="9"
          fill="#E23B4D"
          className="rt-node-founder"
          style={{ animationDelay: `${i * 0.3}s`, cursor: "pointer" }}
          onClick={() => onSelectNode({ type: "founder", ...FOUNDERS[i] })}
        />
      ))}

      {servicePoints.map((p, i) => (
        <circle
          key={`service-${i}`}
          cx={p.x}
          cy={p.y}
          r="6"
          fill="#22D3EE"
          className="rt-node-service"
          style={{ animationDelay: `${i * 0.25}s`, cursor: "pointer" }}
          onClick={() => onSelectNode({ type: "service", ...SERVICE_NODES[i] })}
        />
      ))}
    </svg>
  );
}
