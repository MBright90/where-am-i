import { render } from '@testing-library/react'

import HowToPlay from './HowToPlay'

describe('HowToPlay', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<HowToPlay />)
    expect(container).toMatchSnapshot()
  })
})
