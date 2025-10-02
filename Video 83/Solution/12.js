// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token) {
    let date = new Date() ;
    const item = {
        token : token ,
        expiry : date.getTime() + 6 * 30 * 24 * 60 * 60 * 1000 
    }
    localStorage.setItem("auth",JSON.stringify(item)) ;
}