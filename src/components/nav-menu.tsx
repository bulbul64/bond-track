'use client';

import Link from 'next/link';
import { useState, type ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ChartLine, History, House,  } from 'lucide-react';
import { Button } from './ui/button';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {


  const [activeBtn, setActiveBtn] = useState('Home');
  console.log(activeBtn);

  const handleClick = (title: string) => {
    setActiveBtn(title);
  };

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
  ];

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link href={item.link} className={navigationMenuTriggerStyle()}>
                <Button
                  className="cursor-pointer"
                  onClick={() => handleClick(item.title)}
                  variant={activeBtn === item.title ? 'default' : 'ghost'}
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
