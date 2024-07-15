import React from 'react'
import { app } from '../firebase'
import { useState } from 'react'
import { getDatabase, set, ref } from 'firebase/database'

function Realtimedb() {
    const db = getDatabase(app)
    const handleData = () => {
        set(ref(db, "user"), {
            username: "sid",
            password: 123,
        })
    }

    const saveData = (name, id) => {
        set(ref(db, "user1"), {
            name: name,
            id: id,
        })
    }

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        set(ref(db, "Student/Age"), {
            name: name,
            age: age,
        });
        e.target.reset();
    };

    return (
        <>
            <h2>firebase demo</h2>
            <button onClick={handleData}>click me</button>
            <button onClick={() => saveData("raj", 201)}>save data</button> <br /><br />

            <form onSubmit={formSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter Name' 
                    onChange={(e) => setName(e.target.value)} /><br /><br />


                <input 
                    type="number" 
                    placeholder='Enter Age' 
                    onChange={(e) => setAge(e.target.value)} /><br /><br />

                <button>Submit</button>
            </form>

        </>
    )
}

export default Realtimedb
