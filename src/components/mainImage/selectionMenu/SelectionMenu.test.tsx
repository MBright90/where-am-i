import { render } from '@testing-library/react'

import SelectionMenu from './SelectionMenu'

describe('SelectionMenu', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<SelectionMenu menuX={5} menuY={5} />)
    expect(container).toMatchSnapshot()
  })
})
