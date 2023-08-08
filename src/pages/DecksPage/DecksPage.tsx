import { useState } from 'react'

import { ReactComponent as TrashIcon } from '../../assets/svg/trash.svg'

import s from './DecksPage.module.scss'

import {
  Button,
  Pagination,
  Slider,
  TabSwitcher,
  TextField,
  Typography,
  TypographyVariant,
} from '@/components/ui'
import { useGetDecksQuery } from '@/services/decks'
import { decksActions } from '@/services/decks/decksSlice.ts'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectSearchByName,
} from '@/services/decks/selectors.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'
import { AddNewPack } from '@/widgets/AddNewPack'
import { Table } from '@/widgets/Table'

export const DecksPage = () => {
  const dispatch = useAppDispatch()
  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const currentPage = useAppSelector(selectCurrentPage)
  const searchByName = useAppSelector(selectSearchByName)
  const [isOpen, setIsOpen] = useState(false)

  const { data } = useGetDecksQuery({
    itemsPerPage: itemsPerPage,
    name: searchByName,
    currentPage: currentPage,
  })

  return (
    <div className={s.decksPage}>
      <div className={s.header}>
        <div className={s.title}>
          <Typography tag="h1" variant={TypographyVariant.Large}>
            Packs list
          </Typography>
        </div>
        <Button className={s.AddNewPackBtn} onClick={() => setIsOpen(true)}>
          Add New Pack
        </Button>
        <AddNewPack isOpen={isOpen} onClose={setIsOpen} />
      </div>
      <div className={s.actions}>
        <div className={s.search}>
          <TextField
            placeholder="Search by name"
            search
            fullWidth
            customValue={searchByName}
            onChangeValue={e => dispatch(decksActions.setSearchByName(e))}
          />
        </div>
        <div className={s.tabSwitcher}>
          <Typography variant={TypographyVariant.Body2}>Show packs cards</Typography>
          <TabSwitcher tabs={['My Cards', 'All Cards']} onClick={() => null} />
        </div>
        <div className={s.slider}>
          <Typography variant={TypographyVariant.Body2}>Number of cards</Typography>
          <Slider defaultValue={[0, 10]} />
        </div>
        <Button variant="secondary" className={s.clearBtn}>
          <TrashIcon />
          Clear Filter
        </Button>
      </div>
      {/*-------------------------------------TABLE DECKS-----------------------------------------*/}
      <Table data={data?.items} />
      {/*-------------------------------------PAGINATION------------------------------------------*/}
      <Pagination
        currentPage={currentPage}
        totalPages={data?.pagination.totalPages}
        siblingsCount={1}
        itemsPerPage={itemsPerPage}
      />
    </div>
  )
}
