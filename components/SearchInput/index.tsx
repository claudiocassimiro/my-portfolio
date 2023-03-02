import { AiOutlineSearch } from 'react-icons/ai'
import styles from './styles.module.css'

const SearchInput = () => {
  return (
    <div className={styles.containerInput}>
      <AiOutlineSearch className={styles.searchIcon} size={25} />
      <input className={styles.input} type="text" />
    </div>
  )
}

export default SearchInput
