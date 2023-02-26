import React, { useState } from 'react'

export const TwitterFollowCard = ({children,userName,name,initialIsFollowing}) => {
    const urlImg = `https://unavatar.io/${userName}`

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo':'Seguir'
    const btnClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClic = () => {
        setIsFollowing(!isFollowing)
    }
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                src={urlImg} 
                alt='logo github' />
            <div className='tw-followCard-info'>
                {children}
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button 
                className={btnClassName}
                onClick={handleClic}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}
