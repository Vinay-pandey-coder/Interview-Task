import React, { useEffect, useState } from 'react'
import Input from './component/Input'

const App = () => {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const result = await res.json()
        setData(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  const filteredData = data.filter(item=>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      <Input search={search} setSearch={setSearch}/>
      {
        filteredData.map((item)=>(
          <div key={item.id}>{item.title}</div>
        ))
      }
    </div>
  )
}

export default App