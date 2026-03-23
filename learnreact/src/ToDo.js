import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
function ToDo({ data, handleChange, handleDelete }) {


    return (
        <div>
            <h1>ToDo</h1>
            {
                data.map((obj) =>
                    <li key={obj.id}>
                        <b>{obj.topic}</b>
                        <input type='checkbox'
                            checked={obj.status}
                            onChange={() => { handleChange(obj.id) }}
                        />
                        <button onClick={() => handleDelete(obj.id)} >
                            <FaRegTrashAlt /> Delete
                        </button>
                    </li>
                )
            }
        </div>
    )
}

export default ToDo