import type { StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { ProfilePage } from './ProfilePage.tsx'

import { store } from '@/services/store.ts'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <ProfilePage />
    </Provider>
  ),
}
