import React from 'react'
import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'

export default function Lista() {
    let apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10'
    const [list, setList] = useState([])

    useEffect( () => {
        const pedidoApi = () => {

            axios.get(apiUrl).then((response) => {
              setList(response.data)

            })
            .catch((error) => {
              console.warn(error)
            })
        }

        pedidoApi()

    }, [])

    



  return (
    <div className='apiGatitos'>
        <h1>Lista</h1>
        <ul>
          {
            list.map((item, index) =>(
              <div key={item.id}>
                <li><h2>Gatito {index+1}</h2></li>
                <li><img src={item.url} alt="" width={item.width} height={item.height}/></li>
              </div>

            ))
          }
        </ul>
        
    </div>
  )
}
