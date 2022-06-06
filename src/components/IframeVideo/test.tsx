import { render, screen } from '@testing-library/react'

import IframeVideo from '.'

describe('<IframeVideo />', () => {
  it('should render the heading', () => {
    const { container } = render(<IframeVideo />)

    expect(screen.getByRole('heading', { name: /IframeVideo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
