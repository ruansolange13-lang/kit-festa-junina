import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Shield, 
  Lock, 
  Zap, 
  HelpCircle, 
  ArrowRight, 
  Heart, 
  Calendar,
  Sparkles,
  Info,
  Clock,
  Volume2,
  CheckCircle,
  AlertCircle,
  Users,
  Check,
  X,
  FileText,
  Award,
  Flame,
  Scissors,
  PartyPopper
} from 'lucide-react';
import { ActivityImage, PricingPlan } from './types';

import FAQAccordion from './components/FAQAccordion';
import PlanCard from './components/PlanCard';
import ImageLightbox from './components/ImageLightbox';
import UpsellModal from './components/UpsellModal';
import VSLPlayer from './components/VSLPlayer';

// Import local generated images
import heroKit from './assets/images/hero_kit_1780095661288.webp';
import previewPainel from './assets/images/preview_painel_1780095686806.webp';
import previewPescaria from './assets/images/preview_pescaria_1780095702339.webp';
import previewCesta from './assets/images/preview_cesta_1780095718855.webp';
import avatarProfessora from './assets/images/avatar_professora_1780095735123.webp';
import mockupBasico from './assets/images/mockup_basico_1780095756056.webp';
import mockupPremium from './assets/images/mockup_premium_1780095770029.webp';
import seloGarantia from './assets/images/selo_garantia_7_dias_new_1780574161008.png';

const flagColors = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#e67e22', '#9b59b6'];

const testimonialImages = [
  'https://i.postimg.cc/50JMbCMF/1.webp',
  'https://i.postimg.cc/sXzRshRS/2.webp',
  'https://i.postimg.cc/cHWN0nNn/3.webp',
  'https://i.postimg.cc/TwxXfDX5/4.webp',
  'https://i.postimg.cc/MTw8qQ8M/5.webp',
];

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handleBasicClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsUpsellOpen(true);
  };

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    let formatted = date.toLocaleDateString('pt-BR', options);
    // Capitalize first letter
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    setFormattedDate(formatted);
  }, []);

  const activityImages: ActivityImage[] = [
    {
      id: 'hero',
      title: 'Kit Completo Arraiá Premiado',
      description: 'Estrutura completa com tudo o que você precisa para garantir a alegria, a risada e a organização perfeita sem esforço mental.',
      src: heroKit,
    },
    {
      id: 'painel',
      title: 'Painel Premiado Prático',
      description: 'O centro interativo que engaja as crianças com curiosidade, mimos ocultos, tarefas temáticas e charadas divertidas.',
      src: previewPainel,
    },
    {
      id: 'pescaria',
      title: 'Barraquinha de Jogo da Pescaria',
      description: 'O método de gincana perfeito para prender o interesse dos convidados, marcando pontos de forma super carismática e descontraída.',
      src: previewPescaria,
    },
    {
      id: 'cesta',
      title: 'Mini Cesta Caipira 3D',
      description: 'O toque acolhedor de puro afeto para lembrancinhas e guloseimas que encanta e emociona de primeira cada convidado da festa.',
      src: previewCesta,
    },
    {
      id: 'basico',
      title: 'Visual do Plano Essencial',
      description: 'As dinâmicas chaves e brincadeiras que salvam a sua semana e evitam o stress do improviso de última hora.',
      src: mockupBasico,
    },
    {
      id: 'premium',
      title: 'Visual do Plano Completo',
      description: 'A solução definitiva para o seu São João: 17 dinâmicas prontas, decoração de extremo bom gosto e bônus que garantem elogios e poupam seu sono.',
      src: mockupPremium,
    }
  ];

  const pricingPlans: PricingPlan[] = [
    {
      id: 'premium',
      name: 'Kit Arraiá PREMIADO (Completo)',
      tagline: 'A solução definitiva para o seu São João + Todos os bônus exclusivos de decoração e diversão!',
      badge: '🔥 MAIS VENDIDO',
      mockupSrc: mockupPremium,
      regularPrice: 'De R$ 97,00',
      currentPrice: '27,90',
      paymentDetails: 'somente à vista no Pix',
      checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=Zk4EhD',
      isPopular: true,
      features: [
        { text: 'Manual & Dinâmica Completa do Jogo da Pescaria Infantil', included: true },
        { text: 'Instruções do Jogo das Argolas tradicional com regras que geram gargalhadas', included: true },
        { text: 'Desenho da Dinâmica do Painel Premiado (engajamento máximo)', included: true },
        { text: 'Espetáculo do Jogo "Acerte o Milho" (Inédito e divertidíssimo)', included: true },
        { text: 'Guia de Decoração Caipira Temática Completa para o local', included: true },
        { text: 'Plaquinhas caipiras com frases divertidas para fotos marcantes', included: true },
        { text: 'Layout de Cardápio Caipira para Festa de São João', included: true },
        { text: 'E-book Secreto: Receitas Juninas Tradicionais de Sucesso', included: true },
        { text: 'Acesso Vitalício Garantido para o resto de sua vida', included: true },
        { text: 'Resolução visual premium em altíssima nitidez e clareza de uso', included: true },
      ]
    },
    {
      id: 'basico',
      name: 'Kit Arraiá Básico',
      tagline: 'O essencial para as brincadeiras fundamentais com total organização.',
      mockupSrc: mockupBasico,
      regularPrice: 'De R$ 47,90',
      currentPrice: '10,00',
      paymentDetails: 'somente à vista no Pix',
      checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=gpCNrh',
      isPopular: false,
      features: [
        { text: 'Manual & Dinâmica Completa do Jogo da Pescaria Infantil', included: true },
        { text: 'Instruções do Jogo das Argolas tradicional com regras que geram gargalhadas', included: true },
        { text: 'Desenho da Dinâmica do Painel Premiado (engajamento máximo)', included: true },
        { text: 'Acesso Vitalício Garantido para o resto de sua vida', included: true },
        { text: 'Resolução visual premium em altíssima nitidez e clareza de uso', included: true },
        { text: 'Espetáculo do Jogo "Acerte o Milho" (Inédito e divertidíssimo)', included: false },
        { text: 'Guia de Decoração Caipira Temática', included: false },
        { text: 'Plaquinhas caipiras com frases divertidas', included: false },
        { text: 'Layout de Cardápio Caipira', included: false },
        { text: 'E-book Secreto: Receitas Caipiras', included: false },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e5d7af] text-[#2d1e15] font-sans antialiased selection:bg-[#f1c40f]/50 flex flex-col">
      
      <main id="main-content" className="flex-grow">
      
      {/* 2. Hero Section (Landing Hook with Flags) */}
      <section className="relative z-10 pt-6 pb-8 md:pb-12 px-4 bg-gradient-to-b from-amber-50/20 to-transparent">
        
        {/* Row of Festive Flags */}
        <div className="zoom-in-flags pointer-events-none flex w-full justify-between px-2 overflow-hidden mb-6" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, i) => (
            <span 
              key={i}
              className="inline-block animate-wave-flag origin-top"
              style={{
                width: '0',
                height: '0',
                borderLeft: '11px solid transparent',
                borderRight: '11px solid transparent',
                borderTop: `20px solid ${flagColors[i % flagColors.length]}`,
                animationDelay: `${(i * 0.12).toFixed(2)}s`,
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,.15))'
              }}
            ></span>
          ))}
        </div>



        {/* Primary Benefit-focused Headings block */}
        <div className="max-w-4xl mx-auto text-center mt-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#d35400] tracking-tight leading-[1.12] mb-5 font-display uppercase">
            Sua festa <span className="text-[#1b4332] underline decoration-[#f1c40f] decoration-4">completa e super organizada</span> em poucos minutos, sem passar noites planejando!
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-[#5d4037] max-w-3xl mx-auto leading-relaxed mb-8 font-semibold">
            Tenha em mãos a <strong className="text-[#2d1e15]">experiência completa de brincadeiras de alto engajamento, dinâmicas ativas e decorações acolhedoras</strong> <span className="text-[#1e3a8a] font-black">+BONUS</span>.
          </p>
        </div>

        {/* Optimized Video Block (VSL vertical story style) */}
        <div className="max-w-[360px] mx-auto mt-6 px-4 sm:px-0">
          <p className="text-center text-[#5d4037] text-xs sm:text-sm font-black uppercase tracking-wider mb-2">
            CONFIRA O SEU KIT JUNINO COMPLETO:
          </p>
          <VSLPlayer />
        </div>


        {/* Primary CTA Block */}
        <div className="max-w-2xl mx-auto mt-6 text-center px-4">
          <p className="mt-4 text-xs sm:text-sm text-[#1e3a8a] font-black uppercase tracking-wider select-none">
            👇 VEJA ABAIXO OPINIÕES DE QUEM JÁ COMPROU 👇
          </p>
        </div>
      </section>

      {/* 8. Moving Testimonials with Creator Profile Card */}
      <section className="relative z-10 pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-gradient-to-b from-[#e5d7af] to-white overflow-hidden border-t border-amber-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e3a8a] mb-3 tracking-tight font-display">
            Histórias de Sucesso Reais 💬
          </h2>
          <div className="text-[#5d4037] font-extrabold uppercase tracking-wide text-xs sm:text-sm flex flex-col items-center justify-center gap-2 max-w-2xl mx-auto">
            <span className="text-amber-400 text-xl tracking-widest select-none">⭐⭐⭐⭐⭐</span>
            <p className="leading-relaxed text-center">
              +1.248 Famílias, Escolas e Líderes já aprovaram e relataram alívio no planejamento!
            </p>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-hidden py-4 select-none bg-neutral-50/50 rounded-2xl border border-amber-100">
          <div className="flex w-max gap-4 md:gap-6 animate-marquee-x py-1">
            {/* Double elements to allow seamless loops */}
            {[...testimonialImages, ...testimonialImages].map((url, i) => (
              <img 
                key={i}
                src={url} 
                alt={`Depoimento de comprador feliz do kit arraiá ${i + 1}`}
                loading="lazy"
                decoding="async"
                width={280}
                height={384}
                referrerPolicy="no-referrer"
                className="h-72 md:h-96 w-auto rounded-3xl shadow-md border-4 border-white shrink-0 object-contain hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pain-Points Section (Seção de Dores) */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-white border-y border-amber-100">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="bg-[#fffdfa] border-2 border-[#e67e22] rounded-[2rem] p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-3.5xl font-black text-[#2d1e15] mb-4 tracking-tight font-display leading-tight">
              Você também sofre com a correria do São João?
            </h2>
            <p className="text-[#5d4037] text-sm sm:text-base font-bold leading-relaxed max-w-2xl mx-auto">
              Organizar um arraiá incrível é gratificante, mas os preparativos podem consumir tempo e energia de quem fica responsável por tudo.
            </p>
          </div>

          <div className="bg-[#fffdfa] border-2 border-[#e67e22] rounded-[2rem] p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <p className="text-[#e67e22] text-lg sm:text-xl font-black mb-4 font-display uppercase tracking-wide">
              🚫 Chega de estressar sua semana de São João!
            </p>
            <p className="text-[#5d4037] text-sm sm:text-base font-bold leading-relaxed max-w-2xl mx-auto">
              Nós já fizemos todo o planejamento, a pesquisa pedagógica e a criação das brincadeiras. Agora você só precisa aplicar e aproveitar um arraiá organizado, divertido e sem dor de cabeça.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Audience Segments Section (Para Escolas, Igrejas e Famílias) */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-[#2d1e15] mb-3 tracking-tight font-display">
              Quem mais se beneficia deste Kit Pronto?
            </h2>
            <p className="text-[#5d4037] text-sm sm:text-base font-semibold max-w-2xl mx-auto">
              Independentemente do tamanho do seu evento, o material foi criado para se adaptar com facilidade à sua realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            
            {/* Segment 1: Escolas */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 border border-[#f1c40f]/45 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#f1c40f]/30 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                👩‍🏫
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Escolas & Professoras
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Atividades alinhadas ao desenvolvimento infantil, coordenação motora e socialização. Perfeitas para a educação infantil e ensino fundamental, reduzindo horas de planejamento e preparação.
              </p>
            </div>

            {/* Segment 2: Igrejas */}
            <div className="bg-gradient-to-br from-[#2ecc71]/10 to-white rounded-2xl p-5 border border-emerald-100 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                ⛪
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Igrejas, Catequistas & Quermesses
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Ideal para festas comunitárias, encontros de catequese e gincanas. Um material visual e intuitivo que facilita a organização mesmo com poucos voluntários.
              </p>
            </div>

            {/* Segment 3: Famílias */}
            <div className="bg-gradient-to-br from-[#e67e22]/10 to-white rounded-2xl p-5 border border-[#e67e22]/20 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#e67e22]/15 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🏡
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#d35400] mb-1.5 font-display tracking-tight">
                Famílias, Recreadores & Sítios
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Transforme qualquer espaço em um verdadeiro arraiá. Promova diversão, interação entre gerações e momentos inesquecíveis longe das telas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. What they receive Section (Tudo o que você recebe) */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#e5d7af] border-t border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-5xl font-black text-[#d35400] mb-4 tracking-tight font-display">
              O que você recebe imediatamente após a compra?
            </h2>
            <p className="text-[#5d4037] font-semibold md:text-lg max-w-2xl mx-auto">
              Muito mais do que meros planos comuns. Você recebe um método estruturado e carismático de gincanas caipiras focado em engajamento ativo, resgate da essência infantil e zero cansaço de preparação:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Box 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 border border-[#f1c40f]/45 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#f1c40f]/30 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🐟
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Jogo da Pescaria Caipira Completo
              </h4>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Dezenas de peixinhos coloridos e ultra-carismáticos ilustrados, prontos para recortar, numerar e pontuar as tarefas.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 border border-[#f1c40f]/45 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#f1c40f]/30 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🎁
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Painel Premiado Gigante e Interativo
              </h4>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Arte completa e passo a passo de como montar o painel que as crianças amam furar ou sortear prendas divertidas.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 border border-[#f1c40f]/45 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#f1c40f]/30 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🧺
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Molde Mini Cesta Caipira 3D Fofa
              </h4>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Molde planejado para impressão de mini cestas 3D ideais para decorar a mesa, porta-lembrancinhas ou doces caipiras.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-gradient-to-br from-red-50/70 to-white rounded-2xl p-5 border border-red-200/40 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-red-100 rounded-full flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🌽
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Jogo Acerte o Milho & Argolas
              </h4>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Roteiros e cartazes ilustrados de pontuação e instruções dinâmicas de arremessos para engajar todas as idades na diversão.
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-gradient-to-br from-[#2ecc71]/10 to-white rounded-2xl p-5 border border-emerald-100 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🎉
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Bandeirinhas & Decoração Personalizada
              </h4>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Bandeiras decorativas exclusivas desenhadas pela Isabela, tags para cupcakes, pipocas e plaquinhas lindas de barraquinhas.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-gradient-to-br from-blue-50/60 to-white rounded-2xl p-5 border border-blue-200/40 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 bg-[#e3f2fd] rounded-full flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                📸
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Plaquinhas Divertidas para Fotos
              </h4>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Dezenas de plaquinhas com frases juninas mega criativas para garantir os cliques mais engajados nas redes sociais.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 10. Calendar and Time Urgency Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-[#2d1e15] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#e74c3c] text-white text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider font-display shrink-0 uppercase animate-pulse">
            ⏳ O CALENDÁRIO NÃO ESPERA
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight font-display text-[#f1c40f] uppercase">
            O São João tem dia e hora para acontecer!
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-semibold">
            Ao contrário de outras escolhas, o tempo útil para salvar o seu São João corre muito rápido. Conforme os dias passam, resta menos tempo para você estruturar as brincadeiras, garantir que tudo ocorra com tranquilidade e organizar tudo com a calma que você merece.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/10 max-w-xl mx-auto text-left mb-8">
            <span className="text-xs font-black text-[#f1c40f] tracking-widest uppercase block mb-2 font-display">
              ⚠️ ATENÇÃO ORGANIZADOR
            </span>
            <p className="text-white/95 text-sm sm:text-base font-semibold leading-relaxed">
              Deixar para os últimos dias significa se submeter à correria desesperadora de última hora, improvisar brincadeiras confusas na correria, ou o pior cenário: ver as crianças frustradas, entediadas e todos reclamando da desorganização.
            </p>
          </div>

          <a 
            href="#oferta" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E9B21C] to-[#d49f13] text-neutral-950 text-lg sm:text-xl font-black px-10 py-5 rounded-full shadow-2xl hover:from-[#d49f13] hover:to-[#b58509] transition-all hover:scale-[1.02] ring-4 ring-[#E9B21C]/40 font-display animate-pulse-cta"
          >
            ACESSAR MATERIAIS
          </a>
          <p className="mt-3 text-xs text-white/60 font-semibold">
            Evite sofrer com a pressa de última hora. Tenha toda a solução e tranquilidade em menos de 1 minuto.
          </p>
        </div>
      </section>

      {/* 7. Gallery / Visual Portfolio Section with Lightbox */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#d35400] mb-3 tracking-tight font-display">
            Veja como tudo fica lindo impresso e montado 😍
          </h2>
          <p className="text-[#5d4037] font-semibold max-w-2xl mx-auto md:text-lg">
            Imagens ilustrativas de representação dos moldes e dinâmicas prontas. <strong className="text-[#d35400]">Clique nas fotos abaixo do carrossel para ampliar os detalhes e conferir:</strong>
          </p>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {activityImages.map((img, idx) => (
            <div 
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_-20px_rgba(231,126,34,0.45)] transition-all duration-500 border border-white ring-1 ring-amber-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e5d7af] relative">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  loading="lazy" 
                  decoding="async"
                  width={400}
                  height={300}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Cover Sheet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-45 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#f1c40f] text-[#2d1e15] text-[10px] font-black px-2.5 py-0.5 rounded-full mb-1 uppercase tracking-wider font-display">
                  TOQUE PARA DETALHAR 🔍
                </span>
                <h4 className="text-white font-extrabold text-base tracking-tight drop-shadow font-display leading-tight">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Render Lightbox Overlay Modal */}
        <ImageLightbox 
          images={activityImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      </section>

      {/* 12. Pricing Offer Block (Seção Escolha seu plano com anchor links) */}
      <section id="oferta" className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-[#e5d7af] to-[#d6bb89] border-t border-amber-200/50">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-[#1e3a8a] tracking-tight font-display uppercase">
            Garanta Agora o Kit Certo para Sua Festa
          </h2>
        </div>

        {/* Pricing Layout Container - Grid comparison */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start px-2">
          {pricingPlans.map((plan) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              onBasicClick={handleBasicClick}
            />
          ))}
        </div>

        {/* Guarantee Badge Seal */}
        <div className="mt-14 mb-4 flex justify-center w-full text-center px-4 select-none">
          <div className="flex flex-col items-center">
            <img 
              src={seloGarantia} 
              alt="Selo de 7 Dias de Garantia Incondicional" 
              loading="lazy"
              decoding="async"
              width={160}
              height={160}
              referrerPolicy="no-referrer"
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Dynamic checkout upsell modal popup */}
        <UpsellModal 
          isOpen={isUpsellOpen}
          onClose={() => setIsUpsellOpen(false)}
          basicCheckoutUrl="https://pay.lowify.com.br/checkout?product_id=gpCNrh"
          upsellCheckoutUrl="https://pay.lowify.com.br/checkout?product_id=2YsNLP"
          mockupPremium={mockupPremium}
        />


      </section>

      {/* Creator Profile Section */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-white border-y border-amber-100">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#e5d7af] via-[#e2c483] to-[#dbca9e] rounded-[2.5rem] p-6 sm:p-8 md:p-11 flex flex-col md:flex-row items-center gap-6 sm:gap-10 border-2 border-[#f1c40f] shadow-lg">
          <div className="relative shrink-0 select-none">
            <img 
              src={avatarProfessora} 
              alt="Professora Isabela Marina especialista em gincana e brincadeiras escolares caipiras" 
              loading="lazy"
              decoding="async"
              width="144"
              height="144"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg ring-6 ring-white"
            />
            <div className="absolute -bottom-2 -right-1 bg-amber-500 text-white w-8 h-8 rounded-full shadow-md text-base flex items-center justify-center border-2 border-white">
              👑
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <span className="text-[11px] font-black tracking-wider uppercase text-[#d35400] bg-white px-3 py-1 rounded-full shadow-sm mb-2.5 inline-block font-display">
              ORGANIZADORA & PEDAGOGA
            </span>
            <h3 className="text-2xl sm:text-3.5xl font-black text-[#d35400] font-display mb-3 leading-tight leading-none">
              Desenvolvido pela Professora Isabela Marina
            </h3>
            <p className="text-[#5d4037] text-base md:text-lg font-semibold mt-1.5 leading-relaxed leading-[1.6]">
              "Olá, eu sou a Isabela Marina! Desenvolvi o Kit Arraiá Premiado unindo minha experiência em sala de aula de muitos anos ao desejo de descomplicar a vida das professoras e organizadores voluntários. Quero que você economize dezenas de horas de estresse e dor de cabeça e possa de fato curtir as festividades e recolher os elogios de todos com uma programação lúdica, super segura e incrivelmente prática de realizar. Vamos resgatar os sorrisos reais e o brilho nos olhos das crianças este ano?" 💛
            </p>
          </div>
        </div>
      </section>

      {/* 13. FAQ Accordion Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-[#e5d7af] border-t border-neutral-100">
        <FAQAccordion />
      </section>


      </main>

      {/* 15. Professional Trust Footer with Complete Badges */}
      <footer className="relative z-10 bg-[#2d1e15] text-white pt-16 pb-8 px-4 border-t border-neutral-900 select-none">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">🔒</div>
            <div className="font-black text-[#f1c40f] font-display">Compra 100% Segura</div>
            <div className="text-white/70 text-sm font-medium">Sua transação é processada em ambiente criptografado e totalmente seguro.</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">⚡</div>
            <div className="font-black text-[#f1c40f] font-display font-bold">Acesso Instantâneo</div>
            <div className="text-white/70 text-sm font-medium">As credenciais para salvar o seu São João são enviadas ao seu e-mail imediatamente após a aprovação.</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">💬</div>
            <div className="font-black text-[#f1c40f] font-display font-medium">Suporte Atencioso</div>
            <div className="text-white/70 text-sm font-medium">Tem alguma dúvida? Conte com nosso atendimento exclusivo por e-mail comercial.</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">🛡️</div>
            <div className="font-black text-[#f1c40f] font-display">Risco Zero Avaliado</div>
            <div className="text-white/70 text-sm font-medium">Sua satisfação está totalmente resguardada pela nossa garantia incondicional de 7 dias.</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-white/10 text-center text-white/50 text-xs sm:text-sm space-y-3 font-medium">
          <p>© 2026 Arraiá Premiado • Professora Isabela Marina — Todos os direitos reservados.</p>
          <p className="text-white/30 text-[11px] font-sans leading-relaxed">
            Este é um método lúdico pedagógico para facilitar e organizar eventos de forma online, com foco em salvar seu tempo livre e gerar risadas coletivas. Os mockups tridimensionais representam de forma gráfica a experiência visualizada do projeto físico.
          </p>
        </div>
      </footer>
    </div>
  );
}
