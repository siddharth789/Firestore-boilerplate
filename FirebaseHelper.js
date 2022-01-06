import db from "./Firebase";
import { addDoc, collection, getDocs} from "firebase/firestore";

export async function addNewUser(userData) {
    const usersCollection = collection(db, "users")
    const newDoc = await addDoc(usersCollection, userData)
    if(newDoc) {
        return true
    }
    return false
}

export async function getAllUsers() {
    const usersSnapshot  = await getDocs(collection(db, "users"))
    const users = usersSnapshot.docs.map((doc) => doc.data())
    return users
}
