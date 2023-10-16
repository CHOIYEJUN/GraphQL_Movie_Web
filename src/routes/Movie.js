import Movies from "./Movies";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

const GET_MOVIE = gql`
    query Query($movieId: String!) {
        movie(id: $movieId) {
            id
            title
            year
            medium_cover_image
        }
    }
`;

const Movie = () => {
    const {Id} = useParams();
    const {data, loading, error} = useQuery(GET_MOVIE, {
        variables : {
            movieId: Id,
        },

    });
    console.log(Id);
    if(loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{data.movie.title}</h1>
            <h2>{data.movie.year}</h2>
            <img src={data.movie.medium_cover_image} alt={data.movie.title} />

        </div>
    );

}

export default Movie;