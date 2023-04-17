import { render } from '@testing-library/react'

import StartImageTile from './StartImageTile'

describe('StartImageTil', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<StartImageTile imageURL="exampleURL" imageId="exampleId" />)
    expect(container).toMatchSnapshot()
  })
})
