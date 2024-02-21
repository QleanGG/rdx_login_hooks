import {jwtDecode} from 'jwt-decode';
export const useSaveAndDecode = () => {
    function saveTokenInLocal(accessToken) {
        localStorage.setItem('accessToken',accessToken);
    }
    function getTokenInLocal() {
        return localStorage.getItem('accessToken');
    }
    function decodeToken(token) {
        const tokenDecoded = jwtDecode(token)
        const username = tokenDecoded.username;
        const email = tokenDecoded.email;
        return {username,email}
    }

    return {decodeToken,saveTokenInLocal,getTokenInLocal}
    
}