import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../constants/constants'
import axios from '../../axios'
function RowPost(props) {
    const  [movies, setMovies] = useState([])
    const [Urlid,setUrlid] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
    }
    const handleMovie =(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length !== 0){
                setUrlid(response.data.results[0])
            }else{
                console.log('Trailer not Available');

            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'}  src={`${imageUrl + obj.backdrop_path}`} alt="poster" />

            )}
           
        </div>
        {Urlid && <Youtube opts={opts} videoId={Urlid.key}/> }
    </div>
  )
}

export default RowPost