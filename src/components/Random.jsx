import axios from "axios"
import { useState, useEffect } from "react"
import "./random.css"
const baseUrl = "https://randomuser.me/api/"

const Random = () => {
  const [getUser, setGetUSer] = useState()
  
    useEffect(() => {
      axios.get(baseUrl).then((response) =>{
          setGetUSer(response.data.results)
          console.log(response);
        })
    }, [])
    const UserGenerate = () =>{
      window.location.reload(false);
    }
      
    // console.log(getUser);
    
  return (
    <div>
      {
        getUser?.map((e) => {
          console.log(e);
          return(
            <div className="card">
              <div>
              <img src={e.picture.large} alt="" />
              </div>
              <div>
                <p>{e.name.title} {e.name.first} {e.name.last}</p>
                <p>{e.email}</p>
                <p>e.phone</p>
                <p>{e.location.state} - {e.location.country}</p>
                <p>{e.dob.age}</p>
                <p>{e.registered.date}</p>
              </div>
            </div>
          )
        })
      }
      <button onClick={UserGenerate}>Create User</button>
    </div>
  )
}

export default Random