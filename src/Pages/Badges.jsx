import { useState, useEffect } from "react"
import BadgePath from "../components/BadgePath"
import BadgeCard from "../components/BadgeCard"

export default function Badges() {
  const [contributions, setContributions] = useState(0)
  const [loading, setLoading] = useState(true)
  
  const milestones = [1, 10, 50, 100, 500, 1000]
  const userId = "demoUser123"

  const badges = [
    { icon: "🚩", label: "First Report", milestone: 1, color: "from-blue-400 to-blue-600" },
    { icon: "⭐", label: "10 Contributions", milestone: 10, color: "from-green-400 to-green-600" },
    { icon: "🎖️", label: "50 Contributions", milestone: 50, color: "from-yellow-400 to-yellow-600" },
    { icon: "🏅", label: "100 Contributions", milestone: 100, color: "from-orange-400 to-orange-600" },
    { icon: "🥇", label: "500 Contributions", milestone: 500, color: "from-purple-400 to-purple-600" },
    { icon: "🏆", label: "1000 Contributions", milestone: 1000, color: "from-pink-400 to-pink-600" }
  ]

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/issues/count/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setContributions(data.contributions || 0)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching contributions:", err)
        setContributions(0)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (contributions > 0 && milestones.includes(contributions)) {
      setTimeout(() => {
        alert(`🎉 Congratulations! You reached ${contributions} contributions!`)
      }, 500)
    }
  }, [contributions])

  const nextMilestone = milestones.find(m => m > contributions) || 1000
  const progress = contributions >= 1000 ? 100 : ((contributions / nextMilestone) * 100)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🏆</div>
          <p className="text-xl text-gray-600">Loading your achievements...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 mb-4">
            Your Badges
          </h1>
          <p className="text-gray-600 text-lg">
            Track your journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Total Contributions */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-5xl font-extrabold text-blue-600 mb-2">
                {contributions}
              </div>
              <div className="text-gray-700 font-semibold">Total Contributions</div>
            </div>

            {/* Badges Earned */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-5xl font-extrabold text-purple-600 mb-2">
                {badges.filter(b => contributions >= b.milestone).length}
              </div>
              <div className="text-gray-700 font-semibold">Badges Earned</div>
            </div>

            {/* Next Milestone */}
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
              <div className="text-5xl font-extrabold text-pink-600 mb-2">
                {contributions >= 1000 ? "MAX" : nextMilestone}
              </div>
              <div className="text-gray-700 font-semibold">
                {contributions >= 1000 ? "All Unlocked!" : "Next Milestone"}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {contributions < 1000 && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Progress to {nextMilestone} contributions
                </span>
                <span className="text-sm font-bold text-purple-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {nextMilestone - contributions} more to go!
              </p>
            </div>
          )}
        </div>

        {/* Progress Path */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Your Journey
          </h2>
          <BadgePath milestones={milestones} contributions={contributions} />
        </div>

        {/* Badge Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Badge Collection
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                  contributions >= badge.milestone
                    ? "border-2 border-transparent hover:border-purple-300 hover:shadow-2xl transform hover:scale-105"
                    : "opacity-50 grayscale"
                }`}
              >
                {/* Badge Icon */}
                <div className="text-center">
                  <div
                    className={`text-6xl mb-3 transition-transform duration-300 ${
                      contributions >= badge.milestone ? "group-hover:scale-125" : ""
                    }`}
                  >
                    {badge.icon}
                  </div>

                  {/* Badge Label */}
                  <div className="text-sm font-bold text-gray-800 mb-1">
                    {badge.label}
                  </div>

                  {/* Status */}
                  {contributions >= badge.milestone ? (
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-semibold">Unlocked</span>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">
                      {badge.milestone - contributions} to go
                    </div>
                  )}
                </div>

                {/* Gradient Overlay */}
                {contributions >= badge.milestone && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                )}

                {/* Lock Icon for Locked Badges */}
                {contributions < badge.milestone && (
                  <div className="absolute top-2 right-2 text-gray-400 text-xl">
                    🔒
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-center shadow-2xl">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {contributions === 0
              ? "Start Your Journey!"
              : contributions >= 1000
              ? "You're a Champion!"
              : "Keep Going!"}
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {contributions === 0
              ? "Report your first issue and start earning badges today!"
              : contributions >= 1000
              ? "You've unlocked all badges! You're making a real difference in your community."
              : `You're doing great! Just ${nextMilestone - contributions} more contributions to your next badge.`}
          </p>
        </div>
      </div>
    </div>
  )
}