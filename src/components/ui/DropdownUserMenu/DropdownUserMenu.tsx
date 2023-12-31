import { Popover } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'

import s from './DropdownUserMenu.module.scss'

import { ReactComponent as BeakTopIcon } from '@/assets/svg/beakTop.svg'
import { ReactComponent as LogoutIcon } from '@/assets/svg/logoutIcon.svg'
import { ReactComponent as PersonIcon } from '@/assets/svg/person.svg'
import { Avatar, Button, Typography, TypographyVariant } from '@/components/ui'
import { AuthRegisterResponse } from '@/services/auth'
import { useLogoutMutation } from '@/services/auth/authApi.ts'
import { getInitials } from '@/utils/helpers'

interface DropdownUserMenuProps {
  userData: AuthRegisterResponse
}

export const DropdownUserMenu = ({ userData }: DropdownUserMenuProps) => {
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => navigate('/'))
      .catch(err => console.error(err))
  }

  return (
    <Popover className={s.popover}>
      <Popover.Button className={s.action}>
        <div className={s.actions}>
          <Typography variant={TypographyVariant.Subtitle1} className={s.username}>
            {userData.name}
          </Typography>
          {userData.avatar ? (
            <Avatar src={userData.avatar} cursor="pointer" />
          ) : (
            <Avatar avatarFallback={getInitials(userData?.name)} cursor="pointer" />
          )}
        </div>
      </Popover.Button>

      <Popover.Panel className={s.content}>
        {({ close }) => (
          <div className={s.userMenu}>
            <BeakTopIcon className={s.beakTopIcon} />
            <div className={s.info}>
              {userData.avatar ? (
                <Avatar src={userData.avatar} cursor="auto" />
              ) : (
                <Avatar avatarFallback={getInitials(userData?.name)} cursor="auto" />
              )}
              <div className={s.name}>
                <Typography variant={TypographyVariant.Subtitle2}>{userData?.name}</Typography>
                <Typography variant={TypographyVariant.Caption} className={s.email}>
                  {userData?.email}
                </Typography>
              </div>
            </div>
            <div className={s.hr} />
            <Button
              as={Link}
              to="/profile"
              variant="link"
              className={s.btn}
              onClick={() => close()}
            >
              <PersonIcon />
              <Typography variant={TypographyVariant.Caption}>My Profile</Typography>
            </Button>
            <div className={s.hr} />
            <Button variant="link" className={s.btn} onClick={handleLogout}>
              <LogoutIcon />
              <Typography variant={TypographyVariant.Caption}>Sign Out</Typography>
            </Button>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  )
}
