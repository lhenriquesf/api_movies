import { Container } from "./styles";

export function Input({icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20} />} {/* Mostra o icone somente se existir */ }

            <input {...rest} />
        </Container>
    )
};