import { render } from '@testing-library/react'

import SettingsMenuReset from './SettingsMenuReset'

describe('SettingsMenuReset', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<SettingsMenuReset />)
    expect(container).toMatchSnapshot()
  })
})
