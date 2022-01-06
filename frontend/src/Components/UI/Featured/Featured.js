import {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Featured (){

    const [featured, setFeatured] = useState(null);

    useEffect(() => {

        fetch('https://api.rawg.io/api/games?key=861a152985204757af184092258bd14a&dates=2021-01-01,2021-12-30')
        .then(response => response.json())
        .then((data) =>{
            // console.log(data.results.slice(0,4));
            setFeatured(data.results.slice(0,4));
        });
    }, []);


    return (
        <div className='container'>
            <div className='row'>
                {featured && featured.map((el) =>{
                    return  (<div key={el.id} className='col-12 col-lg-3'>
                                <div className="card bg-transparent">
                                    <img src={el.background_image} className="card-img-top" />
                                    <div className="card-body">
                                        <Link to={`/game/${el.slug}`}className="card-title">{el.name}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}