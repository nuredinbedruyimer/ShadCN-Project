import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { discoveriesPageItems } from '@/config/menuItesConfig'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
  

const Navbar = () => {

    const [openLeftDialog, setOpenLeftDialog] = useState(false)

  return (
<NavigationMenu className='border-b px-12  mb-8 py-4 bg-white shadow-md w-full mx-0 z-40'>
  <NavigationMenuList className='hidden md:flex justify-between'>
  <NavigationMenuItem>
    <NavigationMenuLink className='cursor-pointer flex justify-between gap-4'>
      <LeftSheet openLeftDialog={openLeftDialog} setOpenLeftDialog={setOpenLeftDialog}/>
    <div>    <span className='text-3xl text-lime-500 font-extrabold'>N</span>
    <span className='text-3xl font-extrabold text-sky-500'>Anime</span></div>

    </NavigationMenuLink>
  </NavigationMenuItem>


    {/* Add visible link here without requiring a dropdown */}
    <NavigationMenuItem className='flex justify-between w-1/2'>
      <NavLink to={`/anime-list`} className={({isActive})=>`text-xl font-bold ${
      isActive ? "text-blue-500": "text-black"}`}>
        AnimeLists
      </NavLink>
      <NavLink to={`/community`} className={({isActive})=>`text-xl font-bold ${
      isActive ? "text-blue-500": "text-black"}`}>
        Community
      </NavLink>
      <NavLink to={`/discoveries`} className={({isActive})=>`text-xl font-bold ${
      isActive ? "text-blue-500": "text-black"}`}>
        
        <DropdownMenu className="">
  <DropdownMenuTrigger> <NavLink to={`/discoveries`}>Discoveries</NavLink></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className="text-center "> Discoveries</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
    {
        discoveriesPageItems.map(discoveriesItem=>{
            return(
                <DropdownMenuItem className="cursor-pointer"><NavLink>{discoveriesItem.name}</NavLink></DropdownMenuItem>
               
            )
        })
    }
    </div>


  </DropdownMenuContent>
</DropdownMenu>

      </NavLink>
      <NavLink to={`/profile`} className={({isActive})=>`text-xl font-bold ${
      isActive ? "text-blue-500": "text-black"}`}>
        Profile
      </NavLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  )
}

export default Navbar




const LeftSheet = ({ openLeftDialog, setOpenLeftDialog }) => {
    return (
        <Sheet side="left" open={openLeftDialog} onOpenChange={setOpenLeftDialog}>
            <SheetTrigger>
                <Menu size={32} color='blue' />
            </SheetTrigger>
            <SheetContent>
                <div className="p-4">
                    <h2 className="text-xl font-bold">Menu</h2>
                    {/* Add more content or links here */}
                </div>
            </SheetContent>
        </Sheet>
    );
};
  


