import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {

  const remove = async (e) => {
    e.preventDefault();
    
    // URL da API fake
    const API_URL = 'https://controle-fiscal-de-projetos-react-7x3ox6kod.vercel.app';
    
    try {
      // Obtém o projeto atual
      const projectsResponse = await fetch(`${API_URL}/projects`);
      const projects = await projectsResponse.json();
      
      // Encontra o projeto que contém o serviço
      const project = projects.find(p => p.services.some(s => s.id === id));
      
      if (!project) {
        throw new Error('Projeto não encontrado');
      }
      
      // Remove o serviço do projeto
      project.services = project.services.filter(s => s.id !== id);

      // Atualiza o projeto sem o serviço removido
      const updateResponse = await fetch(`${API_URL}/projects/${project.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (!updateResponse.ok) {
        throw new Error(`Erro ao atualizar projeto: ${updateResponse.statusText}`);
      }

      handleRemove(id, cost);

    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
