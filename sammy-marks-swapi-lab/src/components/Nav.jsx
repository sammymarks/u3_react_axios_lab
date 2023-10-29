import { Link } from "react-router-dom"

export default function Nav () {
    return(
        <div className="Nav">
            <Link className="Nav-link" to="/"><div>Home</div></Link>
            <Link className="Nav-link" to="/films"><div>Films</div></Link>
            <Link className="Nav-link" to="/people"><div>People</div></Link>
            <Link className="Nav-link" to="/planets"><div>Planets</div></Link>
            <Link className="Nav-link" to="/species"><div>Species</div></Link>
            <Link className="Nav-link" to="/starships"><div>Starships</div></Link>
            <Link className="Nav-link" to="/vehicles"><div>Vehicles</div></Link>


        </div>
    )
}