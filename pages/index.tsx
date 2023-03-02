import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWindowSize } from '../utils/helpers'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Home() {
  const { isDesktop } = useWindowSize()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          className={styles.image}
          src="/images/claudio-icon.webp"
          alt="Claudio icon"
          width={isDesktop ? 417 : 160}
          height={isDesktop ? 113 : 56}
        />

        <div className={styles.containerInput}>
          <AiOutlineSearch className={styles.searchIcon} size={25} />
          <input className={styles.input} type="text" />
        </div>

        <div className={styles.containerfakeButtons}>
          <span className={styles.fakeButtons}>Software Engineer</span>
          <span className={styles.fakeButtons}>Web - Mobile</span>
        </div>
      </main>
    </div>
  )
}
