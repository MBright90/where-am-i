import { render } from '@testing-library/react'
import React from 'react'

import Checklist from './Checklist'

describe('Checklist', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<Checklist imageId={'exampleImage'} />)
    expect(container).toMatchSnapshot()
  })
})
