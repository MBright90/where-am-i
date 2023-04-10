import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe("app", () => {
  it("renders app to match snapshot", () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
