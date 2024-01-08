import { useEffect, useState } from 'react'
import { MovieService } from './../../api/MoviesService';
import MovieCard from '../../components/MovieCard/MovieCard.jsx';

const Home = () => {
    const [movies, setMovies] = useState([])
    
    async function getMovies(){
        const {data: {results}} = await MovieService.getMovies();
    
        setMovies(results);
    }
    useEffect(() =>{
        getMovies();
        
    },[]);

    useEffect(() =>{
        console.log(movies)
        
    });

    return (
        <section className='Home' >
            {
                movies.map(({movie}) => (
                    <div key={movie.id}> 
                        <MovieCard movieProp={movie}/>                   
                    </div>
                ))
            }
        </section>
    );
};

export default Home;
