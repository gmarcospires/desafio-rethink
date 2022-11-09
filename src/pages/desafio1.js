import {
  TextInput,
  NumberInput,
  Button,
  Group,
  Box,
  Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import 'dayjs/locale/pt-br';
import { DatePicker } from '@mantine/dates';

const mascaraTelefone = (value) => {
  let valor = value.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  return valor;
};

export const Desafio1 = () => {
  const [nomeValue, setNomeValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [occupationValue, setOccupationValue] = useState('');
  const [telefoneValue, setTelefoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [dateValue, setDateValue] = useState(new Date());
  const [mostrar, setMostrar] = useState(false);

  const form = useForm({
    validate: {
      nome: (value) =>
        value.length > 0 && value.trim().length > 0 ? null : 'Nome Inválido',
      idade: (value) => (/[0-9]+/.test(value) ? null : 'Idade inválida'),
      profissao: (value) =>
        value?.length && value.trim().length >= 3 ? null : 'Profissão inválida',
      telefone: (value) =>
        /^^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9?\s?\d|[2-9])\d{3})-?(\d{4}))$/.test(
          value
        )
          ? null
          : 'Número Inválido',
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : 'Email inválido',
    },
  });
  return (
    <Container m='auto' p={10}>
      <h1>Cadastro</h1>
      <Box sx={{ maxWidth: 300 }} m='auto'>
        <form onSubmit={form.onSubmit(() => setMostrar(true))}>
          <TextInput
            withAsterisk
            radius='xs'
            label='Nome'
            name='name'
            value={nomeValue}
            placeholder='Nome'
            error={form.getInputProps('nome').error}
            onFocus={() => form.setFieldError('nome', null)}
            onBlur={() => form.validateField('nome')}
            onChange={(event) => {
              const { value } = event.currentTarget;
              setNomeValue(value);
              const handlechange = form.getInputProps('nome').onChange;
              handlechange(event);
            }}
          />
          <NumberInput
            withAsterisk
            value={ageValue}
            label='Idade'
            placeholder='Idade'
            name='age'
            radius='xs'
            max={120}
            min={0}
            error={form.getInputProps('idade').error}
            onFocus={() => form.setFieldError('idade', null)}
            onBlur={() => form.validateField('idade')}
            onChange={(val) => {
              setAgeValue(val);
              const handlechange = form.getInputProps('idade').onChange;
              handlechange(val);
            }}
          />
          <TextInput
            withAsterisk
            radius='xs'
            label='Profissão'
            name='occupation'
            value={occupationValue}
            placeholder='Profissão'
            error={form.getInputProps('profissao').error}
            onFocus={() => form.setFieldError('profissao', null)}
            onBlur={() => form.validateField('profissao')}
            onChange={(event) => {
              const { value } = event.currentTarget;
              setOccupationValue(value);
              const handlechange = form.getInputProps('profissao').onChange;
              handlechange(event);
            }}
          />
          <TextInput
            withAsterisk
            radius='xs'
            label='Telefone'
            name='phone'
            onKeyUp={(e) => {
              const telefoneFormatado = mascaraTelefone(e.currentTarget.value);
              e.target.value = telefoneFormatado;
            }}
            placeholder='Telefone'
            value={telefoneValue}
            error={form.getInputProps('telefone').error}
            onFocus={() => form.setFieldError('telefone', null)}
            onBlur={() => form.validateField('telefone')}
            onChange={(event) => {
              const { value } = event.currentTarget;
              const telefoneFormatado = mascaraTelefone(value);
              setTelefoneValue(telefoneFormatado);
              const handlechange = form.getInputProps('telefone').onChange;
              handlechange(telefoneFormatado);
            }}
          />
          <TextInput
            withAsterisk
            label='Email'
            value={emailValue}
            placeholder='your@email.com'
            error={form.getInputProps('email').error}
            onFocus={() => form.setFieldError('email', null)}
            onBlur={() => form.validateField('email')}
            onChange={(event) => {
              const { value } = event.currentTarget;
              setEmailValue(value);
              const handlechange = form.getInputProps('email').onChange;
              handlechange(value);
            }}
          />
          <DatePicker
            locale='pt-br'
            placeholder='Data'
            name='date'
            label='Event date'
            value={dateValue}
            inputFormat='DD/MM/YYYY'
            withAsterisk
            disabled
            error={form.getInputProps('date').error}
            onFocus={() => form.setFieldError('date', null)}
            onBlur={() => form.validateField('date')}
            onChange={(event) => {
              const { value } = event.currentTarget;
              setDateValue(value);
              const handlechange = form.getInputProps('date').onChange;
              handlechange(event);
            }}
          />

          <Group position='right' mt='md'>
            <Button type='submit'>Submit</Button>
          </Group>
        </form>
      </Box>
      {mostrar && (
        <Box>
          <h1>Dados cadastrados:</h1>
          <p>
            <b>Nome:</b> {nomeValue}
          </p>
          <p>
            <b>Idade:</b> {ageValue}
          </p>
          <p>
            <b>Profissão:</b> {occupationValue}
          </p>
          <p>
            <b>Telefone:</b> {telefoneValue}
          </p>
          <p>
            <b>Email:</b> {emailValue}
          </p>
          <p>
            <b>Data:</b> {dateValue.toLocaleDateString()}
          </p>
        </Box>
      )}
    </Container>
  );
};
