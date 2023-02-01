import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import {FaPlay} from 'react-icons/fa'
import {GrCircleInformation} from 'react-icons/gr'
import { useRecoilState } from 'recoil'


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
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className='absolute top-0 left-0 -z-[10] h-[95vh] w-screen'>
                <Image
                layout="fill" 
                src={`${baseUrl}${movie?.backdrop_path}`} 
                alt=''
                objectFit='cover'
                />
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-slate-200">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className=" max-w-xl text-justify text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-slate-200">
                {movie?.overview}
            </p>
            <div className="flex space-x-3">
                <button className="flex bannerButton cursor-pointer gap-x-2 rounded px-2 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-6 md:text-xl bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-5 md:w-5" />
                        Play
                </button>
                <button
                    className="flex bannerButton cursor-pointer gap-x-2 rounded px-2 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-6 md:text-xl bg-[gray]/70"
                    onClick={() => {
                    }}>
                    <GrCircleInformation className="h-4 w-4 md:h-6 md:w-6" /> More Info
                </button>
            </div>
        </div>
    )
}