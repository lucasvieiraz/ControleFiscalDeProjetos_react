import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  async function submit(e) {
    e.preventDefault();
    
    // URL da API fake
    const API_URL = 'https://controle-fiscal-de-projetos-react-7x3ox6kod.vercel.app';
    
    try {
      // Obtém o projeto atual
      const projectResponse = await fetch(`${API_URL}/projects/${projectData.id}`);
      const project = await projectResponse.json();
      
      // Adiciona o novo serviço ao projeto
      project.services.push(service);

      // Atualiza o projeto com o novo serviço
      const updateResponse = await fetch(`${API_URL}/projects/${projectData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (!updateResponse.ok) {
        throw new Error(`Erro ao atualizar projeto: ${updateResponse.statusText}`);
      }

      const updatedProject = await updateResponse.json();
      handleSubmit(updatedProject);

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
