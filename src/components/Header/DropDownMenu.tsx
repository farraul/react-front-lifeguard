import { useNavigate } from 'react-router-dom';
import jwtService from 'src/auth/jwtService';
import { Button } from 'src/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import { useAppDispatch } from 'src/hooks/useApp';
import { logout } from 'src/store/user/userSlice';

export function DropDownMenu() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // setToken('');
    navigate('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menú</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56'>
        <DropdownMenuItem className='cursor-pointer' onClick={() => navigate('/')}>
          Home
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className='cursor-pointer' onClick={() => navigate('/profile')}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className='cursor-pointer'
          onClick={() => {
            console.log('out'), jwtService.logout(), navigate('/');
          }}
        >
          Log out
          <DropdownMenuShortcut>→</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
