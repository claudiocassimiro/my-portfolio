import Image from 'next/image'
import PageHeader from '../components/PageHeader'
import styles from '../styles/projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projects}>
      <PageHeader value="Projetos" />
      <main className={styles.main}>
        <p className={styles.findedResultsText}>
          2 resultados encontrados (0,48 segundos)
        </p>

        <div className={styles.findedResultContainer}>
          <div className={styles.head}>
            <div>
              <Image
                className={styles.eu}
                src="/images/eu.webp"
                alt="Claudio icon"
                width={30}
                height={30}
              />
            </div>

            <div className={styles.containerSiteInfo}>
              <p className={styles.title}>projects.com</p>
              <p className={styles.subtitle}>https://www.projects.com</p>
            </div>
          </div>

          <div className={styles.containerProjects}>
            <div className={styles.containerProject}>
              <a
                target="_blank"
                href="https://serv-mov.vercel.app/"
                rel="noreferrer"
              >
                <h2 className={styles.projectTitle}>
                  ServMov - Você imagina, a gente constroi. Faça já seu
                  orçamento!
                </h2>
                <p className={styles.projectSubTitle}>
                  Projeto que estou desenvolvendo para uma marcenaria local,
                  este projeto foi desenvolvido com React, TypeScript e NextJS
                  no front-end e o back-end foi feito utilizando a tecnologia de
                  apis do NextJS também utilizando TypeScript e Prisma para o
                  back-end com PostegreSQL para banco de dados. Foi utilizado o
                  trello para gestão do projeto e todas as features foram
                  baseadas em ideias sugeridas pelo cliente em conversas que
                  aconteceram durante o desenvolvimento.
                </p>
              </a>
            </div>
            <div className={styles.containerProject}>
              <a
                target="_blank"
                href="https://meucarrinho.vercel.app/"
                rel="noreferrer"
              >
                <h2 className={styles.projectTitle}>
                  Meu Carrinho - App de ofertas em estabelecimentos parceiros.
                </h2>
                <p className={styles.projectSubTitle}>
                  Projeto desenvolvido com React, TypeScript e NextJS para
                  solucionar um problema pessoal que aconteceu quando eu estava
                  no mercado e meu dinheiro não foi suficiente para passar todos
                  os produtos do carrinho. O app Meu Carrinho possibilita que
                  você acompanhe o valor do seu carrinho para não ter surpresas
                  no final das compras.
                </p>
              </a>
            </div>
            <div className={styles.containerProject}>
              <a
                target="_blank"
                href="https://associacao-nossa-senhora-aparecida.vercel.app/"
                rel="noreferrer"
              >
                <h2 className={styles.projectTitle}>
                  Associação Nossa Senhora Aparecida - Venha participar do bingo
                  beneficente.
                </h2>
                <p className={styles.projectSubTitle}>
                  Projeto desenvolvido com React, TypeScript e NextJS para
                  Associação Nossa Senhora Aparecida, associação que promove
                  festa das crianças e natal solidario totalmente gratis para as
                  crianças do Ipojuca PE.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects
