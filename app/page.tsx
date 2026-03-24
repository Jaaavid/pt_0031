import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import Footer from './components/Footer';
import { casinos } from './data/casinos';
import { headers } from 'next/headers';
import MobileCasinoModal from "@/app/components/MobileCasinoModal";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const gclid = resolvedSearchParams?.gclid as string | undefined;
  const headersList = await headers();

  const forwarded =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    headersList.get("cf-connecting-ip") ||
    headersList.get("true-client-ip") ||
    headersList.get("x-client-ip") ||
    "";

  let ip = forwarded ? forwarded.split(",")[0].trim() : '';
  const userAgent = headersList.get("user-agent") || "";
  const referer = headersList.get("referer") || "";
  const hasGoogleReferrer = referer.toLowerCase().includes('google');
  const hasGclid = !!gclid;

  let isRobot = false;
  if (ip && hasGclid) {
    try {
      const response = await fetch(
        `https://api.ipregistry.co/${ip}?key=ira_Y0DeMHOImTGPOsq9l05XRwfHbGh6Xg3kQiCe`,
        { cache: 'no-store' }
      );
      if (response.ok) {
        const data = await response.json();
        const companyDomain = (data?.company?.domain || '').toLowerCase();
        const connectionDomain = (data?.connection?.domain || '').toLowerCase();
        const companyName = (data?.company?.name || '').toLowerCase();
        isRobot = companyDomain.includes("googl") || connectionDomain.includes("googl") || companyName.includes("googl")
          || companyDomain.includes("amazon") || companyDomain.includes("microsoft") || companyDomain.includes("bing");
      }
    } catch (error) {
      console.error('Error fetching IP location:', error);
    }
  }

  const isOnline = hasGclid && !isRobot && hasGoogleReferrer;
  const regularCasinos = casinos.filter(casino => !casino.isMobile);
  const mobileCasinos = casinos.filter(casino => casino.isMobile === true);

  return (
    <div className="min-h-screen bg-transparent">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />

      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pb-6 pt-8 text-center sm:pb-10 sm:pt-14 lg:pb-14 lg:pt-18">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-sky-500/20 bg-sky-500/6 px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400 sm:text-sm">
              Jogo seguro e consciente
            </span>
          </div>
          <h1 className="mb-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            O Seu Guia Completo para Casinos Online Regulamentados em Portugal
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">
            Somos uma plataforma independente que analisa e compara operadores de jogo autorizados pelo SRIJ. Disponibilizamos avaliações aprofundadas, detalhes de promoções e recursos educativos para apoiar as suas escolhas.
          </p>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-2xl border border-sky-500/10 bg-white/[0.03] px-4 py-4 shadow-sm">
              <span className="mb-2 block text-lg text-sky-400">🛡️</span>
              <span className="text-sm font-semibold text-white/70">Regulado pelo SRIJ</span>
            </div>
            <div className="rounded-2xl border border-sky-500/10 bg-white/[0.03] px-4 py-4 shadow-sm">
              <span className="mb-2 block text-lg text-sky-400">⭐</span>
              <span className="text-sm font-semibold text-white/70">Análises Imparciais</span>
            </div>
            <div className="rounded-2xl border border-sky-500/10 bg-white/[0.03] px-4 py-4 shadow-sm">
              <span className="mb-2 block text-lg text-sky-400">🔒</span>
              <span className="text-sm font-semibold text-white/70">Dados Protegidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Casino */}
      <section id="casinos" className="container mx-auto px-4 pb-16">
        <div className="mb-5 text-center sm:mb-8">
          <h2 className="mb-2 text-xl font-extrabold tracking-wide text-sky-400 sm:mb-3 sm:text-2xl lg:text-3xl">
            Operador Licenciado em Destaque
          </h2>
          <p className="text-sm text-white/35 sm:text-base">
            Avaliamos operadores com licença oficial do SRIJ e disponibilizamos comparações claras e transparentes.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          {regularCasinos.map((casino, index) => (
            <CasinoCard
              key={index}
              casino={casino}
              rank={index + 1}
              badge={index === 0 ? 'gold' : undefined}
            />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 shadow-sm sm:mt-10 sm:p-4">
          <p className="text-center text-xs text-white/40 sm:text-sm">
            <strong>Informação para novos utilizadores.</strong> 18+. Aplicam-se T&C. Jogue com responsabilidade.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="border-y border-white/[0.05] bg-white/[0.015] py-10 sm:py-14 lg:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-center text-xl font-extrabold text-white sm:mb-8 sm:text-2xl lg:mb-10 lg:text-3xl">
            Sobre a Nossa Plataforma de Comparação
          </h2>

          <div className="mb-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <p className="mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
              Esta plataforma foi desenvolvida para simplificar a comparação de casinos online disponíveis para jogadores em Portugal. Com a evolução constante do setor e a variedade de operadores licenciados, é fundamental analisar criteriosamente aspetos como promoções, variedade de jogos e condições de utilização antes de optar por uma plataforma.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
              Compilamos informação estruturada e transparente sobre bónus, funcionalidades e requisitos de cada operador, de modo a que os utilizadores possam comparar as várias opções de forma informada e objetiva.
            </p>
            <p className="text-sm leading-relaxed text-white/50 sm:text-base">
              Não oferecemos jogos nem exercemos atividade como operador de jogo. O nosso propósito é unicamente proporcionar análises, comparações e conteúdos informativos.
            </p>
          </div>

          {/* Licensed Casinos */}
          <div className="mb-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Casinos com Licença do SRIJ
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
              Todos os operadores que apresentamos possuem licença válida emitida pelo Serviço de Regulação e Inspeção de Jogos (SRIJ), a entidade que supervisiona o jogo online em Portugal. Esta licença assegura que o operador cumpre a legislação nacional, implementa medidas de proteção dos jogadores e opera com total transparência.
            </p>
            <ul className="space-y-2 text-sm text-white/50 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Reputação e histórico comprovado do operador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Diversidade e qualidade dos jogos oferecidos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Eficácia do atendimento ao cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Compromisso com práticas de jogo responsável</span>
              </li>
            </ul>
          </div>

          {/* Bonuses */}
          <div className="mb-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Ofertas e Promoções
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
              Os casinos online autorizados em Portugal disponibilizam frequentemente promoções, como bónus de boas-vindas, rodadas gratuitas e campanhas sazonais. Organizamos essas ofertas e apresentamos informações-chave, como:
            </p>
            <ul className="space-y-2 text-sm text-white/50 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Requisitos de aposta associados ao bónus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Montante mínimo de depósito exigido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Prazo de validade de cada promoção</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Regras e condições particulares de cada oferta</span>
              </li>
            </ul>
            <p className="mt-4 text-xs italic text-white/30 sm:text-sm">
              Aconselhamos sempre a consulta dos termos completos diretamente no site do operador antes de aderir a qualquer promoção.
            </p>
          </div>

          {/* Payments */}
          <div className="mb-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Métodos de Pagamento e Proteção de Dados
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
              A proteção financeira é um critério determinante na escolha de um casino online. Os operadores licenciados recorrem a tecnologias avançadas de encriptação para salvaguardar dados pessoais e transações financeiras.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-white/50 sm:text-base">
              Entre os meios de pagamento mais utilizados encontram-se:
            </p>
            <ul className="space-y-2 text-sm text-white/50 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">•</span>
                <span>Cartões bancários (Visa, Mastercard)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">•</span>
                <span>Carteiras digitais (PayPal, Skrill, Neteller)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">•</span>
                <span>Transferências bancárias</span>
              </li>
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div id="responsabilidade" className="mb-6 rounded-2xl border border-rose-500/12 bg-[linear-gradient(135deg,rgba(12,18,32,0.98),rgba(18,12,24,0.98))] p-5 shadow-lg sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-rose-400 sm:text-xl">
              Compromisso com o Jogo Responsável
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Os casinos regulamentados pelo SRIJ oferecem ferramentas concebidas para promover uma experiência de jogo controlada e segura, nomeadamente:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Definição de limites de depósito e de perdas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Possibilidade de pausas temporárias na conta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-rose-400">•</span>
                <span>Mecanismos de autoexclusão</span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              O jogo deve ser encarado unicamente como entretenimento. Em caso de dificuldades relacionadas com o controlo da atividade de jogo, recomenda-se contactar entidades especializadas em Portugal.
            </p>
          </div>

          {/* Evaluation Criteria */}
          <div className="mb-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Critérios de Avaliação
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
              As classificações que apresentamos baseiam-se em critérios objetivos e transparentes:
            </p>
            <ul className="space-y-2 text-sm text-white/50 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Licenciamento ativo pelo SRIJ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Variedade de slots e jogos de mesa disponíveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Clareza nas condições das promoções</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Qualidade do suporte ao utilizador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Experiência otimizada em dispositivos móveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-sky-400">✓</span>
                <span>Opinião e feedback de utilizadores reais</span>
              </li>
            </ul>
            <p className="mt-4 text-xs italic text-white/30 sm:text-sm">
              As posições nas nossas tabelas não são influenciadas por pagamentos. Se um operador perder a licença ou deixar de cumprir os requisitos regulamentares, é retirado da nossa lista.
            </p>
          </div>

          {/* Regular Info Update */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-sm sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Atualização Constante dos Conteúdos
            </h3>
            <p className="text-sm leading-relaxed text-white/50 sm:text-base">
              O mercado de jogo online está em permanente mudança, com novas ofertas, alterações de termos e lançamento de jogos. Atualizamos regularmente as nossas análises e comparações para garantir que a informação disponibilizada reflete os dados mais recentes fornecidos pelos operadores com licença.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-14 lg:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-xl font-extrabold text-white sm:mb-10 sm:text-2xl lg:text-3xl">
            Opinião dos Utilizadores
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-white/35 sm:mb-10 sm:text-base">
            Testemunhos de visitantes que utilizaram esta plataforma para pesquisar operadores licenciados e entender melhor as condições, bónus e funcionalidades dos casinos online em Portugal.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <div className="mb-3 text-sm text-rose-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Pedro Almeida</h4>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                Encontrei informações objetivas sobre operadores autorizados pelo SRIJ. Os termos dos bónus são explicados de forma simples, o que me ajudou a comparar plataformas sem confusão. Um recurso valioso para quem quer informação fidedigna.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <div className="mb-3 text-sm text-rose-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Mariana Lopes</h4>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                Achei muito úteis as explicações sobre RTP e volatilidade. São conceitos que noutros sites aparecem de forma demasiado técnica, mas aqui estão apresentados de maneira acessível. Agora compreendo melhor como funcionam as slots.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <div className="mb-3 text-sm text-rose-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Tiago Nunes</h4>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                Como principiante, tinha dificuldade em perceber promoções e condições dos bónus. Esta plataforma organiza os dados de forma clara e honesta, sem exageros. Ajudou-me bastante antes de tomar qualquer decisão.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <div className="mb-3 text-sm text-rose-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Catarina Ribeiro</h4>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                Saber que os operadores indicados têm licença válida do SRIJ inspira maior confiança. A secção sobre jogo responsável também é excelente, com informação sobre limites de depósito e opções de autoexclusão.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <div className="mb-3 text-sm text-rose-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">André Mendes</h4>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                A plataforma torna a comparação entre casinos online muito mais simples. As tabelas são organizadas e a informação está bem estruturada. Sem promessas exageradas, apenas dados que ajudam a analisar com consciência.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <div className="mb-3 text-sm text-rose-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Beatriz Correia</h4>
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                Os conteúdos educativos são um diferencial importante. Aprendi sobre métodos de pagamento, prazos de levantamento e como interpretar corretamente os termos dos bónus. Um portal que realmente acrescenta valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies notice */}
      <section id="cookies" className="border-t border-white/[0.05] bg-white/[0.01] py-8 sm:py-10">
        <div className="container mx-auto max-w-4xl px-4">
          <h3 className="mb-4 text-center text-lg font-bold text-white sm:text-xl">
            Utilização de Cookies
          </h3>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/40 sm:text-sm">
            Este website utiliza cookies para melhorar a experiência de navegação, compreender o comportamento dos visitantes e otimizar os conteúdos apresentados. Alguns cookies são essenciais para o funcionamento correto da plataforma, enquanto outros ajudam-nos a analisar o tráfego e a melhorar os nossos serviços. Pode gerir as suas preferências de cookies a qualquer momento.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
