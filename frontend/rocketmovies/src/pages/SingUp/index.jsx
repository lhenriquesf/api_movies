import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi";
import { Link } from "react-router-dom";

import { api }  from "../../services/api";
import { useState } from "react";


export function SingUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSingUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!!!");
        }

        api.post("/users", {name, email, password})
        .then(()=>{
            alert("Usuário cadastrado com sucesso!");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Nao foi possível cadastrar usuário");
            }
        })
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                <section>
                    <Input
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        onChange={e => setName(e.target.value)}
                    />

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

                <Button title='Cadastrar' onClick={handleSingUp}></Button>

                <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
            </Form>

            <Background/>
        </Container>
    );
}