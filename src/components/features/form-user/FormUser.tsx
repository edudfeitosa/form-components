import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

import Input from "@/components/partials/input/Input.tsx";
import Button from "@/components/partials/button/Button.tsx";
import Alerts from "@/components/partials/alerts/Alerts.tsx";

const FormUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formValidation = {
        nome: {
            required: "Você precisa informar um nome"
        },
        endereco: {
            required: "Você precisa informar um endereço"
        }
    }

    function onSubmit(data: object) {
        console.log(data);
    }

    return (
        <>
            <p>Demonstração de validação de form em itens componentizados</p>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Input
                    label="Informe seu nome"
                    placeholder="Digite aqui seu nome"
                    {...register("nome", formValidation.nome)}
                />
                <ErrorMessage
                    errors={errors}
                    name="nome"
                    render={({ message }) => <Alerts type="error">{message}</Alerts>}
                />
                <Input
                    label="Informe seu endereço"
                    placeholder="Digite aqui seu endereço"
                    {...register("endereco", formValidation.endereco)}
                />
                <ErrorMessage
                    errors={errors}
                    name="endereco"
                    render={({ message }) => <Alerts type="error">{message}</Alerts>}
                />
                <Button type="submit">
                    Salvar
                </Button>
            </form>
        </>
    );
};

export default FormUser;