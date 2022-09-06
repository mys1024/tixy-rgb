import { describe, expect, it } from 'vitest'
import { render } from 'solid-testing-library'
import Intro from '~/component/Intro'

describe('Intro', () => {
  it('render', () => {
    const { container, unmount } = render(Intro)
    expect(container.innerHTML).toMatchSnapshot()
    unmount()
  })
})
