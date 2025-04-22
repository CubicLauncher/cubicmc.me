'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Download, Github } from 'lucide-react';

function Hero() {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center">
                    <h1 className="text-8xl font-semibold tracking-tighter text-white/80">
                        {t('hero.title')}
                    </h1>
                    <h1 className="text-8xl hover:text-white transition-colors duration-1000 font-semibold tracking-tighter bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/50 via-green/50 to-green-500 bg-clip-text text-transparent">
                        Launcher
                    </h1>
                </div>
                <p className="text-white/70 text-lg font-medium">{t('hero.subtitle')}</p>
                
                <div className="flex gap-4 mt-8">
                    <button className="flex items-center gap-2 hover:text-gray-200 transition-all duration-300 rounded-lg px-6 py-3 border border-white/20 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20">
                        <Download size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                        {t('hero.download')}
                    </button>
                    <button className="flex items-center gap-2 text-gray-200 transition-all duration-300 rounded-lg px-6 py-3 border border-[#5271ff]/50 bg-[#5271ff]/10 hover:scale-105">
                        <Github size={20} className="transition-transform duration-300 hover:rotate-12" />
                        {t('hero.openSource')}
                    </button>
                </div>
            </div>
        </section>
    )
}
    
export default Hero;