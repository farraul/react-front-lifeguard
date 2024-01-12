import { useState } from 'react';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';
import { Input } from 'src/components/ui/input';
import { Label } from 'src/components/ui/label';
import { useAppDispatch, useAppSelector } from 'src/hooks/useApp';
import { UserInfo } from 'src/models/user/user';
import { setCredentials } from 'src/store/user/userSlice';

export const PopUpEditProfile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<UserInfo>((state) => state.user.userInfo);
  const { id, name, lastName, age, location, experience } = user;

  const [profile, setProfile] = useState<UserInfo>(user);

  function handleChange(e: any) {
    const value = e.target.value;
    setProfile({ ...profile, [e.target.name]: value });
    console.log({ profile });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log({ profile });
    dispatch(setCredentials(profile));
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Editar perfil</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
            <DialogDescription>El email no se puede modificar.</DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Nombre
              </Label>
              <Input
                id='name'
                name='name'
                placeholder={profile.name}
                className='col-span-3'
                onChange={handleChange}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Apellidos
              </Label>
              <Input id='username' placeholder={lastName} className='col-span-3' />
            </div>

            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Edad
              </Label>
              <Input id='username' placeholder={age.toString()} className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Localidad
              </Label>
              <Input id='username' placeholder={location} className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Experiencia
              </Label>
              <Input id='username' placeholder={experience} className='col-span-3' />
            </div>
          </div>
          <DialogFooter onClick={handleSubmit}>
            <DialogClose>
              <Button type='submit'>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
