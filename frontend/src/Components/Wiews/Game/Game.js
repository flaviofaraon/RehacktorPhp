import { Link, useParams } from "react-router-dom"
import { useState , useEffect } from "react";

export default function Game(){

    let {slug} = useParams();

    const [game, setGame] = useState(null);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${slug}?key=861a152985204757af184092258bd14a`)
        .then(response => response.json())
        .then(data => {
            setGame(data);
        })
    }, [])

    return <>

    {       
        game &&(
            <div className="container-fluid min-vh-100 pt-5" style={{
                background : ` linear-gradient(90deg, rgba(1,0,13,1) 7%, rgba(134,134,134,0) 35%, rgba(250,250,250,0) 65%, rgba(0,0,0,1) 93%) , url(${game.background_image})`,
                backgroundRepeat : `no/repeat`,
                backgroundPosition: `center`,
                backgroundSize: `cover`
                }}>

                <div className="container mt-5" >
                    <div className="row">
                        <div className="col-12 col-md-4  ">
                            <h4 >Sviluppado da :</h4>
                            <h2 className="fw-bolder">{game.developers[0].name}</h2>
                            <h4 className="mt-5">Categorie :</h4>
                            {game.genres
                                .map((el) => (
                                    <Link key={el.id} to={`/search/${el.slug}`}><span class="badge rounded-pill bg-dark m-1 fs-6">{el.name}</span></Link>
                            ))}
                        </div>
                        <div className="col-12 col-lg-4 offset-4">
                            <h1>{game.name}</h1>
                            <p>{game.description_raw.substring(0,600)+" ..."}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    </>

}