import axios from "axios"
import { useState, useEffect } from "react"
import "./random.css"
import Mail from "../assets/email.svg"
import Phone from "../assets//phone.svg"
import Location from "../assets/location.svg"

const baseUrl = "https://randomuser.me/api/"

const Random = () => {
  const [getUser, setGetUSer] = useState()
  const [change, setChange] = useState(0)
  
    useEffect(() => {
      axios.get(baseUrl).then((response) =>{
          setGetUSer(response.data.results)
        })
    }, [change])

    const UserGenerate = () =>{
      setChange(change + 1)
    }
    
  return (
    <div className="container">
      
      {
        getUser?.map((e,i) => {
          console.log(e);
          return(
            <div className="card" key={i}>
              <div className="img-container">
              <img className="img" src={e.picture.large} alt="" />
              <img className="icons" src={Mail} alt="" />
              <img className="icons" src={Phone} alt="" />
              <img className="icons" src={Location} alt="" />
              </div>
              <div>
                <p>{e.name.title} {e.name.first} {e.name.last}</p>
                <p>{e.email}</p>
                <p>{e.phone}</p>
                <p>{e.location.state} - {e.location.country}</p>
                <p>{e.dob.age}</p>
                <p>{e.registered.date}</p>
              </div>
            </div>
          )
        })
      }
      <button className="btn" onClick={UserGenerate}>Create User</button>
    </div>
  )
}

export default Random