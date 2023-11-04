import { compareLines } from '../lib'
import { boilerSearchFx } from '../model'
import style from './style.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { IBoilerPart } from 'shared/api'
import { useClickOutside, useDebounceCallback, useLockedBody } from 'shared/lib'
import { Icon, Spinner } from 'shared/ui'

export const SearchInput: FC = () => {
  const router = useRouter()
  const { isOpen, ref, setIsOpen } = useClickOutside(false)
  const Overlay = useLockedBody(isOpen, 'md:block')
  const [products, setProducts] = useState<IBoilerPart[]>([])
  const [spinner, setSpinner] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const onHelpList = async (searchValue: string) => {
    const boilerParts = await boilerSearchFx({ setSpinner, searchValue })
    boilerParts && setProducts(boilerParts)
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
        className={clsx(style.select, isOpen && style.select_open)}
      >
        <button
          className={clsx(style.cancel__btn, isOpen && style.cancel__btn_show)}
          onClick={clearSearch}
        >
          🡰
        </button>

        <input
          type="text"
          placeholder="search..."
          value={searchValue}
          onFocus={() => setIsOpen(true)}
          onInput={onInputSearch}
          maxLength={40}
        />
        <div
          className={clsx(
            style.list,
            isOpen && !!products.length && style.list_open
          )}
        >
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
        </div>
        {spinner && <Spinner />}
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
