import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Profiles } from "./Profiles";


export function DetailView() {
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetchDeatils();
    }, [])

    const apiKey = import.meta.env.VITE_API_KEY;
    const { id, type } = useParams();
    const fetchDeatils = async () => {
        try {
            const response = await axios.get(`http://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits,similar`);
            setDetails(response.data);
        } catch (error) {
            console.log("Error :", error)
        }
    }

    const backgroundURL = details?.backdrop_path || details?.poster_path;
    console.log(backgroundURL);

    return (
        <div className="p-0 bg-[#e3a036] m-0 w-screen h-screen relative">
            <div className='font-lora h-[15vh] w-full mx-auto relative pt-[10px] bg-[#e3a036] flex items-start justify-center text-[#110b04]'>
                <span className='text-2xl font-semibold mx-10'>Movie Matrix</span>
                <div className="w-[12vh] h-[10vh] object-contain absolute top-[12px] left-[5px]"><img src="https://t4.ftcdn.net/jpg/06/99/77/83/240_F_699778378_hxlu1YGW6iv7luPpLf5v3E8Lbi6WMtnz.jpg" /> </div>
            </div>
            {/* Above is the title bar of the app */}
            <div className="w-full min-h-screen-3/2 m-0 text-white"
                style={backgroundURL && { background: `url("https://image.tmdb.org/t/p/original${backgroundURL}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <div className="h-8 w-full my-15 mx-50 p-10 sm:p-20 bg-[#e3a036] bg-opacity-40 shadow-lg rounded-lg text-center text-shadow">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{details.title ? details.title : details.name}</h1>
                    <h4 className="text-lg mb-4">{details?.tagline}</h4>
                </div>

                <div className="rounded-lg shadow-md text-lg md:text-xl mx-8 my-4 md:my-6">
                    <h4 className="text-lg font-semibold">Genre: {details?.genres?.map(value => value.name).join(", ")}</h4>
                    <div className="details__extras mt-4">
                        <p className="text-sm"><strong>Status:</strong> {details?.status}</p>
                        <p className="text-sm"><strong>Release Date:</strong> {details?.release_date || details?.first_air_date}</p>
                    </div>
                    {
                        details?.seasons && 
                        <div>
                        <p><strong>{`Seasons : ${details.seasons?.length}`}</strong></p>
                        <Profiles profilesDetails={details?.seasons}/>
                        </div>
                    }
                    <div>
                        <p><strong>Cast : </strong></p>
                         <Profiles profilesDetails={details?.credits?.cast}/>
                    </div>

                    <div>
                        <p><strong>Similar : </strong></p>
                         <Profiles profilesDetails={details?.similar?.results} type={type}/>
                    </div>
                </div>

                <div>
                {/* <Watch id={id} type={type}/> */}
                </div>



            </div>
        </div>
    )
}