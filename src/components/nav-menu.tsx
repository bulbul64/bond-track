'use client';

import Link from 'next/link';
import { useContext, type ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ChartLine, History, House, LayoutDashboardIcon } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { interactionHistoryContext } from '@/context/InteractionHistoryContext';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const pathname = usePathname();
 const context = useContext(interactionHistoryContext);

 if (!context) {
  return null;
}
 
const { state } = context;


console.log(state)


  const menuItems = [
    {
      title: 'Home',
      icon: <House />,
      link: '/',
    },
    {
      title: 'History',
      icon: <History />,
      link: '/history',
    },
    {
      title: 'Analytics',
      icon: <ChartLine />,
      link: '/analytics',
    },
    {
      title: 'Dashboard',
      icon: <LayoutDashboardIcon />,
      link: '/friends',
    },
  ];

  const isActive = (itemLink: string) => {
  if (itemLink === '/') return pathname === '/';
  return pathname.startsWith(itemLink);
};

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link href={item.link}>
                <Button
                  className="cursor-pointer w-full justify-start"
                 variant={isActive(item.link) ? 'default' : 'ghost'}
                > 
                  {item.icon}
                  {item.title}
                </Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};