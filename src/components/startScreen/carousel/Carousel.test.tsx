import { render } from '@testing-library/react'

import Carousel from './Carousel'

describe('Carousel', () => {
  it('renders to match snapshot', () => {
    const { container } = render(
      <Carousel>
        <div>Child one</div>
        <div>Child two</div>
      </Carousel>
    )
    expect(container).toMatchSnapshot()
  })
})
