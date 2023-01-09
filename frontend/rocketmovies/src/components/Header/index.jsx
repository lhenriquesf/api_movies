import { Container, Profile, Logout, Brand } from "./styles";
import { InputSearch } from "../InputSearch";

export function Header(){
    return(
        <Container>
            <Brand>RocketMovies</Brand>

            <InputSearch placeholder="Pesquisar pelo titulo"/>

            <Profile to="/profile" >
                <div>
                    <strong>Luiz Henrique</strong>
                    <Logout>sair</Logout>
                </div>

                <img src="https://github.com/lhenriquesf.png" alt="Foto do usuario"/>
            </Profile>
        </Container>
    )
}
