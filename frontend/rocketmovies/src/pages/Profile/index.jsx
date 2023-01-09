import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/" ><FiArrowLeft/> Voltar</Link>
            </header>

            <Avatar>
                    <img src="https://github.com/lhenriquesf.png" alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"    
                        />
                    </label>
            </Avatar>

            <Form>
                <Input type="text" placeholder="Usuario" icon={FiUser} />
                <Input type="text" placeholder="E-mail" icon={FiMail} />

                <Input type="text" placeholder="Senha antiga" icon={FiLock} />
                <Input type="text" placeholder="Nova senha" icon={FiLock} />

                <Button title='Salvar'></Button>
            </Form>
        </Container>
    )
}