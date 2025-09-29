import { useState, useEffect } from "react"
import BadgePath from "../components/BadgePath"
import BadgeCard from "../components/BadgeCard"

export default function Badges() {
  const [contributions, setContributions] = useState(0)
  const milestones = [1, 10, 50, 100, 500, 1000]

  // Replace with real logged-in user ID later
  const userId = "demoUser123"

  useEffect(() => {
    fetch(`http://localhost:5000/api/issues/count/${userId}`)
      .then((res) => res.json())
      .then((data) => setContributions(data.contributions || 0))
      .catch((err) => {
        console.error("Error fetching contributions:", err)
        setContributions(0)
      })
  }, [])

  useEffect(() => {
    if (contributions > 0 && milestones.includes(contributions)) {
      alert(`🎉 Congratulations! You reached ${contributions} contributions!`)
    }
  }, [contributions])

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">🏆 Your Badges</h2>
      <p className="text-center text-gray-600 mb-8">
        You have made <span className="font-bold">{contributions}</span>{" "}
        contributions so far.
      </p>

      {/* Progress Path */}
      <BadgePath milestones={milestones} contributions={contributions} />

      {/* Legend with colored cards */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        <BadgeCard icon="🚩" label="First Report" achieved={contributions >= 1} />
        <BadgeCard icon="⭐" label="10 Contributions" achieved={contributions >= 10} />
        <BadgeCard icon="🎖️" label="50 Contributions" achieved={contributions >= 50} />
        <BadgeCard icon="🏅" label="100 Contributions" achieved={contributions >= 100} />
        <BadgeCard icon="🥇" label="500 Contributions" achieved={contributions >= 500} />
        <BadgeCard icon="🏆" label="1000 Contributions" achieved={contributions >= 1000} />
      </div>
    </div>
  )
}
