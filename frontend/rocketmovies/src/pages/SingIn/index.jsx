import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function SingIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { singIn } = useAuth();

    function handleSingIn(){
        singIn({email, password});
    }

    function handleKeyPress(event) {
        if(event.key === "Enter"){
            handleSingIn()
        }
      }
    
    return(
        <Container>
            <Form onKeyPress={handleKeyPress}>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Faça seu login</h2>

                <section>
                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                        onChange={e => setPassword(e.target.value)}
                    />
                </section>

                <Button title="Entrar" onClick={handleSingIn}/>

                <Link to="/register"> Criar conta</Link>
            </Form>

            <Background/>
        </Container>
    );
}