'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export const ThemeDropdownToggle = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const ThemeSwtichToggle = () => {
    const { setTheme } = useTheme();
    const [isDarkTheme, setDarkTheme] = useState<boolean>();

    return (
        <div className="flex items-center space-x-2">
            <Switch
                id="theme-switch"
                checked={isDarkTheme}
                onCheckedChange={(checked: boolean) => {
                    setDarkTheme(checked);
                    setTheme(checked ? 'dark' : 'light');
                }}
            />
            <Label htmlFor="theme-switch">
                {isDarkTheme ? (
                    <Moon className="transition ease-in-out" />
                ) : (
                    <Sun className="transition ease-in-out" />
                )}
            </Label>
        </div>
    );
};
