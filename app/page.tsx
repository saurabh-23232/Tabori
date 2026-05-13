'use client';

import { AnimatedCard } from '@/components/AnimatedCard';
import { GlassmorphicPanel } from '@/components/GlassmorphicPanel';
import { ScrollSection } from '@/components/ScrollSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, BarChart3, Infinity, Users, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-pink-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 hover-scale">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tabori-vGzNFbq7xnLz3riI81AFD48Unns2WK.png"
                alt="Tabori Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gradient">Tabori</span>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#features" className="text-foreground/60 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#benefits" className="text-foreground/60 hover:text-cyan-400 transition-colors">Benefits</a>
              <a href="#faq" className="text-foreground/60 hover:text-cyan-400 transition-colors">FAQ</a>
              <button className="px-6 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30 hover:border-cyan-500 transition-all">
                Install
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <ScrollSection className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8" showGrid={true}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="space-y-8">
                <AnimatedCard animation="fade-up" delay={0}>
                  <div className="inline-block px-4 py-2 rounded-full glass-effect text-cyan-400 text-sm font-semibold">
                    ✨ Welcome to the Future of Browsing
                  </div>
                </AnimatedCard>

                <AnimatedCard animation="fade-up" delay={100}>
                  <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
                    <span className="text-gradient">Smart Tab</span>
                    <br />
                    <span>Management Chrome</span>
                  </h1>
                </AnimatedCard>

                <AnimatedCard animation="fade-up" delay={200}>
                  <p className="text-xl text-foreground/70 leading-relaxed">
                    Experience the future of browser organization. Tabori intelligently categorizes, searches, and manages your tabs with AI-powered precision and futuristic design.
                  </p>
                </AnimatedCard>

                <AnimatedCard animation="fade-up" delay={300}>
                  <div className="flex gap-4">
                    <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold hover-lift hover:brightness-110 transition-all">
                      Install Now
                      <ArrowRight className="inline ml-2 w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-lg glass-effect text-cyan-400 font-bold border border-cyan-500/50 hover-lift hover:border-cyan-500 hover:bg-cyan-500/20 transition-all">
                      See Demo
                    </button>
                  </div>
                </AnimatedCard>
              </div>

              {/* Right side - Floating cards */}
              <div className="relative h-96 hidden lg:block">
                <AnimatedCard animation="slide-right" delay={200} className="absolute top-0 right-0 w-48">
                  <GlassmorphicPanel hover="scale">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold text-cyan-400">Lightning Fast</span>
                    </div>
                    <p className="text-sm text-foreground/70">Tab organization in milliseconds</p>
                  </GlassmorphicPanel>
                </AnimatedCard>

                <AnimatedCard animation="slide-right" delay={400} className="absolute top-32 left-0 w-48">
                  <GlassmorphicPanel hover="scale">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="font-semibold text-purple-400">Privacy First</span>
                    </div>
                    <p className="text-sm text-foreground/70">Your data stays local and secure</p>
                  </GlassmorphicPanel>
                </AnimatedCard>

                <AnimatedCard animation="slide-right" delay={600} className="absolute bottom-0 right-12 w-48">
                  <GlassmorphicPanel hover="scale">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-5 h-5 text-pink-400" />
                      <span className="font-semibold text-pink-400">Productivity +200%</span>
                    </div>
                    <p className="text-sm text-foreground/70">Manage tabs like never before</p>
                  </GlassmorphicPanel>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Problem Section */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-4xl font-bold text-center mb-4">The Problem with Tabs</h2>
            </AnimatedCard>
            <AnimatedCard animation="fade-up" delay={100}>
              <p className="text-center text-foreground/60 mb-12">Sound familiar?</p>
            </AnimatedCard>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '47 Open Tabs', desc: 'And you can only see 3 titles' },
                { title: 'Tab Chaos', desc: 'No organization, pure browser hell' },
                { title: 'Memory Drain', desc: 'Your browser crawls to a halt' },
              ].map((item, i) => (
                <AnimatedCard key={i} animation="fade-up" delay={200 + i * 100}>
                  <GlassmorphicPanel hover="lift" className="h-full">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </GlassmorphicPanel>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Solution Section */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8" id="features">
          <div className="max-w-6xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-4xl font-bold text-center mb-4">The Solution: Tabori</h2>
            </AnimatedCard>
            <AnimatedCard animation="fade-up" delay={100}>
              <p className="text-center text-foreground/60 mb-16">Revolutionary tab management powered by AI</p>
            </AnimatedCard>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Infinity,
                  title: 'Unlimited Capacity',
                  desc: 'Organize hundreds of tabs with zero performance impact',
                },
                {
                  icon: Sparkles,
                  title: 'AI-Powered Sorting',
                  desc: 'Automatically categorizes tabs by content and context',
                },
                {
                  icon: Shield,
                  title: 'Zero Data Collection',
                  desc: 'Everything stays on your device. We never see your data.',
                },
                {
                  icon: BarChart3,
                  title: 'Productivity Tracking',
                  desc: 'Understand your browsing patterns and optimize time',
                },
              ].map((feature, i) => (
                <AnimatedCard key={i} animation="fade-up" delay={200 + i * 100}>
                  <GlassmorphicPanel hover="lift">
                    <div className="flex items-start gap-4">
                      <feature.icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-foreground/70">{feature.desc}</p>
                      </div>
                    </div>
                  </GlassmorphicPanel>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* How It Works */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
            </AnimatedCard>

            <div className="space-y-8">
              {[
                { step: '1', title: 'Install', desc: 'Add Tabori to your browser in seconds' },
                { step: '2', title: 'Organize', desc: 'Watch as AI automatically categorizes your tabs' },
                { step: '3', title: 'Optimize', desc: 'Access any tab instantly with smart search' },
                { step: '4', title: 'Master', desc: 'Become a tab ninja with keyboard shortcuts' },
              ].map((item, i) => (
                <AnimatedCard key={i} animation="slide-left" delay={i * 100}>
                  <div className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full glass-effect flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Use Cases */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16">Perfect For</h2>
            </AnimatedCard>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: '👨‍💻', title: 'Developers', desc: 'Keep dozens of docs and tools organized' },
                { emoji: '📚', title: 'Researchers', desc: 'Manage complex research tabs effortlessly' },
                { emoji: '💼', title: 'Professionals', desc: 'Stay focused with intelligent tab grouping' },
              ].map((item, i) => (
                <AnimatedCard key={i} animation="scale" delay={i * 150}>
                  <GlassmorphicPanel hover="scale" className="h-full flex flex-col items-center text-center">
                    <div className="text-5xl mb-4">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </GlassmorphicPanel>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Benefits Section */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8" id="benefits">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16">Why Choose Tabori?</h2>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                '⚡ Instant tab access with search',
                '🧠 AI learns your browsing patterns',
                '🔐 100% Private - no tracking',
                '⌨️ Keyboard shortcuts for power users',
                '🎨 Stunning futuristic UI',
                '📊 Detailed productivity insights',
                '🔄 Sync across devices (coming soon)',
                '🚀 Blazing fast performance',
              ].map((benefit, i) => (
                <AnimatedCard key={i} animation="slide-left" delay={i * 50}>
                  <div className="flex items-center gap-3 p-4 rounded-lg glass-effect group hover:bg-cyan-500/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground/80 group-hover:text-cyan-400 transition-colors">{benefit}</span>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Privacy Section */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <GlassmorphicPanel hover="lift" className="text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Your Privacy is Sacred</h2>
                <p className="text-foreground/70 mb-6">
                  Tabori processes everything locally on your device. We don't collect, store, or sell any data about your tabs or browsing. Ever.
                </p>
                <p className="text-sm text-cyan-400 font-semibold">
                  Open source & independently audited
                </p>
              </GlassmorphicPanel>
            </AnimatedCard>
          </div>
        </ScrollSection>

        {/* FAQ Section */}
        <ScrollSection className="py-24 px-4 sm:px-6 lg:px-8" id="faq">
          <div className="max-w-3xl mx-auto">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            </AnimatedCard>

            <div className="space-y-4">
              {[
                {
                  q: 'Will Tabori slow down my browser?',
                  a: 'No. Tabori is optimized for performance and uses minimal resources. Most users see improved browser speed.',
                },
                {
                  q: 'Can I use it on multiple devices?',
                  a: 'Currently Tabori works on individual devices. Cross-device sync is coming in Q3 2060.',
                },
                {
                  q: 'Is it really free?',
                  a: 'Yes, completely free. We believe privacy should be universal.',
                },
                {
                  q: 'What about my existing tabs?',
                  a: 'Tabori works seamlessly with your current tabs. Install and they\'re automatically organized.',
                },
              ].map((item, i) => (
                <AnimatedCard key={i} animation="fade-up" delay={i * 100}>
                  <details className="group glass-effect rounded-lg p-6 cursor-pointer transition-all hover:border-cyan-500/50">
                    <summary className="flex items-center justify-between font-semibold text-foreground">
                      <span>{item.q}</span>
                      <MessageCircle className="w-5 h-5 text-cyan-400 group-open:text-pink-400 transition-colors" />
                    </summary>
                    <p className="mt-4 text-foreground/70">{item.a}</p>
                  </details>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedCard animation="fade-up" delay={0}>
              <h2 className="text-5xl font-bold mb-6">
                Ready for the Future?
              </h2>
            </AnimatedCard>
            <AnimatedCard animation="fade-up" delay={100}>
              <p className="text-xl text-foreground/70 mb-8">
                Join thousands of users experiencing the next generation of tab management.
              </p>
            </AnimatedCard>
            <AnimatedCard animation="scale" delay={200}>
              <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black font-bold text-lg hover:shadow-[0_0_60px_rgba(0,217,255,0.8)] transition-all transform hover:scale-110">
                Install Tabori Now
              </button>
            </AnimatedCard>
          </div>
        </ScrollSection>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <div className="flex items-center gap-3 hover-scale">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tabori-vGzNFbq7xnLz3riI81AFD48Unns2WK.png"
                alt="Tabori Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-gradient">Tabori</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
