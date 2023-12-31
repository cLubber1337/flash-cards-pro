import { memo } from 'react'

import * as slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { Typography, TypographyVariant } from '@/components/ui/Typography'

interface SliderProps {
  defaultValue?: [number, number]
  max?: number
  step?: number
  minStepsBetweenThumbs?: number
  min?: number
  onValueChange: (v: [number, number]) => void
  value: [number, number]
}

export const Slider = memo(
  ({
    onValueChange,
    max,
    min,
    step = 1,
    minStepsBetweenThumbs = 1,
    defaultValue,
    value,
  }: SliderProps) => {
    const handlerChangeValue = (v: [number, number]) => {
      onValueChange(v)
    }

    return (
      <form className={s.form}>
        <div className={s.volume}>
          <Typography variant={TypographyVariant.Body1}>{value?.[0]}</Typography>
        </div>
        <slider.Root
          value={value}
          className={s.root}
          defaultValue={defaultValue}
          max={max}
          min={min}
          step={step}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          onValueChange={handlerChangeValue}
        >
          <slider.Track className={s.track}>
            <slider.Range className={s.range} />
          </slider.Track>
          <slider.Thumb className={s.thumb} aria-label="Volume0" />
          <slider.Thumb className={s.thumb} aria-label="Volume1" />
        </slider.Root>
        <div className={s.volume}>
          <Typography variant={TypographyVariant.Body1}>{value?.[1]}</Typography>
        </div>
      </form>
    )
  }
)
