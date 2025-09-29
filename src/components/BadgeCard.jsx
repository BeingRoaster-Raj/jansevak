export default function BadgeCard({ icon, label, achieved }) {
  return (
    <div
      className={`p-4 rounded text-center transition shadow 
      ${achieved ? "bg-green-500 text-white" : "bg-white text-gray-700"}`}
    >
      <span className="text-2xl">{icon}</span>
      <p className="mt-1 font-medium">{label}</p>
    </div>
  )
}
