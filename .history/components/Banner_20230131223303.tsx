import React, { useEffect, useState } from 'react'
import { Movie } from '../typings'

interface Props {
    netflixOriginals: Movie[]
    }

export default function Banner ({  netflixOriginals}: Props) {
    const [movie, setMovie] = useState
    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])
    return (
        <div>Banner</div>
    )
}