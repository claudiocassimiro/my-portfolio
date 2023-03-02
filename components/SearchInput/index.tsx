import { AiOutlineSearch } from 'react-icons/ai'
import styles from './styles.module.css'

interface SearchInputProps {
  value?: string
}

const SearchInput = ({ value = '' }: SearchInputProps) => {
  return (
    <div className={styles.containerInput}>
      <AiOutlineSearch className={styles.searchIcon} size={25} />
      <input className={styles.input} type="text" value={value} />
    </div>
  )
}

export default SearchInput
