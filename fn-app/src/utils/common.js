export const getUserCookie = () => {
    console.log("getUserCookie")
    const userStr = document.cookie.split('=')[1]
    if(userStr) return userStr
    else return null
    // const userStr = sessionStorage.getItem('user')
    // if(userStr) return JSON.parse(userStr)
    // else return null
}

export const removeUserCookie = () => {
    console.log("removeUserCookie")
    document.cookie = ''
    // sessionStorage.removeItem('user')
}

export const setUserCookie = (user) => {
    console.log("setUserCookie user", user)
    // sessionStorage.setItem('user', JSON.stringify(user))
}