

export default function FilmsList (props) {


    if (props.filmsList.length > 0) {
        return(
            <div className="cat-grid films-grid">
                {
                    props.filmsList.map((film) => (
                        <div className="cat-card film-card" key={film.url}>
                            <div className="cat-card-header"> {film.title} </div>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="cat-loading">
                <h2>Loading Films</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/George_Lucas_cropped_2009.jpg"/>
            </div>
        )
    }
    
}