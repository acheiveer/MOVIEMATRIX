import {CardComponent} from "./card"

export function MovieCard({ searchResult, error }) {
    return (
        <div >
            {searchResult && !error && (
                <div>
                    {searchResult.results.map((item) => (
                        <CardComponent item={item}/>
                    ))}
                </div>
            )}
        </div>
    );
}
