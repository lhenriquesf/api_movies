import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData ] = useState({});

    async function singIn({email, password}){

        try{
            const response = await api.post("/sessions", {email, password});

            const {user, token} = response.data;

            localStorage.setItem("@apimovies:user", JSON.stringify(user));
            localStorage.setItem("@apimovies:token", JSON.stringify);

            api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

            setData({user, token});
            console.log('PQ')
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Nao foi possível entrar!!!");
            }
        }
    }

    return(
        <AuthContext.Provider value={{
            singIn,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth,
};