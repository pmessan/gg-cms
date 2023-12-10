import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

// TODO: switch to tailwind from css modules
import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'profileEntries' }>

export const ProfileEntriesBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { profiles: columns } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, description, link, name, title, size } = col

            return (
              <div key={index} className={[classes.column, classes[`column--${size}`]].join(' ')}>
                <p>{name}</p>
                <p>{title}</p>
                <RichText content={description} />
                {enableLink && <CMSLink className={classes.link} url={link} />}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}
