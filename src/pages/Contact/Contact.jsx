import {
  FormContainer,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
} from "./ContactStyles";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <>
      <FormContainer>
        <h2>Contacto</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nombre">Nombre</Label>
            <Input type="text" id="nombre" name="nombre" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="apellido">Apellido</Label>
            <Input type="text" id="apellido" name="apellido" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="asunto">Asunto</Label>
            <TextArea id="asunto" name="asunto" rows="4" required />
          </FormGroup>
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default Contact;
