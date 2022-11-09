import { Button, Container, Space } from '@mantine/core';
export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Button variant='outline' component='a' href='/desafio-1'>
        Desafio 1
      </Button>
      <Space h='md' />
      <Button variant='outline' component='a' href='/desafio-2'>
        Desafio 2
      </Button>
      <Space h='md' />
      <Button variant='outline' component='a' href='/outros'>
        Outros
      </Button>
      <h4>Info</h4>
      <p>Questão 1 - /desafio-1</p>
      <p>Questão 2 - /desafio-2</p>
      <p>Questão 3 - /outros - *olhar no console</p>
    </Container>
  );
};
