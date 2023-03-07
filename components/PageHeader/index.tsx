import Image from 'next/image'
import Link from 'next/link'
import MoreLinks from '../MoreLinks'
import SearchInput from '../SearchInput'
import styles from './styles.module.css'

interface PageHeaderProps {
  value?: string
}

const PageHeader = ({ value }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.containerImageAndInput}>
        <Link href="/" className={styles.imageContainer}>
          <Image
            src="/images/claudio-icon.webp"
            alt="Claudio icon"
            width={92}
            height={30}
          />
        </Link>

        <div className={styles.containerSearchInput}>
          <SearchInput value={value} />
        </div>
      </div>
      <MoreLinks />
    </header>
  )
}

export default PageHeader
