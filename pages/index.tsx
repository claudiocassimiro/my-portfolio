import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput'
import ClaudioLogo from '../components/ClaudioLogo'
import MoreLinks from '../components/MoreLinks'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerMoreLinks}>
          <MoreLinks />
        </div>
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
