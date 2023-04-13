import React from 'react'

 const ProfilePhoto = (props) => {
  return (
    <div>
        <img src='Myself.jpg' alt='Profile photo' className='photos'/> 
        <button onClick={() =>  props.ProfilePhoto('ahmed sallami')      }> 
        click here </button>
        </div>
  )
}
export default ProfilePhoto