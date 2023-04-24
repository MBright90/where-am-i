import { render } from '@testing-library/react'

import SettingsMenu from './SettingsMenu'

describe('SettingsMenu', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<SettingsMenu />)
    expect(container).toMatchSnapshot()
  })
})
