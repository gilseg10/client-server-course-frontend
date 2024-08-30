// -------------- Users End Points --------------

const users_route = "https://client-server-backend-4a2i.onrender.com/users"

const login_send = async (user_info) => {
    try {
        const resp = await fetch(users_route + '/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_info)
        })
        const data = await resp.json()
        return data
    } catch (e) {
        console.log(e.message)
    }
}

const signup_send = async (user_info) => {
    try {
        const resp = await fetch(users_route + '/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_info)
        })
        const data = await resp.json()
        return data
    } catch (e) {
        console.log(e.message)
    }
}

// verify user auth in server 
const verify_user = async (token) => {
    try {
        const resp = await fetch(users_route + '/auth', {
            method: "GET",
            headers: { "x-access-token": token }
        })
        const data = await resp.json()
        return data
    } catch (e) {
        console.log(e.message)
    }
}

// -------------- Coins End Points --------------

import axios from 'axios'
const COINS_URL = 'https://client-server-backend-4a2i.onrender.com/coins'

const getAllCoinsFromServer = async () => {
    const { data } = await axios.get(COINS_URL)
    return data

    // data.formatCoins)
    //   setCoinsAmount(data.formatCoins.length)
    //   setTotalMarketCap(data.formatTotalMC)
}


// -------------- Contacts End Points --------------

const contact_route = "https://client-server-backend-4a2i.onrender.com/contacts"

const contact_send = async (contact) => {
    try {
        const resp = await fetch(contact_route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(e.message)
    }
} 


export { 
    login_send,
    signup_send,
    verify_user,
    getAllCoinsFromServer, 
    contact_send 
}