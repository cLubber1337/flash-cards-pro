import { memo } from 'react'

import { THeader } from '../THeader/THeader.tsx'
import { TRow } from '../TRow/TRow.tsx'

import s from './TableDecks.module.scss'

import deckImg from '@/assets/img/deckImage.jpg'
import { ReactComponent as EditIcon } from '@/assets/svg/edit.svg'
import { ReactComponent as PlayIcon } from '@/assets/svg/play.svg'
import { ReactComponent as TrashIcon } from '@/assets/svg/trash.svg'
import { Typography, TypographyVariant } from '@/components/ui'
import { Deck, SortByType } from '@/services/decks/types.ts'
import { decksHeaderColumns } from '@/utils/constants'
import { TCell } from '@/widgets/Table/TCell/TCell.tsx'

interface TableProps {
  data?: Deck[]
  sortBy: SortByType | ''
}

export const TableDecks = memo(({ data, sortBy }: TableProps) => {
  return (
    <table className={s.table}>
      <THeader sortBy={sortBy} columns={decksHeaderColumns} />
      <tbody>
        {data?.map(({ id, cover, name, cardsCount, updated, author }) => {
          return (
            <TRow key={id}>
              <TCell className={s.deckName}>
                <div className={s.deckImg}>
                  <img src={cover ? cover : deckImg} alt="deck" className={s.img} />
                </div>
                <Typography variant={TypographyVariant.Body2} className={s.deckTitle}>
                  {name}
                </Typography>
              </TCell>
              <TCell>
                <Typography variant={TypographyVariant.Body2}>{cardsCount}</Typography>
              </TCell>
              <TCell>
                <Typography tag="span" variant={TypographyVariant.Body2}>
                  {new Date(updated).toLocaleDateString('en-GB')}
                </Typography>
              </TCell>
              <TCell>
                <Typography tag="span" variant={TypographyVariant.Body2}>
                  {author.name}
                </Typography>
              </TCell>
              <TCell>
                <PlayIcon onClick={() => null} />
                <EditIcon onClick={() => null} />
                <TrashIcon onClick={() => null} />
              </TCell>
            </TRow>
          )
        })}
      </tbody>
    </table>
  )
})