'use client';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';

import Button from '@mui/joy/Button';

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';

import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import styles from './NavBar.module.scss';

import Login from '../common/Login';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie';
import { updateAuthDetails } from '@/redux/features/auth/authSlice';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const isUserLoggedIn = useSelector((state: RootState) => state.isUserLoggedIn);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(updateAuthDetails(false));
    Cookies.remove('accessToken', { path: '' });
  };
  return (
    <Box
      className={styles.navbar}
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Link href="/">
          <IconButton
            size="md"
            variant="outlined"
            color="neutral"
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              borderRadius: '50%',
            }}
          >
            <LanguageRoundedIcon />
          </IconButton>
        </Link>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        {!isUserLoggedIn ? (
          <Button onClick={() => setIsLoginModalVisible(true)} variant="plain">
            <Typography level="title-sm" textColor="text.primary">
              Login
            </Typography>
          </Button>
        ) : null}
        <Dropdown>
          <MenuButton variant="plain" size="sm" sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}>
            Menu
          </MenuButton>
          <Menu
            placement="bottom-end"
            size="sm"
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
            }}
          >
            <MenuItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ ml: 1.5 }}>
                  <Typography level="title-sm" textColor="text.primary">
                    User
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <ListDivider />
            {isUserLoggedIn ? (
              <>
                {' '}
                <MenuItem>
                  <Link href="/bookings">
                    <HelpRoundedIcon />
                    Bookings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <SettingsRoundedIcon />
                  Settings
                </MenuItem>
                <ListDivider />
                <ListDivider />
                <MenuItem onClick={handleLogOut}>
                  <LogoutRoundedIcon />
                  Log out
                </MenuItem>
              </>
            ) : null}
          </Menu>
        </Dropdown>
      </Box>

      <Login isVisible={isLoginModalVisible} setIsVisible={setIsLoginModalVisible} />
    </Box>
  );
}
