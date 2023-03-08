import styles from './styles.module.css'
import { CgMenuGridO } from 'react-icons/cg'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

interface MoreLinksProps {
  homePage?: boolean
}

const MoreLinks = ({ homePage = false }: MoreLinksProps) => {
  return (
    <div
      className={cn(styles.moreLinks, {
        [styles.homePageStyles]: homePage,
      })}
    >
      <CgMenuGridO size={25} className={styles.menuGrid} />
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/claudiocassimiro/"
        rel="referrer noreferrer"
      >
        <Image
          className={styles.image}
          src="/images/eu.webp"
          alt="Claudio icon"
          width={32}
          height={32}
        />
      </Link>
    </div>
  )
}

export default MoreLinks
