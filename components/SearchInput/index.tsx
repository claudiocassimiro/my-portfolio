import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import styles from './styles.module.css'

interface SearchInputProps {
  value?: string
}

const DEFAULT_SUGGESTION_ITEMS = [
  { suggestion: 'Sobre mim', href: '/about' },
  { suggestion: 'Projetos', href: '/projects' },
  { suggestion: 'Contato', href: '/contact' },
]

const SearchInput = ({ value = '' }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(value)
  const [showSuggestions, setShownSuggestions] = useState(false)
  const [suggestionsArray, setSuggestionsArray] = useState(
    DEFAULT_SUGGESTION_ITEMS
  )

  const handleSuggestions = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)

    if (target.value.length > 0) {
      const filteredSuggestions =
        suggestionsArray.length > 0
          ? suggestionsArray.filter((item) =>
              item.suggestion.toLowerCase().includes(target.value.toLowerCase())
            )
          : DEFAULT_SUGGESTION_ITEMS.filter((item) =>
              item.suggestion.toLowerCase().includes(target.value.toLowerCase())
            )

      return setSuggestionsArray(filteredSuggestions)
    }

    return setSuggestionsArray(DEFAULT_SUGGESTION_ITEMS)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShownSuggestions(false)
    }, 125)
  }

  return (
    <div className={styles.containerInput}>
      <AiOutlineSearch className={styles.searchIcon} size={25} />
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        name="inputValue"
        onChange={(e) => handleSuggestions(e)}
        onBlur={() => handleBlur()}
        onClick={() => setShownSuggestions(true)}
      />
      {showSuggestions ? (
        <div className={styles.suggestionsContainer}>
          {suggestionsArray.map(({ suggestion, href }) => (
            <div className={styles.suggestion} key={suggestion}>
              <MdOutlineWatchLater />
              <Link className={styles.suggestionText} href={href ?? ''}>
                {suggestion}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default SearchInput
