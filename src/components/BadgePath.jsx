export default function BadgePath({ milestones, contributions }) {
  return (
    <div className="relative">
      <svg viewBox="0 0 1200 200" className="w-full h-40">
        {/* Curvy Path */}
        <path
          d="M 50 150 Q 300 50, 600 150 T 1150 150"
          fill="none"
          stroke="#ccc"
          strokeWidth="4"
        />

        {/* Milestones */}
        {milestones.map((m, i) => {
          const x = 50 + (i * 1100) / (milestones.length - 1)
          const y = i % 2 === 0 ? 150 : 80 // zig-zag effect
          const achieved = contributions >= m

          return (
            <g key={m}>
              <circle
                cx={x}
                cy={y}
                r="20"
                fill={achieved ? "#3b82f6" : "#e5e7eb"}
                stroke="#1e3a8a"
                strokeWidth="2"
              />
              <text
                x={x}
                y={y + 40}
                textAnchor="middle"
                className="fill-gray-700 text-sm"
              >
                {m}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
