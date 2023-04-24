import { render } from '@testing-library/react'

import FeedbackIcon, { FeedbackIconProps } from './FeedbackIcon'

describe('FeedbackIcon', () => {
  let feedbackIconProps: FeedbackIconProps

  beforeEach(
    () =>
      (feedbackIconProps = {
        outcome: true,
        posX: 5,
        posY: 5
      })
  )

  it('renders to match snapshot', () => {
    const { container } = render(
      <FeedbackIcon
        outcome={feedbackIconProps.outcome}
        posX={feedbackIconProps.posX}
        posY={feedbackIconProps.posY}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
