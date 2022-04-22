import React from 'react'
import cs from 'classnames'
import { IconSvg, IconDefinition } from './Icon.generated'
export * from './Icon.generated'
interface Props {
  icon?: IconDefinition
  alt?: string
  style?: React.CSSProperties
  className?: string
}
const Icon = (props: Props) => {
  if (!props.icon) {
    return null
  }
  return (
    <div
      style={props.style}
      className={cs(
        'Icon',
        props.className
      )}
    >
      {IconSvg[props.icon]}
    </div>
  )
}

export default Icon
