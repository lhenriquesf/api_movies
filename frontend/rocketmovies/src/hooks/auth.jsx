import { createContext, useContext, useState, useEffect } from "react";
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
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Nao foi possível entrar!!!");
            }
        }
    }

    async function singOut(){
        localStorage.removeItem("@apimovies:token");
        localStorage.removeItem("@apimovies:user");

        setData({});
    }

    async function updateProfile({user, avatarFile}){
        try{
            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);

            localStorage.setItem("@apimovies:user", JSON.stringify(user));

            setData({user, token: data.token});
            alert("Perfil atualizado!!!");

        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Nao foi possível atualizar o perfil!!!");
            }
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("@apimovies:token");
        const user = localStorage.getItem("@apimovies:user");

        if(token && user){
            api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }


    }, []);

    return(
        <AuthContext.Provider value={{
            singIn,
            singOut,
            updateProfile,
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