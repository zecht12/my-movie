import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props {
    netflixOriginals: Movie[]
    }

export default function Banner ({  netflixOriginals}: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])

    console.log(movie)

    return (
        <div>
            <div className=' absolute top-0 left-0'>
                <Image layout="fill" src={`${baseUrl}${movie?.backdrop_path}`}
                width={100%}
                height={100%}/>
            </div>
        </div>
    )
}