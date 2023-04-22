import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Fetch from './fetch'

test('loads and displays submit rate btn', async () => {
  render(<Fetch url="/bookinfo/41" />)

  const rate_btn = await screen.findByTestId("submit-rate-btn")

  console.log(rate_btn)

  expect(screen.getByTestId("submit-rate-btn")).toHaveTextContent('ثبت نظر')
})