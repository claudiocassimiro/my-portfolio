import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput'
import ClaudioLogo from '../components/ClaudioLogo'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ClaudioLogo />
        <SearchInput />

        <div className={styles.containerfakeButtons}>
          <span className={styles.fakeButtons}>Software Engineer</span>
          <span className={styles.fakeButtons}>Web - Mobile</span>
        </div>
      </main>
    </div>
  )
}
