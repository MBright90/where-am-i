import { render } from '@testing-library/react'

import StartScreen from './StartScreen'

describe('StartScreen', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<StartScreen />)
    expect(container).toMatchSnapshot()
  })
})
