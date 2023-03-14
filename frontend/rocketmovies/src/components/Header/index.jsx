import { Container, Profile, Logout, Brand } from "./styles";
import { InputSearch } from "../InputSearch";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){

    const { singOut, user } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Brand>RocketMovies</Brand>

            <InputSearch placeholder="Pesquisar pelo titulo"/>

            <div className="min-header">
                <Profile to="/profile" >
                    <div>
                        <strong>{user.name}</strong>
                    </div>

                    <img src={avatarURL} alt={user.name}/>
                </Profile>
                <Logout onClick={singOut}>sair</Logout>
            </div>
        </Container>
    )
}
