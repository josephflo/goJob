import { useState, useEffect  } from 'react'
import { useSelector } from 'react-redux'

const useUserLogin = () => {
    const [userInfo, setUserInfo] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const {token,userLogin} = useSelector((state) => state);

    const localStorage = window.localStorage.getItem("userStorage")
    useEffect(() => {
        if(localStorage){
            setUserInfo(JSON.parse(localStorage))
            setIsLogin(true)
        }
        if(token?.length && !localStorage && userLogin){
            window.localStorage.setItem("userStorage", JSON.stringify(userLogin))
        }
        if(!token?.length && !localStorage && !userLogin){
            setIsLogin(false)
        }
      }, [localStorage,token]);

  return {
    userInfo,isLogin
  }
}

export default useUserLogin
