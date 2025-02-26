import React,{useEffect,useState} from 'react';
import AxiosInstance  from '../../api/AxiosInstance';

import PeopleCard from './PeopleCard';

export default function People() {
  const [PeopleMovies, setPeopleMovies] =useState([]);
  useEffect(()=>{
    AxiosInstance.get('trending/person/day?language=en-US')
    .then((resp)=>setPeopleMovies (resp.data.results))
    .catch((error) => console.error("Error fetching popular movies:", error));
  },[]);

  return <>
 <PeopleCard items={PeopleMovies} />
  </>
}
