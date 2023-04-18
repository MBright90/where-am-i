import { render } from '@testing-library/react'

import StartScreen from './StartScreen'

describe('StartScreen', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <StartScreen locationImageIdArr={['exampleImage1', 'exampleImage2']} />
    )
    expect(container).toMatchSnapshot()
  })
})
