
  function TruncateText ({text,wordLimit}){
     const words = text.split(" ");
    if(words.length>wordLimit){
      return words.slice(0,wordLimit).join(" ") + "...";
    }
    return text;
  }

export function CardComponent({item}){
    return (
        <div key={item.id} class="flex flex-col items-center bg-white border border-gray-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-e-lg"></img>

                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.original_title}</h5>
                  <div class="">
                   <label class="text-xl">Release Date: </label>
                   <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.release_date}</span>
                  </div>
                  <div>
                  <span class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <TruncateText text={item.overview} wordLimit={150}/>
                  </span>
                  </div>
                  <a  class="italic text-sm text-amber-600 "> Read More...</a>
                 
                  
                  
                </div>
        </div>
    )
}