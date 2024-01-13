import { compareLines } from '../lib'
import { boilerSearch } from '../model'
import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { FormEvent, useState, type FC } from 'react'
import { toast } from 'react-toastify'
import { type IBoilerPart } from 'shared/api'
import { useClickOutside, useDebounceCallback, useLockedBody } from 'shared/lib'
import { $auth } from 'shared/store'
import { Icon, Spinner } from 'shared/ui'

export const SearchInput: FC = () => {
  const router = useRouter()
  const { userId } = useStore($auth)
  const { isOpen, ref, setIsOpen } = useClickOutside(false)
  const Overlay = useLockedBody({ isOpen })
  const [products, setProducts] = useState<IBoilerPart[]>([])
  const [isFound, setIsFound] = useState<boolean>()
  const [spinner, setSpinner] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const onHelpList = async (searchValue: string) => {
    if (!searchValue) return setIsFound(false)
    const boilerParts = await boilerSearch({ setSpinner, searchValue })
    if (!boilerParts || !boilerParts.length) return setIsFound(false)
    setProducts(boilerParts)
    setIsFound(true)
  }
  const focusAccess = () => {
    if (!userId) toast.info('Please Sign In or Sign Up')
  }
  const delayCallback = useDebounceCallback(onHelpList, 1000)
  const findProductId = (name: string) =>
    products.find((item) => compareLines(name, item.name))?.id

  const onSelectItem = (item: string) => {
    setSearchValue(item)
    setIsOpen(false)
  }

  const onInputSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setSearchValue(value)
    delayCallback(value)
  }
  const clearSearch = () => {
    setIsOpen(false)
    setSearchValue('')
    setProducts([])
  }
  const goToProductPage = () => {
    const productId = findProductId(searchValue)
    if (productId) {
      router.push(`/catalog/${productId}`)
      clearSearch()
    } else {
      toast.warning('product not found or select product')
    }
  }

  return (
    <>
      {Overlay}
      <div
        ref={ref}
        className={clsx(
          style.select,
          isOpen && style.select_open,
          !userId && style.blocked
        )}
        onClick={focusAccess}
      >
        <button
          className={clsx(style.cancel__btn, isOpen && style.cancel__btn_show)}
          onClick={clearSearch}
        >
          <span className={style.icon_back}>
            <Icon type="common" name="arrow-back" />
          </span>
        </button>

        <input
          type="text"
          placeholder="search..."
          value={searchValue}
          onFocus={() => setIsOpen(true)}
          onInput={onInputSearch}
          maxLength={40}
        />
        <div className={clsx(style.list, isOpen && style.list_open)}>
          {isFound ? (
            <ul className="small_scroll">
              {products.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => onSelectItem(item.name)}
                  className={clsx(
                    style.list__item,
                    compareLines(searchValue, item.name) &&
                      style.list__item_active
                  )}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <ul className={style.not_found}>
              <li className={clsx(style.list__item)}>Not Found</li>
            </ul>
          )}
        </div>
        {spinner && <Spinner className={style.spinner} color="blue" />}
        <button
          className={style.search__btn}
          disabled={spinner}
          onClick={goToProductPage}
        >
          <Icon type="common" name="search" />
        </button>
      </div>
    </>
  )
}
