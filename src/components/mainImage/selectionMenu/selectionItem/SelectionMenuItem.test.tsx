import { render } from '@testing-library/react'

import SelectionMenuItem from './SelectionMenuItem'

describe('SelectionMenuItem', () => {
  let onSelectionClick: () => void

  beforeEach((onSelectionClick = jest.fn()))

  it('renders to match snapshot', () => {
    const { container } = render(
      <SelectionMenuItem
        character={{ name: 'exampleChar', characterId: 'exampleId' }}
        onSelectionClick={onSelectionClick}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
