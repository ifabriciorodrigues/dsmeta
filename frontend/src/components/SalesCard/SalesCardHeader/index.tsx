import { FormContainer, Heading, Input } from './styles'

const SalesCardHeader = () => (
  <div>
    <Heading>Vendas</Heading>
    <div>
      <FormContainer>
        <Input className="dsmeta-form-control" type="text" />
      </FormContainer>
      <FormContainer>
        <Input className="dsmeta-form-control" type="text" />
      </FormContainer>
    </div>
  </div>
)

export default SalesCardHeader