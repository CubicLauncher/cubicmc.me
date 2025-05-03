'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Download, Github } from 'lucide-react';
import { Features } from './Features';

function Hero() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen pb-32 relative overflow-hidden">
            <section className="flex flex-col items-center gap-8 mb-16 relative z-10">
                <div className="flex flex-col items-center">
                    <div className="flex items-center mt-24">
                        <h1 className="text-8xl font-semibold tracking-tighter text-white/80">
                            {t('hero.title')}
                        </h1>
                        <h1 className="text-8xl hover:text-white transition-colors duration-1000 font-semibold tracking-tighter bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/50 via-green/50 to-green-500 bg-clip-text text-transparent">
                            Launcher
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-white/70 text-lg font-medium text-center whitespace-pre-line">
                        {t('hero.subtitle')}
                    </p>
                    
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
                    <div className="mt-8 perspective-[1000px] group cursor-pointer"
                         onMouseMove={(e) => {
                             const card = e.currentTarget;
                             const rect = card.getBoundingClientRect();
                             const x = e.clientX - rect.left;
                             const y = e.clientY - rect.top;
                             const centerX = rect.width / 2;
                             const centerY = rect.height / 2;
                             const rotateX = ((y - centerY) / centerY) * 15;
                             const rotateY = ((x - centerX) / centerX) * 15;
                             card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                         }}
                         onMouseLeave={(e) => {
                             e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                             e.currentTarget.style.transition = 'all 0.5s ease';
                         }}>
                        <img 
                            src="https://cdn.modrinth.com/landing-new/launcher.webp" 
                            alt="Hero Image"
                            className="w-full max-w-2xl rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl" 
                        />
                    </div>
                </div>
            </section>
            <Features />
        </main>
    )
}

export default Hero;
