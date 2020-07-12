import React, { useEffect, useState, useContext } from 'react'
import { userContext, UserContext } from '../../App'
import { useParams } from 'react-router-dom'
const UserProfile = () => {
    const [userProfile, setProfile] = useState(null)
    const [showfollow, setshowfollow] = useState(true)
    const { state, dispatch } = useContext(UserContext)
    const { userid } = useParams()

    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(res => res.json())
            .then(result => {
                setProfile(result)
            })
    }, [])

    const followUser = () => {
        fetch('/follow', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                followId: userid
            })
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem('user', JSON.stringify({ data }))
                setProfile((prevState) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: [...prevState.user.followers, data._id]
                        }
                    }
                })
                setshowfollow(false)
                
                dispatch({
                    type: 'UPDATE',
                    payload: {
                        following: data.following,
                        followers: data.followers
                    }
                })
            })
    }

    const unfollowUser = () => {
        fetch('/unfollow', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                followId: userid
            })
        }).then(res => res.json())
            .then(data => {

                dispatch({
                    type: 'UPDATE',
                    payload: {
                        followers: data.followers,
                        following: data.following
                    }
                })
                localStorage.setItem('user', JSON.stringify({ data }))
                setProfile((prevState) => {
                    const newFollower = prevState.user.filter(item => item !== data._id)
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: newFollower

                        }
                    }
                })
                setshowfollow(true)
            })
    }

    return (
        <>
            {
                userProfile ?
                    <div style={{
                        maxWidth: '700px',
                        margin: '0px auto'
                    }
                    } >
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
                                <h4>{userProfile.user.name}</h4>
                                <h4>{userProfile.user.email}</h4>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    width: '108%'
                                }}>
                                    <h5>{userProfile.posts.length} post</h5>
                                    <h5>{userProfile.user.followers.length} followers</h5>
                                    <h5>{userProfile.user.following.length} following</h5>
                                </div>
                                {showfollow ?
                                    <button style={{ margin: "10px" }} className='btn waves-effect waves-light'
                                        onClick={() => followUser()}
                                    >
                                        Follow
                                    </button>
                                    : <button style={{ margin: "10px" }} className='btn waves-effect waves-light'
                                        onClick={() => unfollowUser()}
                                    >
                                        Unfollow
                                    </button>
                                }
                            </div>
                        </div>
                        <div className='gallery'>
                            {
                                userProfile.posts.map(item => {
                                    return (
                                        <img key={item._id} className='item' src={item.photo} alt={item.title} />
                                    )
                                })
                            }
                        </div>
                    </div >
                    : <h2>loading...!</h2>
            }
        </>
    )
}

export default UserProfile