import { render } from '@testing-library/react'
import React from 'react'

import MainImage from './MainImage'

describe('mainImage', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<MainImage />)
    expect(container).toMatchSnapshot()
  })
})
