'use client';

import { useState, useMemo, useEffect, CSSProperties } from 'react';
import { COPY, TECH_STACK, CONNECT_LINKS, DEFAULT_LANG, Lang } from '@/lib/copy';

const ACCENT = 'oklch(0.78 0.11 85)';
const BORDER = 'oklch(0.28 0 0)';
const MUTED = 'oklch(0.55 0 0)';
const MONO = "'JetBrains Mono', monospace";
const LANG_STORAGE_KEY = 'portfolio-lang';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

type Page = 'home' | 'contact';

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [page, setPage] = useState<Page>('home');
  const [fading, setFading] = useState(false);

  const isFa = lang === 'fa';
  const t = COPY[lang];
  const isHome = activeIndex === null && page !== 'contact';
  const isContact = page === 'contact';
  const isDetail = activeIndex !== null;
  const activeProject = activeIndex !== null ? t.projects[activeIndex] : null;

  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'fa') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';
  }, [lang, isFa]);

  const nameLetters = useMemo(() => 'Shitanshu Kumar'.split('').map((c) => (c === ' ' ? '\u00A0' : c)), []);

  function transition(fn: () => void) {
    setFading(true);
    setTimeout(() => {
      fn();
      setFading(false);
    }, 180);
  }

  const goHome = (e: React.MouseEvent) => { e.preventDefault(); transition(() => { setActiveIndex(null); setPage('home'); }); };
  const goContact = (e: React.MouseEvent) => { e.preventDefault(); transition(() => { setActiveIndex(null); setPage('contact'); }); };
  const openDetail = (i: number) => (e: React.MouseEvent) => { e.preventDefault(); transition(() => { setActiveIndex(i); setPage('home'); }); };
  const switchLang = (l: Lang) => {
    window.localStorage.setItem(LANG_STORAGE_KEY, l);
    transition(() => setLang(l));
  };

  const rootStyle: CSSProperties = {
    fontFamily: isFa ? `'Vazirmatn', ${MONO}` : MONO,
    background: '#0a0a0a',
    color: '#fafafa',
    minHeight: '100vh',
    opacity: fading ? 0 : 1,
    transform: fading ? 'translateY(6px)' : 'translateY(0)',
    transition: 'opacity 0.22s ease, transform 0.22s ease',
  };

  const wrap: CSSProperties = { maxWidth: 880, margin: '0 auto', padding: '0 24px' };

  return (
    <div dir={isFa ? 'rtl' : 'ltr'} style={rootStyle}>
      {/* GRID BACKGROUND SECTION: header + hero + stack */}
      <div style={{
        position: 'relative',
        backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`,
        backgroundSize: '400px 400px',
        backgroundPosition: 'center top',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 6%, black 92%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 92%, transparent)',
      }}>
        <header style={{ ...wrap, padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px dashed ${BORDER}` }}>
          <a href="#" onClick={goHome} style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em', fontFamily: MONO, color: '#fafafa' }}>
            shitanshu<span style={{ color: ACCENT }}>.</span>dev
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 13, color: MUTED }}>
            <a href="#projects" style={{ color: MUTED }}>{t.navProjects}</a>
            <a href="#blogs" style={{ color: MUTED }}>{t.navBlogs}</a>
            <a href="#" onClick={goContact} style={{ color: MUTED }}>{t.navContact}</a>
            <div style={{ display: 'flex', fontSize: 12, fontFamily: MONO, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden' }}>
              <button onClick={() => switchLang('en')} style={{ border: 'none', background: !isFa ? ACCENT : 'transparent', color: !isFa ? '#0a0a0a' : MUTED, padding: '5px 10px', cursor: 'pointer', fontFamily: 'inherit' }}>EN</button>
              <button onClick={() => switchLang('fa')} style={{ border: 'none', borderInlineStart: `1px solid ${BORDER}`, background: isFa ? ACCENT : 'transparent', color: isFa ? '#0a0a0a' : MUTED, padding: '5px 10px', cursor: 'pointer', fontFamily: 'inherit' }}>FA</button>
            </div>
          </nav>
        </header>

        {!isHome && (
          <a href="#" onClick={goHome} style={{ position: 'fixed', bottom: 28, insetInlineStart: 28, zIndex: 20, display: 'flex', alignItems: 'center', gap: 8, background: '#0a0a0a', border: '1px solid oklch(0.32 0 0)', color: '#fafafa', padding: '10px 16px', borderRadius: 30, fontSize: 13, fontFamily: MONO, boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
            {t.backLabel}
          </a>
        )}

        {isHome && (
          <>
            <section style={{ ...wrap, padding: '96px 24px 80px' }}>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>
                <span style={{ color: ACCENT, fontFamily: MONO }}>$</span> {t.whoami}
                <span style={{ display: 'inline-block', width: 7, height: 14, background: '#fafafa', marginInlineStart: 6, verticalAlign: -2, animation: 'blink 1s step-start infinite' }} />
              </div>
              <h1 dir="ltr" style={{ fontSize: 44, lineHeight: 1.15, margin: '0 0 16px', letterSpacing: '-0.02em', fontWeight: 700, display: 'flex', flexWrap: 'wrap', justifyContent: isFa ? 'flex-end' : 'flex-start' }}>
                {nameLetters.map((ch, i) => (
                  <span key={i} className="letter" style={{ display: 'inline-block', transition: 'transform 0.25s ease, color 0.25s ease' }}>{ch}</span>
                ))}
              </h1>
              <p style={{ fontSize: 17, color: 'oklch(0.65 0 0)', maxWidth: 560, lineHeight: 1.6, margin: '0 0 32px' }}>{t.heroDesc}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
                <a href="#" onClick={goContact} style={{ background: ACCENT, color: '#0a0a0a', padding: '10px 20px', fontSize: 13, borderRadius: 2, fontWeight: 600 }}>{t.ctaContact}</a>
                <a href="#" style={{ background: '#fafafa', color: '#0a0a0a', padding: '10px 20px', fontSize: 13, borderRadius: 2, fontWeight: 600 }}>{t.ctaResume}</a>
              </div>
            </section>

            <section style={{ ...wrap, padding: '0 24px 80px' }}>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 16, letterSpacing: '0.08em', fontFamily: MONO, direction: 'ltr', textAlign: isFa ? 'right' : 'left' }}>// {t.stackLabel}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {TECH_STACK.map((tech) => (
                  <span key={tech} style={{ fontSize: 13, padding: '7px 14px', border: `1px solid ${BORDER}`, borderRadius: 2, color: 'oklch(0.75 0 0)' }}>{tech}</span>
                ))}
              </div>
            </section>
          </>
        )}

        {isDetail && activeProject && (
          <section style={{ ...wrap, padding: '64px 24px 40px' }}>
            <a href="#" onClick={goHome} style={{ fontSize: 12, color: MUTED, fontFamily: MONO }}>{t.backLabel}</a>
            <h1 style={{ fontSize: 38, fontWeight: 700, margin: '20px 0 16px', letterSpacing: '-0.01em' }}>{activeProject.name}</h1>
            <p style={{ fontSize: 16, color: 'oklch(0.62 0 0)', maxWidth: 640, lineHeight: 1.7, margin: '0 0 24px' }}>{activeProject.desc}</p>
            <a href={activeProject.sourceHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid oklch(0.32 0 0)', color: '#fafafa', padding: '9px 18px', fontSize: 13, borderRadius: 4, fontWeight: 600 }}>
              <GithubIcon /> {t.viewSourceLabel}
            </a>
          </section>
        )}
      </div>

      {isDetail && activeProject && (
        <section style={{ ...wrap, padding: '0 24px 80px' }}>
          <div style={{ aspectRatio: '16/8', background: 'repeating-linear-gradient(45deg, oklch(0.2 0 0), oklch(0.2 0 0) 8px, oklch(0.16 0 0) 8px, oklch(0.16 0 0) 16px)', border: `1px solid ${BORDER}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'oklch(0.45 0 0)', marginBottom: 56 }}>screenshot</div>

          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>{t.techUsedLabel}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 56 }}>
            {activeProject.techs.map((tech, i) => (
              <span key={i} style={{ fontSize: 13, padding: '8px 16px', border: `1px solid ${BORDER}`, borderRadius: 4, color: 'oklch(0.8 0 0)', fontFamily: MONO }}>{tech}</span>
            ))}
          </div>

          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>{t.aboutLabel}</div>
          <p style={{ fontSize: 14, color: 'oklch(0.62 0 0)', lineHeight: 1.75, marginBottom: 56 }}>{activeProject.about}</p>

          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>{t.featuresLabel}</div>
          <ul style={{ margin: 0, paddingInlineStart: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {activeProject.features.map((f, i) => (
              <li key={i} style={{ fontSize: 14, color: 'oklch(0.68 0 0)', lineHeight: 1.6 }}>{f}</li>
            ))}
          </ul>
        </section>
      )}

      {isHome && (
        <>
          <section id="projects" style={{ ...wrap, padding: '0 24px 80px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              <div style={{ fontSize: 12, color: MUTED, letterSpacing: '0.08em', fontFamily: MONO }}>// {t.projectsLabel}</div>
              <a href="#" style={{ fontSize: 12, color: MUTED }}>{t.viewAll}</a>
            </div>
            <div style={{ display: 'grid', gap: 1, background: BORDER, border: `1px solid ${BORDER}` }}>
              {t.projects.map((p, i) => (
                <div key={i} style={{ background: '#0a0a0a', padding: 24, display: 'grid', gridTemplateColumns: '140px 1fr auto', gap: 20, alignItems: 'center', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: -5, left: -4, width: 10, height: 10, background: ACCENT }} />
                  <span style={{ position: 'absolute', top: 152, left: -4, width: 10, height: 10, background: ACCENT }} />
                  <span style={{ position: 'absolute', top: -5, right: -3, width: 10, height: 10, background: ACCENT }} />
                  <span style={{ position: 'absolute', top: 152, right: -3, width: 10, height: 10, background: ACCENT }} />
                  <div style={{ aspectRatio: '4/3', background: 'repeating-linear-gradient(45deg, oklch(0.2 0 0), oklch(0.2 0 0) 6px, oklch(0.16 0 0) 6px, oklch(0.16 0 0) 12px)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'oklch(0.45 0 0)', textAlign: 'center', padding: 6 }}>screenshot</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: 'oklch(0.6 0 0)', lineHeight: 1.55, marginBottom: 8 }}>{p.desc}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>{p.tags}</div>
                  </div>
                  <a href="#" onClick={openDetail(i)} style={{ fontSize: 13, whiteSpace: 'nowrap', color: ACCENT }}>{t.detailsLabel}</a>
                </div>
              ))}
            </div>
          </section>

          <section id="blogs" style={{ ...wrap, padding: '0 24px 80px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              <div style={{ fontSize: 12, color: MUTED, letterSpacing: '0.08em', fontFamily: MONO }}>// {t.writingLabel}</div>
              <a href="#" style={{ fontSize: 12, color: MUTED }}>{t.viewAll}</a>
            </div>
            {t.blogs.map((b, i) => (
              <a key={i} href={b.href} style={{ display: 'block', padding: '18px 0', borderBottom: '1px solid oklch(0.22 0 0)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 6 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fafafa' }}>{b.title}</div>
                  <div style={{ fontSize: 12, color: MUTED, whiteSpace: 'nowrap' }}>{b.date} · {b.readTime}</div>
                </div>
                <div style={{ fontSize: 13, color: 'oklch(0.58 0 0)', lineHeight: 1.5 }}>{b.excerpt}</div>
              </a>
            ))}
          </section>

          <section style={{ ...wrap, padding: '0 24px 80px' }}>
            <div style={{ fontSize: 12, color: MUTED, marginBottom: 16, letterSpacing: '0.08em', fontFamily: MONO }}>// {t.activityLabel}</div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 2, padding: 40, textAlign: 'center', fontSize: 12, color: 'oklch(0.45 0 0)' }}>{t.activityPlaceholder}</div>
          </section>
        </>
      )}

      {isContact && (
        <section style={{ ...wrap, padding: '64px 24px 80px', borderTop: `1px solid ${BORDER}` }}>
          <a href="#" onClick={goHome} style={{ fontSize: 12, color: MUTED, fontFamily: MONO, display: 'block', marginBottom: 24 }}>{t.backLabel}</a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, padding: '48px 0' }}>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 20px', letterSpacing: '-0.01em' }}>{t.connectTitle}</h2>
              <p style={{ fontSize: 15, color: 'oklch(0.6 0 0)', lineHeight: 1.7, maxWidth: 380 }}>{t.connectDesc}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CONNECT_LINKS.map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', border: `1px solid ${BORDER}`, borderRadius: 6, color: '#fafafa', fontSize: 14 }}>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: MONO }}>{c.mono}</span>
                  <span style={{ flex: 1 }}>{c.label}</span>
                  <span style={{ color: MUTED }}>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, paddingTop: 24, borderTop: `1px dashed ${BORDER}` }}>
            <div style={{ fontSize: 13, color: MUTED }}>{t.footerCredit}</div>
            <a href="mailto:hello@example.com" style={{ fontSize: 13, color: ACCENT, direction: 'ltr' }}>{t.emailLine}</a>
          </div>
        </section>
      )}

      <style jsx global>{`
        .letter:hover { transform: rotate(12deg) translateY(-2px); color: ${ACCENT}; }
      `}</style>
    </div>
  );
}
