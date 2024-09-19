import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  async function submit(e) {
    e.preventDefault();
    
    // URL da API fake
    const API_URL = 'https://<YOUR_PROJECT>.vercel.app/api/json-server';

    try {
      // Enviar dados para a API
      const response = await fetch(`${API_URL}/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      // Atualiza o estado do projeto com os dados recebidos da API
      const newService = await response.json();
      projectData.services.push(newService);
      handleSubmit(projectData);

    } catch (error) {
      console.error('Erro:', error);
    }
  }

  function handleChance(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type='text'
        text='Nome do serviço'
        name='name'
        placeholder='Insira o nome do serviço'
        handleOnChange={handleChance}
      />
      <Input
        type='number'
        text='Custo do serviço'
        name='cost'
        placeholder='Insira o valor total'
        handleOnChange={handleChance}
      />
      <Input
        type='text'
        text='Descrição do serviço'
        name='description'
        placeholder='Descreva o serviço'
        handleOnChange={handleChance}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
