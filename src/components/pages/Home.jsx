import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton';

function Home(){
  return (
  <section className={styles.home_container}>
    <h1>Bem-vindo à ECE </h1>
    <p>Comece a gerenciar os seus projetos agora mesmo!</p>
    <LinkButton to="/newproject" text="Criar Projeto" />
    <img src="https://th.bing.com/th/id/OIP.0kJutUZ7KlyE8H7NjLjgVAHaHe?rs=1&pid=ImgDetMain" alt="descrição da imagem" width="largura" height="altura"/>

  </section>
    )
}

export default Home;