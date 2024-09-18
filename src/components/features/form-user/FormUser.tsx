import Input from "@/components/partials/input/Input.tsx";
import Button from "@/components/partials/button/Button.tsx";

const FormUser = () => {

    function clickButton() {
        console.log('Funcionou');
    }

    return (
        <>
            <p>Demonstração de validação de form em itens componentizados</p>
            <Input
                label="Digite aqui"
                placeholder="Digite aqui"
            />
            <Input
                label="Digite aqui"
                placeholder="Digite aqui"
            />
            <Button
                title="Adicione o título"
                onClick={() => clickButton()}
            />
        </>
    );
};

export default FormUser;