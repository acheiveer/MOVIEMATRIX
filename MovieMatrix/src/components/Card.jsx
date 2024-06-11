import { Link, useNavigate } from "react-router-dom"
import { RatingBar } from "./RatingBar";

export function SingleCard({ value, searchFor }) {
    const navigate = useNavigate();
    const card = {
        title: value.title ? value.title : value.name,
        poster: value.poster_path ? `https://image.tmdb.org/t/p/original/${value.poster_path}` : "https://t4.ftcdn.net/jpg/06/99/77/83/240_F_699778378_hxlu1YGW6iv7luPpLf5v3E8Lbi6WMtnz.jpg",
        release: "Release Date :",
        releasedOn: value.release_date ? value.release_date : value.first_air_date,
        averageVote: value.vote_average,
        rating: value.vote_average,
        overview: value.overview,
        id: value.id



    }


    return (
        <div className="flex justify-evenly items-center bg-white min-h-[200px] w-full border-none rounded-[10px] shadow-[15px_16px_24px_-11px_#2d40592f] m-[30px_auto] transition-[0.3s] hover:shadow-[13px_16px_48px_-6px_#2d40592f]">
            <div className="flex-0.3 border-none rounded-l-[10px] h-full overflow-hidden object-contain">
                <img className="h-full w-full" src={card.poster} alt={`${card.title}_poster`}></img>
            </div>

            <div className="flex-0.7 px-10 py-15">
                <h2 className="text-xl font-bold mb-5">{card.title}</h2>
                <div className="mb-5">
                    <strong>{card.release}</strong>
                    <span>{card.releasedOn}</span>
                </div>
                <div className="flex items-center">
                    <div className="w-1/5 text-sm"><strong>Rating :</strong></div>
                    <RatingBar vote_average={card.averageVote}/>
                </div>
                <div className="mt-5">
                    <p>{card.overview}</p>
                </div>

                <div className="mt-5 flex justify-end">
                    <div className="w-90 flex justify-end items-center">
                        <button
                        className="text-orange-600 hover:text-orange-600"
                            onClick={() => navigate(`/${searchFor}/${card.id}`)}
                        >Read More..</button>
                    </div>

                </div>

            </div>

        </div>
    )
}