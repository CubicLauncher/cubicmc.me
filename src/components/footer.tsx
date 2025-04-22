'use client';

import { Github, Twitter, Heart } from 'lucide-react';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '@/lib/LanguageContext';

function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-[#232323]/80 backdrop-blur-xl border-t border-white/10 p-4 transition-all duration-300 hover:bg-[#232323]/90 hover:border-white/20">
            <div className="container mx-auto flex justify-between items-center text-white/70">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-sm font-medium hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-200">
                            <span className="text-white">Cubic</span>
                            <span className="text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">Launcher</span>
                        </p>
                        <p className="text-xs hover:text-white/90 transition-colors flex items-center gap-1.5 mt-1">
                            {t('footer.madeWith')} <Heart size={12} className="text-red-400 animate-pulse" /> {t('footer.byTeam')}
                        </p>
                    </div>
                    <div className="h-12 w-[1px] bg-white/10"></div>
                    <div className="flex flex-col">
                        <p className="text-sm font-medium hover:text-white transition-all duration-200">{t('footer.version')}</p>
                        <p className="text-xs text-white/50">{t('footer.beta')}</p>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <iframe 
                        src="https://status.cubicmc.me/badge?theme=dark" 
                        width="250" 
                        height="30" 
                        frameBorder="0" 
                        scrolling="no"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-6">
                        <a href="#" className="text-white/50 hover:text-white transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transform-gpu">
                            <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/50 hover:text-white transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transform-gpu">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-white/50 hover:text-white transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transform-gpu">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;