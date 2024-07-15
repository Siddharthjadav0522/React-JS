import React from 'react'
import { app } from '../firebase'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'


function FirestoreDB() {
    const firestore = getFirestore(app);

    const AddData = async () => {
        await addDoc(collection(firestore, 'Cities'), {
            name: "surat",
            pincode: 352462
        })
    };

    const AddSubData = async () => {
        const docRef = doc(firestore, 'Cities', "PBeGrT6uhX4HpALbussx"); 
        await addDoc(collection(docRef, "SubCollection"), {
            sector: 7,
        })

    }
    const UpdateData =  async () => {
        const docRef = doc(firestore, 'Cities', 'PBeGrT6uhX4HpALbussx')
        const docRef1 = doc(docRef, "SubCollection", 'KTuO0SyzBysgPDBcFjRr')
        await updateDoc(docRef1, {
            sector: 5
        })
    }

    return (
        <>
            <h1>FireStore</h1>
            <button onClick={AddData}>Add Data</button>
            <button onClick={AddSubData}>AddSubData</button>
            <button onClick={UpdateData}>UpdateData</button>

        </>
    )
}

export default FirestoreDB
