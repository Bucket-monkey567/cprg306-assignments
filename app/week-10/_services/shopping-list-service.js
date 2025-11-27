import {db} from "../_utils/firebase";
import {collection, getDocs, addDoc, query} from "firebase/firestore";

const getItems = async (userId) => {
    const q = query(
        collection(db, "users", userId, "items")
    );
    const docSnap = await getDocs(q);

    let items = [];
    docSnap.forEach((doc) => {
        items.push([doc.id, doc.data()]);
    })
    return items;
}

const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
}

export {getItems, addItem};