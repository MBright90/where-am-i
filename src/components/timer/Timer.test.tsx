import { render } from '@testing-library/react'
import React from 'react'

import Timer from './Timer'

describe('Timer', () => {
  it('renders to match initial snapshot', () => {
    const { container } = render(<Timer />)
    expect(container).toMatchSnapshot()
  })
})
