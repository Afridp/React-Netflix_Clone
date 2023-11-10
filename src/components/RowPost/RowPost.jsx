/* eslint-disable react/prop-types */
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'
import { useEffect, useState } from 'react'
import { imageUrl, API_KEY } from '../../constants/constants'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            if (response.data.results.length !== 0) {
                setVideoUrl(response.data.results[0])
            } else {
                console.log("data not found show a error page ");
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie) =>
                    <img onClick={()=> handleMovie(movie.id)} key={movie} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="" />
                )}
            </div>
            { videoUrl && <Youtube videoId={videoUrl.key} opts={opts} />}
        </div>


    )
}

export default RowPost                      