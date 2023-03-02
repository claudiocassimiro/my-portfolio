import styles from './styles.module.css'
import { CgMenuGridO } from 'react-icons/cg'
import Image from 'next/image'
import Link from 'next/link'

const MoreLinks = () => {
  return (
    <div className={styles.moreLinks}>
      <CgMenuGridO size={40} />
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/claudiocassimiro/"
        rel="referrer noreferrer"
      >
        <Image
          className={styles.image}
          src="/images/eu.webp"
          alt="Claudio icon"
          width={48}
          height={48}
        />
      </Link>
    </div>
  )
}

export default MoreLinks
