import React, { useEffect, useState } from 'react'
import './trending.scss'
import axios from 'axios'
import Row from '../row/Row'


export default function Trending() {

    const [data, setData] = useState([])

    // useEffect(()=>{
    //     const fetchUserData = () => {
    //         fetch("https://api.steampowered.com/ISteamApps/GetAppList/v2/",{
    //             mode: 'no-cors',
    //             method: 'GET'
    //         })
    //         //   .then(response => {
    //         //     return response.json()
    //         //   })
    //           .then(data => {
    //             setData(data)
    //           })
    //       }
    //     fetchUserData()
    // },[])

    useEffect(()=>{
        const fetchData = () => {
            return axios.get("https://jsonplaceholder.typicode.com/users")
                  .then((response) => setData(response.data));
          }

          fetchData()
    },[])

    data.map((element)=>console.log(element.username))

  return (
    <div className='trending'>
      <div className="container">
        <h2>Trending</h2>
        {data.map((element)=>(
            <Row username = {element.username}
            name = {element.name}
            email = {element.email}/>
        ))}
      </div>
    </div>
  )
}
