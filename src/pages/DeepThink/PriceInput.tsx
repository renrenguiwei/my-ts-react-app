import React, { useCallback } from 'react'

interface PriceInputType {
  value: ValType
  onChangeCb: (e: ValType) => void
}

interface ValType {
  amount: number
  currency: string
}

export const PriceInput = (props: PriceInputType) => {
  const { value, onChangeCb } = props

  const handleChange = useCallback(
    (newValue: any) => {
      onChangeCb({
        ...value,
        ...newValue
      })
    },
    [value]
  )

  return (
    <div>
      <input type="number" value={value?.amount} onChange={(e) => handleChange({ amount: e.target.value })} />
      <select value={value?.currency} onChange={(e) => handleChange({ currency: e.target.value })}>
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
      </select>
    </div>
  )
}
