import {React, useEffect, useState, useContext} from 'react'
import {UserContext } from "../../App"

const Profile = () => {
  const [mypics, setPics] = useState([])
  const {state} = useContext(UserContext)
  useEffect(() => {
    fetch('/mypost', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then(res => res.json())
    .then(result => {
      setPics(result.mypost)
      console.log(result)
    })
  }, [])
  return (
    <div style={{
      maxWidth: '650px',
      margin: '0px auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '18px 0px',
        borderBottom: '1px solid grey'
      }}>
        <div>
          <img style={{width: '160px', height: '160px', borderRadius: '80px'}}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8" alt='1'/>
        </div>
        <div>
          <h4>{state?state.name:"loading"}</h4>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '108%'}}>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {
          mypics.map(item => {
            return (
              <img key={item._id} className="item" src={item.photo} alt={item.title}/>
            )
          })
        }
       </div>
    </div>
  )
}

export default Profile
