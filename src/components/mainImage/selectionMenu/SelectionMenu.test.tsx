import { render } from '@testing-library/react'

import SelectionMenu from './SelectionMenu'

describe('SelectionMenu', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <SelectionMenu posX={5} posY={5} handleMenuClick={jest.fn()} showFeedback={jest.fn()} />
    )
    expect(container).toMatchSnapshot()
  })
})
