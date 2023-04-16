import { render } from '@testing-library/react'
import React from 'react'

import HUD from './HUD'

describe('HUD', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<HUD />)
    expect(container).toMatchSnapshot()
  })
})
