import styles from './styles.module.css'
import { CgMenuGridO } from 'react-icons/cg'
import { IoIosContact } from 'react-icons/io'
import { SiAboutdotme } from 'react-icons/si'
import { VscTools } from 'react-icons/vsc'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { useEffect, useState } from 'react'

interface MoreLinksProps {
  homePage?: boolean
}

const MoreLinks = ({ homePage = false }: MoreLinksProps) => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.onclick = (e) => {
      console.log((e.target as HTMLElement)?.className)
      if (typeof (e.target as HTMLElement)?.className !== 'string') {
        return
      }
      if (!(e.target as HTMLElement)?.className.includes('containerMenu')) {
        return setShowMenu(false)
      }
    }

    return () => {
      window.onclick = null
    }
  }, [])

  return (
    <div
      className={cn(styles.moreLinks, {
        [styles.homePageStyles]: homePage,
      })}
    >
      <CgMenuGridO
        size={25}
        className={styles.menuGrid}
        onClick={() => setShowMenu(!showMenu)}
      />
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
      {showMenu ? (
        <div
          className={cn(styles.containerMenu, {
            [styles.homePageContainerMenu]: homePage,
          })}
        >
          <Link className={styles.containerItem} href="/about" rel="referrer ">
            <SiAboutdotme size={25} />
          </Link>

          <Link
            className={styles.containerItem}
            href="/projects"
            rel="referrer"
          >
            <VscTools size={25} />
            <span>Projetos</span>
          </Link>

          <Link
            className={styles.containerItem}
            target="_blank"
            href="https://www.linkedin.com/in/claudiocassimiro/"
            rel="referrer noreferrer"
          >
            <IoIosContact size={25} />
            <span>Contato</span>
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default MoreLinks
