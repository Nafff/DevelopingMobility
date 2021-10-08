import React from 'react'

export default function UserProfile(props) {
  console.log(props.currentUser)
  return (
    <div>
      <h1>{props.currentUser.username}</h1>
    </div>
  )
}
