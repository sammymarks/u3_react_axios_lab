

export default function PeopleList (props) {


    if (props.peopleList.length > 0) {
        return(
            <div className="cat-grid people-grid">
                {
                    props.peopleList.map((person) => (
                        <div className="cat-card film-card" key={person.url}>
                            <div className="cat-card-header"> Name: {person.name} </div>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="cat-loading">
                <h2>Loading People</h2>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg"/>
            </div>
        )
    }
    
}