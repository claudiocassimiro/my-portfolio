import Image from 'next/image'
import MoreLinks from '../components/MoreLinks'
import SearchInput from '../components/SearchInput'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <header className={styles.header}>
        <div className={styles.containerImageAndInput}>
          <Image
            className={styles.image}
            src="/images/claudio-icon.webp"
            alt="Claudio icon"
            width={92}
            height={30}
          />

          <div className={styles.containerSearchInput}>
            <SearchInput value="Sobre mim" />
          </div>
        </div>
        <MoreLinks />
      </header>
      <main className={styles.main}>
        <p className={styles.findedResultsText}>
          Apenas 1 resultado encontrado (0,48 segundos)
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
              <p className={styles.title}>about.me</p>
              <p className={styles.subtitle}>https://www.about.me</p>
            </div>
          </div>

          <div className={styles.body}>
            <h1 className={styles.bodyTitle}>
              Claudio Cassimiro - Software Engineer
            </h1>
            <p className={styles.bodySubTitle}>
              Software Engineer | Professor de Programação | React | React
              Native | TypeScript | NestJS | NextJS | Java | Python |
            </p>

            <div className={styles.containerExperience}>
              <h2 className={styles.bodyTitle}>Experiencias</h2>
              <div className={styles.wrapper}>
                <p className={styles.jobTitle}>Software Engineer</p>
                <p className={styles.description}>
                  Responsável pelo desenvolvimento de novas features, testes,
                  code reviews e manutenções do produto da MySide, utilizando
                  TypeScript e React em conjunto com NextJS para construção de
                  interfaces de usuário responsivas, performáticas e bem
                  ranqueadas nos motores de busca.
                </p>
              </div>
              <div className={styles.wrapper}>
                <p className={styles.jobTitle}>Summer Jobber</p>
                <p className={styles.description}>
                  Responsável por revisar conteúdos, trabalhos, aulas, gabaritos
                  e projetos dos primeiros blocos do curso de Desenvolvimento de
                  Software da Trybe baseado em feedbacks estruturados. Os
                  conteúdos incluem HTML, CSS, JavaScript básico, ES6, React,
                  Redux, testes automatizados com Jest e com React Testing
                  Library. As revisões são organizadas em ciclos de sprint,
                  utilizando ferramentas como Slack e Github, e os resultados da
                  revisão são avaliados de forma recorrente.
                </p>
              </div>
              <div className={styles.wrapper}>
                <p className={styles.jobTitle}>Professor de Programação</p>
                <p className={styles.description}>
                  Sou professor de programação especializado em ajudar
                  estudantes a superar as dificuldades que encontram durante o
                  processo de aprendizado da programação. Meu objetivo é fazer
                  com que a programação seja acessível e compreensível para
                  todos, independentemente do seu nível de experiência ou
                  conhecimento prévio. Eu ofereço orientação e suporte
                  personalizados para cada aluno, ajudando-os a entender
                  conceitos complexos de forma simples e prática. Se você está
                  procurando ajuda para melhorar suas habilidades de
                  programação, estou aqui para ajudar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
