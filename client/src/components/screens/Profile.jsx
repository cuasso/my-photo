import React from 'react'

const Profile = () => {
    return (
        <div style={{
            maxWidth:'500px',
            margin:'0px auto'
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
                    <h4>Son Goku</h4>
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
                <img className='item' src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
                <img className='item' src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
                <img className='item' src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
                <img className='item' src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
                <img className='item' src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
                <img className='item' src='https://es.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png' />
            </div>
        </div>
    )
}

export default Profile