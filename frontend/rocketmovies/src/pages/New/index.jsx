import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { InputNew } from "../../components/InputNew";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Link } from "react-router-dom";


import { FiArrowLeft } from "react-icons/fi";

export function New(){
    return(
        <Container>
            <Header/>

            <Form>
                <Link to="/"> <FiArrowLeft/> Voltar</Link>
                <h1>Novo Filme</h1>

                <main>
                    <InputNew
                        placeholder="Título"
                        type="text"
                    />

                    <InputNew
                        placeholder="Sua nota (de 0 a 5)"
                        type="number"
                        min="1" max="5"
                    />
                </main>

                <TextArea placeholder="Observações"></TextArea>

                <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder='Novo marcador' />
                        </div>
                </Section>

                <main>
                    <button className="btn-delete">Excluir filme</button>
                    <button className="btn-add">Salvar alterações</button>
                </main>
            </Form>
        </Container>
    );
}