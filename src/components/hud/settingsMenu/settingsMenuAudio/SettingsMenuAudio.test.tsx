import { render } from '@testing-library/react'

import SettingsMenuAudio from './SettingsMenuAudio'

describe('SettingsMenuAudio', () => {
  it('renders to match snapshot', () => {
    const { container } = render(<SettingsMenuAudio />)
    expect(container).toMatchSnapshot()
  })
})
