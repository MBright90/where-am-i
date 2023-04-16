import { render } from '@testing-library/react'
import React from 'react'

import CheckItem from './CheckItem'

describe('CheckItem', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <CheckItem
        character={{
          name: 'exampleName',
          characterId: 'exampleId',
          image: 'exampleImage',
          hasFound: false
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
