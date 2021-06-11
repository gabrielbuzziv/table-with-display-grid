import { Container, Table } from "./styles";


const data = [
  [
    '5%',
    '5% de desconto em produtos de limpeza',
    'Desconto EAD - Entrada no PRO',
    'Este benefício dará 5% de desconto a todos os produtos de limpeza da casa.',
    'Teste de Campanha',
    '20/06/2021 00:00',
    '27/06/2021 18:00',
    'Televendas',
    'Praça São Paulo',
    'Ribeirão Preto',
    '000001, 000002',
  ],
  [
    '5%',
    '5% de desconto em produtos de limpeza',
    'Desconto EAD - Entrada no PRO',
    'Este benefício dará 5% de desconto a todos os produtos de limpeza da casa.',
    'Teste de Campanha',
    '20/06/2021 00:00',
    '27/06/2021 18:00',
    'Televendas',
    'Praça São Paulo',
    'Ribeirão Preto',
    '000001, 000002',
  ],
  [
    '5%',
    '5% de desconto em produtos de limpeza',
    'Desconto EAD - Entrada no PRO',
    'Este benefício dará 5% de desconto a todos os produtos de limpeza da casa.',
    'Teste de Campanha',
    '20/06/2021 00:00',
    '27/06/2021 18:00',
    'Televendas',
    'Praça São Paulo',
    'Ribeirão Preto',
    '000001, 000002',
  ],
];



function App() {
  return (
    <Container>

      <Table>

        <section>
          <div>Desconto</div>
          <div>Título</div>
          <div>Tipo De benefício</div>
          <div>Descrição</div>
          <div>Campanha</div>
          <div>Período Início</div>
          <div>Período Fim</div>
          <div>Canal</div>
          <div>Região</div>
          <div>Loja</div>
          <div>Produtos</div>
        </section>

        {data.map(item => (
           <section>
            <div>{item[0]}</div>
            <div>{item[1]}</div>
            <div>{item[2]}</div>
            <div>{item[3]}</div>
            <div>{item[4]}</div>
            <div>{item[5]}</div>
            <div>{item[6]}</div>
            <div>{item[7]}</div>
            <div>{item[8]}</div>
            <div>{item[9]}</div>
            <div>{item[10]}</div>
          </section>
        ))}
        

      </Table>


    </Container>
  );
}

export default App;
