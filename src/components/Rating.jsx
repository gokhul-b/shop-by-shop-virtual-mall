import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(4);
  return (
    <div>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => setRating(value)}
            className={`text-xl ${
              value <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
