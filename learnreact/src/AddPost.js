import React from 'react'

function AddPost({topic,setTopic,handleSubmit}) {
    return (
        <div>
            <h1>AddPost</h1>
            <form>
                <label>New Topic : </label>
                <input type='text' value={topic} />
                <button type='submit'>Add Data</button>
            </form>

        </div>
    )
}

export default AddPost
