import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export const App = () => {

  const users = [
    {
      userName:'github',
      name:'Diego Santiago Medina',
      isFollowing:true,
    },
    {
      userName:'hola',
      name:'Diego Medina',
      isFollowing:false,
    },
    {
      userName:'rocket',
      name:'Roberto Roke',
      isFollowing:true,
    },
  ]

  return (
    <section className='App'>
        {
          users.map(user => {
            const {userName,name,isFollowing} = user
            return(
              <TwitterFollowCard 
                key={userName} 
                initialIsFollowing={isFollowing} 
                userName={userName}>
                  {name}
              </TwitterFollowCard>
            )
          })
        }
    </section>
  )
}
