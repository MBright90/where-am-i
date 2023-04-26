import { render } from '@testing-library/react'

import VictoryScreen from './VictoryScreen'

describe('VictoryScreen', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<VictoryScreen />)
    expect(container).toMatchSnapshot()
  })
})
