import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {

  const remove = async (e) => {
    e.preventDefault();
    
    // URL da API fake
    const API_URL = 'https://<YOUR_PROJECT>.vercel.app/api/json-server';

    try {
      // Remover o serviço da API
      const response = await fetch(`${API_URL}/services/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover o serviço');
      }

      // Notificar o pai sobre a remoção
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
