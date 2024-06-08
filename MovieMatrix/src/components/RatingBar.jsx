export function RatingBar({ vote_average }) {
    let rate = (vote_average / 10) * 100;
    return (
      <div className="w-20 h-2 border border-solid border-orange-600 rounded bg-white flex items-center">
        <div className="h-full bg-[#e3a036] rounded-l" style={{ width: `${rate}%` }}></div>
      </div>
    );
  }
  