import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    updateDoc,
} from "firebase/firestore";

function FormFireStore() {
    const fireStore = getFirestore(app);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        await addDoc(collection(fireStore, "Users"), {
            name: name,
            email: email,
        });
        e.target.reset();
        fetchUser();
    };

    const fetchUser = async () => {
        const snapshot = await getDocs(collection(fireStore, "Users"));
        const userUser = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setUser(userUser);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(fireStore, "Users", id));
        setUser(user.filter((user) => user.id !== id));
    };

    const handleUpdate = async (id, newName, newEmail) => {
        await updateDoc(doc(fireStore, "Users", id), {
            name: newName,
            email: newEmail,
        });

        const updatedUser = user.map((user) => {
            if (user.id === id) {
                return { id, name: newName, email: newEmail };
            } else {
                return user;
            }
        });

        setUser(updatedUser);
    };

    return (
        <>
            <h1>Fire Store</h1>
            <br />
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <button className="btn btn-primary">Submit</button>
            </form>

            <table className="table table-hover mt-5">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    className="btn btn-danger me-3"
                                    onClick={() => {
                                        handleDelete(user.id);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-success"
                                    onClick={() => {
                                        const newName = prompt("Enter New Name", user.name);
                                        const newEmail = prompt("Enter New Email", user.email);
                                        if (newName && newEmail) {
                                            handleUpdate(user.id, newName, newEmail);
                                        }
                                    }}
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default FormFireStore;
