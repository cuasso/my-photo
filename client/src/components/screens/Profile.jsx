import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
const Profile = () => {
    const [pics, setPics] = useState([])
    const { state, dispatch } = useContext(UserContext)

    useEffect(() => {
        fetch('/mypost', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.myposts)
            })
    }, [])

    return (
        <div style={{
            maxWidth: '700px',
            margin: '0px auto'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '18px 0px',
                borderBottom: '1px solid grey'
            }}>
                <div>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                        src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
                </div>
                <div>
                    <h4>{state ? state.name : 'loading'}</h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '108%'
                    }}>
                        <h5>40 post</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                {
                    pics.map(item => {
                        return (
                            <img key={item._id} className='item' src={item.photo} alt={item.title} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile