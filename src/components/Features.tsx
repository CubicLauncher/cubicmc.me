'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Code, Shield, Zap, Palette } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500/20">
      <Icon size={24} className="group-hover:animate-pulse" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-emerald-100 mb-2 group-hover:text-emerald-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t('hero.features.openSource.title'),
      description: t('hero.features.openSource.description')
    },
    {
      icon: Shield,
      title: t('hero.features.drmFree.title'),
      description: t('hero.features.drmFree.description')
    },
    {
      icon: Zap,
      title: t('hero.features.performance.title'),
      description: t('hero.features.performance.description')
    },
    {
      icon: Palette,
      title: t('hero.features.customization.title'),
      description: t('hero.features.customization.description')
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
