import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi";
import { Link } from "react-router-dom";



export function SingUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assitir</p>

                <h2>Crie sua conta</h2>

                <section>
                    <Input
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                    />

                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                    />

                    <Input
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                    />
                </section>

                <Button title='Cadastrar' ></Button>

                <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
            </Form>

            <Background/>
        </Container>
    );
}