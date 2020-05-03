import React from 'react'

const CreatePost = () => {
    return (
        <div className='card input-filed' 
        style={{
            margin:'30px auto',
            maxWidth:'500px',
            padding:'20px',
            textAlign:'center'
        }}>
            <input type='text' placeholder='title' />
            <input type='text' placeholder='body' />
            <div class="file-field input-field">
                <div class="btn">
                    <span>Upload image</span>
                    <input type="file" />
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" />
                </div>
            </div>
            <button className='btn waves-effect waves-light'>
                    Post
                </button>
        </div>
    )
}

export default CreatePost