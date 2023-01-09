import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";



export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assitir</p>

                <h2>Faça seu login</h2>

                <section>
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

                <Button title='Entrar' ></Button>

                <Link to="/register"> Criar conta</Link>
            </Form>

            <Background/>
        </Container>
    );
}