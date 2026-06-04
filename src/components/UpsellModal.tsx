import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  basicCheckoutUrl: string;
  upsellCheckoutUrl: string;
  mockupPremium: string;
}

export default function UpsellModal({
  isOpen,
  onClose,
  basicCheckoutUrl,
  upsellCheckoutUrl,
  mockupPremium,
}: UpsellModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark overlay backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2d1e15]/75 backdrop-blur-xs select-none"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0.2 }}
            className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1e3a8a] z-10 flex flex-col max-h-[95vh] h-auto"
          >
            {/* Elegant Header Banner */}
            <div className="bg-gradient-to-r from-[#d35400] via-[#e74c3c] to-[#e67e22] text-white py-3 px-4 sm:px-6 flex items-center justify-between text-center select-none relative">
              <div className="flex items-center gap-1.5 mx-auto font-display font-black text-xs sm:text-sm uppercase tracking-wider animate-pulse">
                <Sparkles className="w-4.5 h-4.5 text-[#f1c40f] fill-[#f1c40f]" />
                Super Oportunidade: Upgrade Premiado Disponível!
                <Sparkles className="w-4.5 h-4.5 text-[#f1c40f] fill-[#f1c40f]" />
              </div>
              <button 
                onClick={onClose}
                className="absolute right-3 top-2.5 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                aria-label="Fechar pop-up"
                id="close-upsell-modal-top"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content (Scrollable for smaller viewports) */}
            <div className="p-5 sm:p-6 overflow-y-auto">
              
              {/* Product Info Dual Column (Visual/Copy) */}
              <div className="grid sm:grid-cols-5 gap-4 items-center mb-3">
                
                {/* Visual Image container */}
                <div className="sm:col-span-2 select-none relative flex justify-center bg-amber-50/50 rounded-2xl p-2 border border-amber-100 shadow-inner">
                  <span className="absolute top-2 left-2 bg-[#e74c3c] text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wide shadow">
                    Completo
                  </span>
                  <img 
                    src={mockupPremium} 
                    alt="Kit Arraiá PREMIADO COMPLETO" 
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={200}
                    className="w-28 sm:w-full h-auto object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Main Offer Text */}
                <div className="sm:col-span-3 text-center sm:text-left flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1 w-fit mx-auto sm:mx-0 px-2.5 py-0.5 rounded-full bg-amber-100 text-[#d35400] font-extrabold text-[10px] sm:text-xs mb-2 select-none font-display uppercase tracking-wide">
                    <Flame className="w-3.5 h-3.5 fill-[#d35400] animate-bounce" />
                    Bônus Secretas & Decorações Inclusas!
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2d1e15] mb-2 font-display leading-tight">
                    Leve o Kit <span className="text-[#e74c3c]">PREMIADO</span> Completo
                  </h3>
                </div>

              </div>

              {/* Pricing comparison and action buttons */}
              <div className="pt-3 border-t border-[#1e3a8a]/20 mt-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 select-none">
                  <div className="text-center sm:text-left">
                    <span className="text-xs text-neutral-400 line-through font-extrabold uppercase">
                      De R$ 27,90 (Preço normal)
                    </span>
                    <div className="flex items-baseline justify-center sm:justify-start gap-1">
                      <span className="text-[14px] font-black text-[#2d1e15] font-display">Apenas R$</span>
                      <span className="text-3xl sm:text-4xl font-black text-[#e74c3c] tracking-tight font-display">17,90</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1.5 rounded-full text-[11px] font-black whitespace-nowrap leading-none font-display uppercase tracking-wider">
                    <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
                    7 Dias de Garantia Total
                  </div>
                </div>

                {/* Primary UPGRADE acceptance Button */}
                <a
                  href={upsellCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="accept-upsell-upgrade-cta"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#e67e22] to-[#e74c3c] hover:from-[#d35400] hover:to-[#c0392b] text-white font-black text-base sm:text-lg px-7 py-4.5 rounded-full shadow-[0_15px_30px_rgba(231,76,60,0.35)] hover:scale-[1.01] active:translate-y-0.5 transition-all text-center uppercase tracking-wide ring-4 ring-[#f1c40f]/45 font-display"
                >
                  SIM! QUERO GARANTIR O COMPLETO
                </a>

                {/* Decline/maintain option */}
                <div className="text-center mt-3.5">
                  <a
                    href={basicCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="decline-upsell-keep-basic"
                    className="inline-block text-[#5d4037] hover:text-[#d35400] transition-colors font-extrabold text-xs sm:text-sm underline underline-offset-4 decoration-[#f1c40f]"
                  >
                    Não obrigado, prefiro continuar com o Kit Básico por apenas R$ 10,00
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
