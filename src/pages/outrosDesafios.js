import { useEffect } from 'react';

const pessoas = [
  { name: 'Fabiana Araujo', age: 33 },
  { name: 'Gabriel Gomes', age: 25 },
  { name: 'Fernando Henrique', age: 17 },
  { name: 'Ana Luiza', age: 2 },
  { name: 'Geralda do nascimento', age: 93 },
  { name: 'Miguel Souza', age: 70 },
  { name: 'Antônio Miguel', age: 69 },
];

export const Outros = () => {
  function buscaDados(nomPessoa) {
    return pessoas.find((pessoa) => pessoa.name === nomPessoa);
  }

  function getNomePessoas() {
    return pessoas.map((pessoa) => pessoa.name.split(' ')[0]);
  }

  function insereId() {
    let id = 0;
    if (pessoas.find((pessoa) => pessoa.id !== undefined)) {
      pessoas.sort((a, b) => a.id - b.id);
      id = pessoas[pessoas.length - 1].id + 1;
    }
    if (pessoas.some((pessoa) => pessoa.id === undefined)) {
      pessoas.forEach((pessoa) => {
        if (pessoa.id === undefined) {
          pessoa.id = id;
          id++;
        }
      });
    }
    return pessoas;
  }

  function getMaioridade() {
    return pessoas.filter((pessoa) => pessoa.age >= 18);
  }

  function mediaIdade() {
    const soma = pessoas.reduce((acc, pessoa) => acc + pessoa.age, 0);
    return soma / pessoas.length;
  }
  useEffect(() => {
    console.log('Desafio 3 -', buscaDados('Gabriel Gomes'));
    console.log('Desafio 4 -', getNomePessoas());
    console.log('Desafio 5 -', insereId());
    console.log('Desafio 6 -', getMaioridade());
    console.log('Desafio 7 -', mediaIdade());
  }, []);

  return <div>Resultados no console do navegador</div>;
};
