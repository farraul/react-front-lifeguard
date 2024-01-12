import { useNavigate } from 'react-router-dom';
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

export function DropDownMenu() {
  const navigate = useNavigate();

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

        <DropdownMenuItem className='cursor-pointer'>
          Log out
          <DropdownMenuShortcut>→</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
