import { Box, Container } from '@mantine/core';

const pessoas = [
  { name: 'Fabiana Araujo', age: 33 },
  { name: 'Gabriel Gomes', age: 25 },
  { name: 'Fernando Henrique', age: 17 },
  { name: 'Ana Luiza', age: 2 },
  { name: 'Geralda do nascimento', age: 93 },
  { name: 'Miguel Souza', age: 70 },
  { name: 'Antônio Miguel', age: 69 },
];

export const Desafio2 = () => {
  return (
    <Container m='auto' p={10}>
      <Box sx={{ maxWidth: 500 }} mx='auto'>
        <h1>Desafio 2</h1>
        <h3> 1) Ordenando por idade</h3>
        {pessoas
          .sort((a, b) => a.age - b.age)
          .map((pessoa) => {
            return (
              <p key={pessoa.name + pessoa.age}>
                {pessoa.name} - {pessoa.age}
              </p>
            );
          })}
        <h3> 2) Filtrando registro com nome Ana</h3>
        {pessoas
          .filter((pessoa) => pessoa.name.includes('Ana'))
          .map((pessoa) => {
            return <p key={pessoa.name + pessoa.age}>{pessoa.name}</p>;
          })}
        <h3> 3) Retornando apenas nomes</h3>
        {pessoas.map((pessoa) => {
          return <p key={pessoa.name + pessoa.age}>{pessoa.name}</p>;
        })}
      </Box>
    </Container>
  );
};
