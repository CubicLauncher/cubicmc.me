"use client"

import { Download, Menu, Home, Info, Headphones, Mail, Globe } from 'lucide-react';
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
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { t, language } = useLanguage();

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`
            fixed top-0 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-full
            transition-all duration-500 ease-in-out
            ${isScrolled 
                ? 'bg-[#232323]/95 backdrop-blur-md shadow-lg shadow-black/30'
                : 'bg-[#232323]/80 backdrop-blur-sm shadow-md shadow-black/10'
            }
            flex justify-between items-center py-3 px-6 rounded-2xl border border-[#3a3a3a]
            backdrop-saturate-150
        `}>
            <div className="flex items-center relative z-10 pr-4 border-r border-[#3a3a3a]/60">
                <span className="text-white font-bold text-xl hover:text-gray-200 transition-all duration-300 hover:scale-105">Cubic</span>
                <span className="text-green-400 font-bold text-xl transition-all">Launcher</span>
            </div>
            
            <div className="flex gap-2 text-white relative z-10 pl-4">
                <button className="flex items-center gap-1 hover:text-gray-200 transition-all duration-200 rounded-lg px-3 py-1.5 border border-white/20 bg-gradient-to-br from-[#5271ff] to-[#395af4] hover:scale-105 hover:shadow-lg hover:shadow-[#5271ff]/30 focus:outline-none focus:ring-2 focus:ring-[#5271ff]/60">
                    <Download size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                    {t('header.downloads')}
                </button>
                <div className="flex items-center gap-1 hover:text-gray-200 transition-all duration-200 rounded-lg px-3 py-1.5 border border-white/20 hover:border-[#5271ff]/50 hover:bg-[#5271ff]/10 focus:outline-none focus:ring-2 focus:ring-[#5271ff]/60">
                    <Globe size={16} className="mr-2" />
                    <LanguageSwitcher />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger 
                        className={`flex items-center gap-1 hover:text-gray-200 transition-all duration-200 rounded-lg px-3 py-1.5 border border-white/20 hover:border-[#5271ff]/50 hover:bg-[#5271ff]/10 data-[state=open]:border-[#5271ff]/50 data-[state=open]:bg-[#5271ff]/10 focus:outline-none focus:ring-2 focus:ring-[#5271ff]/60 ${
                            language === 'en' ? 'text-white' : 'text-white/50 hover:text-white'
                        }`}
                    >
                        <Menu size={16} className="mr-2" />
                        {t('header.menu')}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                        className="bg-[#1a1a1a]/95 border-white/10 text-white/90 shadow-lg shadow-black/20 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                    >
                        <DropdownMenuItem className="group focus:bg-[#5271ff]/10 focus:text-white transition-colors duration-200">
                            <Home size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.home')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group focus:bg-[#5271ff]/10 focus:text-white transition-colors duration-200">
                            <Info size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.about')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group focus:bg-[#5271ff]/10 focus:text-white transition-colors duration-200">
                            <Headphones size={16} className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span className="font-medium">{t('header.services')}</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Nav;
