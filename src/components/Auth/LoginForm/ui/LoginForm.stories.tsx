import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components/Auth/LoginForm'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
