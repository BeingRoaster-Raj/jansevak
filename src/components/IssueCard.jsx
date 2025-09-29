import { format } from "timeago.js"

function IssueCard({ title, description, category, location, imageUrl, createdAt }) {
  return (
    <div className="bg-gray-300 shadow rounded-lg p-4 flex flex-col h-full">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-28 object-cover rounded"
        />
      )}
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-sm text-blue-600 mt-1">📍 {location}</p>
        <div className="flex justify-between items-center mt-2 text-xs">
          <span className="text-xs text-gray-500">Category: {category}</span>
          <span className="text-xs text-gray-400">
            {createdAt ? format(createdAt) : "Just now"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default IssueCard
