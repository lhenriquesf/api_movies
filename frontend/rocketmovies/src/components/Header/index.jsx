import { Container, Profile, Logout, Brand } from "./styles";
import { Input } from "../Input";

export function Header(){
    return(
        <Container>
            <Brand>RocketMovies</Brand>

            <Input placeholder="Pesquisar pelo titulo"/>

            <Profile>
                <div>
                    <strong>Luiz Henrique</strong>
                    <Logout>sair</Logout>
                </div>

                <img src="https://github.com/lhenriquesf.png" alt="Foto do usuario"/>
            </Profile>
        </Container>
    )
}
