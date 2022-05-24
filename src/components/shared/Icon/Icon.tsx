import React from 'react'
import cs from 'classnames'
import { IconSvg, IconDefinition } from './Icon.generated'
export * from './Icon.generated'
interface Props {
  icon?: IconDefinition
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}
const Icon = ({ className, icon, onClick, style }: Props) => {
  if (!icon) {
    return null
  }
  return (
    <div style={style} className={cs('Icon', className)} onClick={onClick}>
      {IconSvg[icon]}
    </div>
  )
}

export default Icon
