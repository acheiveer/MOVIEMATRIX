import React, { useState } from 'react';

export function Profile({profileDetails,type}){
    const [displayDetails,setDisplayDetails] = useState(false);
    const backgroundURL = profileDetails?.profile_path || profileDetails?.poster_path;
    const title = profileDetails?.name || profileDetails?.title; 
    const  profile = {
        airedOn : profileDetails?.air_date || profileDetails?.first_air_date,
        id : profileDetails?.id,
        gender : {"0": "Other","1": "Female","2":"Male"},
        averageVote : profileDetails?.vote_average,
        episodes : profileDetails?.episode_count,
        popularity : profileDetails?.popularity,
      }
      console.log(displayDetails);
    return(
        <div className='h-72 w-40vw max-h-280 min-w-150 max-w-250 mx-5 my-20 bg-opacity-5 shadow-lg backdrop-blur-md border border-transparent text-black overflow-hidden relative bg-cover bg-no-repeat rounded-10'
        style={backgroundURL && {backgroundImage : `url("https://image.tmdb.org/t/p/original/${backgroundURL}")` }} onTouchStart={()=>{setDisplayDetails(true)}} onTouchEnd={()=>{setDisplayDetails(false)}} onMouseEnter={()=>{setDisplayDetails(true)}} onMouseLeave={()=>{setDisplayDetails(false)}}>
         {displayDetails ? 
         <div className='w-full h-full bg-opacity-60 bg-white text-black flex flex-col justify-center items-center p-1'>
         <div><strong>{title}</strong></div>
                        
              {/* card details */}
              {profileDetails?.character && <div><strong>Character :</strong>{` ${profileDetails?.character}`}</div>}
              {profileDetails?.gender && <div><strong>Gender :</strong>{` ${profile.gender[profileDetails?.gender]}`}</div>}
              {profile.airedOn && <div><strong>Aired On :</strong>{` ${profile.airedOn}`}</div>}
              {profile.popularity && <div><strong>Popularity :</strong>{` ${profile.popularity}`}</div>}
              {profile.episodes && <div><strong>Episodes :</strong>{` ${profile.episodes}`}</div>}
              {profile.averageVote && <div><strong>Average Vote :</strong>{` ${profile.averageVote}`}</div>}
         </div>

         : <div className='absolute bottom-0 p-1 w-full bg-[#e3a036] text-center font-semibold'>{title}</div>
         }
        </div>
    )
}