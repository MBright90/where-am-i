import { render } from '@testing-library/react'
import React from 'react'

import CheckItem from './ChecklistItem'

describe('CheckItem', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <CheckItem
        character={{
          name: 'exampleName',
          characterId: 'exampleId',
          hasFound: false
        }}
        image={'exampleImageUrl'}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
