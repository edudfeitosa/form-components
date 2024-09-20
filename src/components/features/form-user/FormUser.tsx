import Input from "@/components/partials/input/Input.tsx";
import Button from "@/components/partials/button/Button.tsx";
import Alerts from "@/components/partials/alerts/Alerts.tsx";

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
            <Alerts>Minha mensagem</Alerts>
            <Input
                label="Digite aqui"
                placeholder="Digite aqui"
            />
            <Alerts type='info'>Minha mensagem</Alerts>
            <Button
                title="Adicione o título"
                onClick={() => clickButton()}
            />
        </>
    );
};

export default FormUser;