import { fireEvent, render } from '@testing-library/react'
import LoginForm from 'components/user/LoginForm/LoginForm'
import { act } from 'react-dom/test-utils'

describe('Login', () => {
  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn()
      const { getByLabelText, getByRole } = render(<LoginForm />)
      const form = getByRole('form')
      form.onsubmit = mockOnSubmit

      await act(async () => {
        fireEvent.change(getByLabelText('Email'), { target: { value: 'email@test.com' } })
        fireEvent.change(getByLabelText('Password'), { target: { value: 'email123' } })
      })

      await act(async () => {
        fireEvent.click(getByRole('button'))
      })

      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })

  describe('with invalid email', () => {
    it('renders the email validation error', async () => {
      const { getByLabelText, container } = render(<LoginForm />)

      await act(async () => {
        const emailInput = getByLabelText('Email')
        fireEvent.change(emailInput, { target: { value: 'invalid email value' } })
        fireEvent.blur(emailInput)
      })

      expect(container.innerHTML).toMatch('Please enter a valid email')
    })
  })

  describe('with invalid password', () => {
    it('renders the password validation error', async () => {
      const { getByLabelText, container } = render(<LoginForm />)

      await act(async () => {
        const passwordInput = getByLabelText('Password')
        fireEvent.change(passwordInput, { target: { value: 'abc' } })
        fireEvent.blur(passwordInput)
      })

      expect(container.innerHTML).toMatch('Password should be more than 6 letters')
    })
  })
})
