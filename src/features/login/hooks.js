import { useEffect } from 'react';
import {changeLoggedStatus, fillUserInfo, selectAccessToken,selectLoggedIn,selectUsername,selectEmail} from './loginSlice';
import { useSelector,useDispatch } from 'react-redux';
import {useSaveAndDecode} from './useSaveAndDecode'

export const useOnLogin = () => {
    const {getTokenInLocal,decodeToken,saveTokenInLocal} = useSaveAndDecode()
    const accessToken = useSelector(selectAccessToken);
    const loggedInStatus = useSelector(selectLoggedIn);
    const username = useSelector(selectUsername);
    const email = useSelector(selectEmail);
    const dispatch = useDispatch();
    function handleAccessToken() {
        dispatch(changeLoggedStatus())
        const {username,email} = decodeToken(accessToken);
        saveTokenInLocal(accessToken);
        dispatch(fillUserInfo({username,email}));

    }
    
    useEffect(() => {
      if (!accessToken) {
        return
      }
      if (loggedInStatus) {
        return
      }
      handleAccessToken();
    }, [accessToken])
    return {username,email}
} 

