import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { InputNew } from "../../components/InputNew";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import {Button} from "../../components/Button";


export function New(){

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });

        console.log("CERTOOO")
        alert("Nota criada com sucesso!!!");
    }

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
                        onChange={e => setTitle(e.target.value)}
                    />

                    <InputNew
                        placeholder="Sua nota (de 0 a 5)"
                        type="number"
                        min="1" max="5"
                        onChange={e => setRating(e.target.value)}
                    />
                </main>

                <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                >
                </TextArea>

                <Section title="Marcadores">
                        <div className="tags">
                            {   
                                tags.map((tag, index)=>(
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={()=>handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder='Novo marcador'
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                </Section>

                <main>
                    {/* <button className="btn-delete">Excluir filme</button>
                    <button className="btn-add" >Salvar alterações</button> */}
                    <Button title="Excluir filme" className="btn-delete"></Button>
                    <Button title="Salvar alterações" className="btn-add" onClick={handleNewNote}></Button>
                </main>
            </Form>
        </Container>
    );
}