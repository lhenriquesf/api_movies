import { Container, Profile, Logout, Brand } from "./styles";
import { InputSearch } from "../InputSearch";

export function Header(){
    return(
        <Container>
            <Brand>RocketMovies</Brand>

            <InputSearch placeholder="Pesquisar pelo titulo"/>

            <div className="min-header">
                <Profile to="/profile" >
                    <div>
                        <strong>Luiz Henrique</strong>
                    </div>

                    <img src="https://github.com/lhenriquesf.png" alt="Foto do usuário"/>
                </Profile>
                <Logout>sair</Logout>
            </div>
        </Container>
    )
}
