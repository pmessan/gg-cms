import type { Block, Field } from 'payload/types'

import richText from '../../fields/richText'

// structure the fields for the block for ProfileEntry
const profileFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'half',
        label: 'Half',
      },
      {
        value: 'twoThirds',
        label: 'Two Thirds',
      },
      {
        value: 'full',
        label: 'Full',
      },
    ],
  },
  {
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  richText({
    name: 'description',
    label: 'Description',
  }),
  {
    name: 'picture',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  {
    name: 'link',
    type: 'text',
    admin: {
      condition: (_, { enableLink }) => Boolean(enableLink),
    },
  },
]

export const ProfileEntries: Block = {
  slug: 'profileEntries',
  labels: {
    singular: 'Profile Entries',
    plural: 'Profile Entries',
  },
  fields: [
    {
      name: 'profiles',
      type: 'array',
      fields: profileFields,
    },
  ],
}
