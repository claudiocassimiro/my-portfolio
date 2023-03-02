import Image from 'next/image'
import { useWindowSize } from '../../utils/helpers'
import styles from './styles.module.css'

const ClaudioLogo = () => {
  const { isDesktop } = useWindowSize()
  return (
    <Image
      className={styles.image}
      src="/images/claudio-icon.webp"
      alt="Claudio icon"
      width={isDesktop ? 417 : 160}
      height={isDesktop ? 113 : 56}
    />
  )
}

export default ClaudioLogo
