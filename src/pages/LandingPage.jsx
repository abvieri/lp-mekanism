import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Car, 
  FileText, 
  Package, 
  Smartphone, 
  BarChart3, 
  Mic, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck,
  Star
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cores do sistema
  const primaryColor = "bg-orange-600 hover:bg-orange-700 text-white";
  const primaryText = "text-orange-600";
  const secondaryBg = "bg-slate-50";
  const authLink = "https://mekanism.vercel.app/auth";
  const homeLink = "https://mekanism.vercel.app";

  // Mockup Component: UI do Dashboard Mobile (CSS Puro para ilustrar)
  const DashboardMockup = () => (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        {/* Tela Simulada */}
        <div className="bg-slate-50 h-full flex flex-col">
          <div className="bg-white p-4 pt-8 shadow-sm flex justify-between items-center">
            <div className="font-bold text-lg text-slate-800">Olá, Gestor</div>
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">M</div>
          </div>
          <div className="p-4 space-y-4">
            {/* Card Faturamento */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-4 text-white shadow-lg shadow-orange-200">
              <p className="text-xs opacity-90">Faturamento Hoje</p>
              <p className="text-2xl font-bold">R$ 1.250,00</p>
              <div className="mt-2 text-xs bg-white/20 inline-block px-2 py-1 rounded">+ 15% vs ontem</div>
            </div>
            {/* Lista O.S */}
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Ordens em Aberto</p>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Chevrolet Onix</p>
                      <p className="text-xs text-slate-500">Troca de Óleo • ABC-1234</p>
                    </div>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">Em andamento</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Bottom Nav */}
          <div className="mt-auto bg-white border-t border-slate-200 p-4 flex justify-around">
            <div className="text-orange-600"><BarChart3 size={24} /></div>
            <div className="text-slate-400"><FileText size={24} /></div>
            <div className="text-slate-400"><Package size={24} /></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="../../public/logo.png" alt="Mekanism Logo" className="h-14 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Funcionalidades</a>
              <a href="#diferencial" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">IA</a>
              <a href="#planos" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Planos</a>
              <a href={homeLink} className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">Entrar</a>
              <a href={authLink} className={`${primaryColor} px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-orange-200 transition-all hover:scale-105`}>
                Criar Conta
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full">
            <div className="px-4 py-4 space-y-4 shadow-xl">
              <a href="#funcionalidades" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">Funcionalidades</a>
              <a href="#diferencial" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">IA</a>
              <a href="#planos" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">Planos</a>
              <hr />
              <a href={authLink} className={`block w-full ${primaryColor} py-3 rounded-lg font-bold text-center`}>
                Criar Conta
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-white to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Texto Hero */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wide mb-6 border border-orange-100">
                <Star size={12} fill="currentColor" /> Nova Versão 2.0
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                A Revolução na Gestão da Sua Oficina: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Simples, Inteligente e na Palma da Mão.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Abandone as planilhas e o papel. O Mekanism organiza seus clientes, veículos, estoque e ordens de serviço em um único lugar. Gere orçamentos profissionais em segundos, direto do seu celular.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={authLink} className={`${primaryColor} px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2`}>
                  Começar Agora <ArrowRight size={20} />
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck size={16} className="text-green-500" /> Compra segura no cartão de crédito
              </p>
            </div>

            {/* Imagem Hero (Mockup) */}
            <div className="relative z-10 lg:ml-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2.6rem] blur opacity-30 animate-pulse"></div>
                <DashboardMockup />
                
                {/* Float Card - "O.S. Gerada" */}
                <div className="absolute bottom-20 -left-6 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 hidden sm:block animate-bounce-slow">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                            <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Orçamento enviado</p>
                            <p className="font-bold text-slate-800">R$ 450,00</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROBLEMA / SOLUÇÃO --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Chega de perder tempo com burocracia. <br className="hidden sm:block" />
                Foque no que importa: <span className="text-orange-600 underline decoration-orange-300 decoration-4 underline-offset-4">o serviço.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-16 items-stretch">
                {/* Lado do Problema */}
                <div className="bg-red-50 p-8 rounded-2xl border border-red-100 text-left space-y-4">
                    <h3 className="font-bold text-red-800 text-lg mb-4">A realidade antiga:</h3>
                    <div className="flex items-start gap-3">
                        <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                        <p className="text-red-700">Perde tempo procurando histórico de clientes em papéis velhos?</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                        <p className="text-red-700">O controle de estoque está uma bagunça e faltam peças?</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                        <p className="text-red-700">Seus orçamentos em papel ou Zap não passam profissionalismo?</p>
                    </div>
                </div>

                {/* Lado da Solução */}
                <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <CheckCircle2 size={100} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-green-800 text-lg mb-4">Com o Mekanism:</h3>
                    <p className="text-green-800 leading-relaxed">
                        O Mekanism resolve isso. Criamos um sistema pensado na realidade da oficina moderna, onde <strong className="font-bold">agilidade</strong> e <strong className="font-bold">organização</strong> são sinônimos de lucro.
                    </p>
                    <div className="mt-6 flex gap-2">
                         <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold">Rápido</span>
                         <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold">Fácil</span>
                         <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold">Profissional</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FUNCIONALIDADES --- */}
      <section id="funcionalidades" className={`${secondaryBg} py-20 scroll-mt-5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Recursos Premium</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Tudo o que sua oficina precisa para crescer</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                        <Car size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Gestão de Clientes e Veículos</h3>
                    <p className="text-slate-600">Tenha o histórico completo de cada carro que entra na sua oficina. Saiba exatamente o que foi feito, quando e por qual valor.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">O.S. Profissionais em PDF</h3>
                    <p className="text-slate-600">Gere O.S. detalhadas e envie orçamentos em PDF com sua logo direto para o cliente. Transmita confiança e profissionalismo.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                        <Package size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Controle de Estoque</h3>
                    <p className="text-slate-600">Gerencie peças com facilidade. Saiba a hora certa de repor e evite ficar na mão. Dê entrada e baixa com poucos cliques.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                        <Smartphone size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Design Mobile-First</h3>
                    <p className="text-slate-600">Feito para o celular. Abra uma O.S. ao lado do carro e atualize o status sem precisar correr para o computador.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                        <BarChart3 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Painel de Controle</h3>
                    <p className="text-slate-600">Visualize seu faturamento, serviços em andamento e métricas vitais da sua empresa em tempo real.</p>
                </div>

                 {/* Feature 6 - Card Visual */}
                 <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"></div>
                    <div className="relative z-10">
                        <p className="font-bold text-lg mb-2">Simples de usar</p>
                        <p className="text-slate-300 text-sm mb-4">Interface intuitiva para você não perder tempo aprendendo sistema.</p>
                        <a href={authLink} className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm group-hover:gap-3 transition-all cursor-pointer">
                            {/*Ver demonstração*/} Veja você mesmo <ArrowRight size={16} />
                        </a> 
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- DIFERENCIAL (IA TEASER) --- */}
      <section id="diferencial" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-5">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                <Mic size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                O futuro da gestão é <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">por voz.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Em breve, o Mekanism contará com uma Inteligência Artificial integrada. Você poderá ditar comandos, registrar pedidos e tirar dúvidas sobre a gestão da oficina apenas usando sua voz. <br className="hidden md:block"/> Sua oficina, conversando com você.
            </p>
            <div className="inline-block px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-sm text-slate-400">
                🚀 Em breve
            </div>
        </div>
      </section>

      {/* --- PLANOS --- */}
      <section id="planos" className="py-24 bg-white scroll-mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Planos que cabem no seu bolso</h2>
                <p className="text-slate-500 mt-4">Transparência total. Sem letras miúdas.</p>
            </div>

            <div className="max-w-md mx-auto">
                {/* Plano Único */}
                <div className="bg-white p-8 rounded-2xl border-2 border-orange-600 shadow-xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wide">
                      Oferta Especial
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Profissional</h3>
                    <p className="text-sm text-slate-500 mt-2">Tudo o que você precisa em um só lugar.</p>
                    <div className="my-6">
                        <span className="text-5xl font-extrabold text-slate-900">R$ 19,90</span>
                        <span className="text-slate-500">/mês</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                        <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={18} className="text-orange-600"/> Gestão completa de clientes e veículos</li>
                        <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={18} className="text-orange-600"/> Controle de estoque inteligente</li>
                        <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={18} className="text-orange-600"/> O.S. e Orçamentos em PDF</li>
                        <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={18} className="text-orange-600"/> App Mobile e Web</li>
                        {/* <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={18} className="text-orange-600"/> <span className="font-bold">Em breve: IA de Gestão por Voz</span></li> */}
                    </ul>
                    <a href={authLink} className={`${primaryColor} w-full py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 text-center`}>
                      Assinar Agora
                    </a>
                </div>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-8 flex items-center justify-center gap-1">
                <ShieldCheck size={14} /> Pagamento seguro e simplificado via Stripe. Cancele quando quiser.
            </p>
        </div>
      </section>

      {/* --- FOOTER / CTA FINAL --- */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pronto para profissionalizar sua oficina?</h2>
            <p className="text-lg text-slate-600 mb-8">
                Junte-se aos gestores que estão transformando a maneira de trabalhar. <br /> Organize sua oficina hoje mesmo com o Mekanism.
            </p>
            <a href={authLink} className={`${primaryColor} px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-orange-500/20 mb-12 hover:scale-105 transition-transform inline-block`}>
                Criar Minha Conta Agora
            </a>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <img src="../../public/logo.png" alt="Mekanism Logo" className="h-6 w-auto opacity-80" />
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-orange-600">Termos de Uso</a>
                    <a href="#" className="hover:text-orange-600">Privacidade</a>
                    <a href="#" className="hover:text-orange-600">Contato</a>
                </div>
                <div className="mt-4 md:mt-0">
                    © 2026 Mekanism. Todos os direitos reservados.
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;