import React from 'react'
interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
  }

export default function Banner ({  netflixOriginals}: Props) {
  return (
    <div>Banner</div>
  )
}