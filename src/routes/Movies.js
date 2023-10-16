import React, {useEffect} from "react";
import {gql, useApolloClient, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";


const GET_MOVIES = gql`
    query AllMovies {
        allMovies {
            title
            id
        }
        allTweets {
            id
            auther {
                fullName
            }
        }
    }
`;



const Movies = () => {
    const {data, loading, error} = useQuery(GET_MOVIES);
    console.log(data);

    if(loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error.message}</h1>;
    }
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {data.allMovies.map(movie =>
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                )}
            </ul>


        </div>
    )
}

export default Movies;