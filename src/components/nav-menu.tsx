'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ChartLine, History, House } from 'lucide-react';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F46E5] transition-colors"
          >
            <House /> Home
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link
            href="/history"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F46E5] transition-colors"
          >
            <History /> History
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F46E5] transition-colors"
          >
            <ChartLine /> Analytics
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
