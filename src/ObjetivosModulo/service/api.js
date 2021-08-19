import axios from "axios";

const API = `http://192.168.0.21:3000/objetive`;

export const getObjetive = async () => {
    const res = await fetch(API)
    return await res.json()
        
};

export const getObjeti = async (id) => {
    let res = await axios.get(API + '/' + id );
    return res.data;        
}

export const updateObjetive = async (id, newObj) => {
    let res = await axios.update(API + '/' + id );
    return res.data;        
}

export const saveObjetive = async(newObjetive) => {
    axios.post(API, newObjetive)
        .then(res => console.log(res.data))
};

export const deleteObjetive = async (id) => {
    console.log(id)
    axios.delete(API + '/' + id )
        .then(res => console.log(res.data))
}

