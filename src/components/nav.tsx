"use client"

import { Download, Menu, User, Settings, GamepadIcon, LogOut, Globe } from 'lucide-react';
import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';

function Nav() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useLanguage();

    return (
        <div className="flex justify-between items-center bg-[#232323]/80 rounded-lg p-2 px-4 backdrop-blur-xl my-2 mx-1 border border-white/10 transition-all duration-300 hover:border-white/20 group relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#5271ff]/0 before:to-[#5271ff]/0 before:transition-colors hover:before:from-[#5271ff]/10 hover:before:to-[#5271ff]/5">
            <div className="flex items-center relative z-10">
                <span className="text-white font-bold text-xl hover:text-gray-200 transition-all duration-300 hover:scale-105">Cubic</span>
                <span className="text-green-400 font-bold text-xl transition-all duration-300 hover:scale-105">Launcher</span>
            </div>
            
            <div className="flex gap-2 text-white relative z-10">
                <button className="flex items-center gap-1 hover:text-gray-200 transition-all duration-300 rounded-lg px-3 py-1.5 border border-white/20 bg-gradient-to-br from-[#5271ff] to-[#395af4] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#5271ff]/20">
                    <Download size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                    {t('header.downloads')}
                </button>
                <div className="flex items-center gap-1 hover:text-gray-200 transition-all duration-300 rounded-lg px-3 py-1.5 border border-white/20 hover:border-[#5271ff]/50 hover:bg-[#5271ff]/10">
                    <Globe size={16} className="mr-2" />
                    <LanguageSwitcher />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger 
                        className="flex items-center gap-1 hover:text-gray-200 transition-all duration-300 rounded-lg px-3 py-1.5 border border-white/20 hover:border-[#5271ff]/50 hover:bg-[#5271ff]/10 data-[state=open]:border-[#5271ff]/50 data-[state=open]:bg-[#5271ff]/10"
                    >
                        <Menu size={16} className="mr-2" />
                        {t('header.menu')}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                        className="bg-[#1a1a1a] border-white/10 text-white/90 shadow-lg shadow-black/20 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                    >
                        <DropdownMenuLabel className="text-white/50">{t('header.myAccount')}</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem className="group focus:bg-[#5271ff]/10 focus:text-white transition-colors duration-200">
                            <User size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.profile')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group focus:bg-[#5271ff]/10 focus:text-white transition-colors duration-200">
                            <Settings size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.settings')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group focus:bg-[#5271ff]/10 focus:text-white transition-colors duration-200">
                            <GamepadIcon size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.myGames')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem className="group focus:bg-red-500/10 focus:text-red-400 text-red-400/70 transition-colors duration-200">
                            <LogOut size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.logout')}</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Nav;
