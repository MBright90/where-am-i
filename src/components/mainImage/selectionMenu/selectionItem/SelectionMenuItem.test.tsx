import { render } from '@testing-library/react'

import SelectionMenuItem from './SelectionMenuItem'

describe('SelectionMenuItem', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <SelectionMenuItem character={{ name: 'exampleChar', characterId: 'exampleId' }} />
    )
    expect(container).toMatchSnapshot()
  })
})
