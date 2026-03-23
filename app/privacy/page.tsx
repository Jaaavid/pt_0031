import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Política de Privacidade - Guia Casinos Portugal",
  description: "Política de Privacidade do Guia Casinos Portugal. Saiba como recolhemos, utilizamos e protegemos os seus dados pessoais.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8 sm:py-12 lg:py-16">
        <div className="rounded-2xl border border-white/[0.08] bg-[#141418] p-6 shadow-lg sm:p-8 lg:p-12">
          <h1 className="mb-6 text-3xl font-extrabold text-white sm:mb-8 sm:text-4xl lg:text-5xl">
            Política de Privacidade
          </h1>

          <div className="space-y-6 text-sm leading-relaxed text-white/45 sm:text-base">
            <p className="italic text-white/25">
              Última atualização: {new Date().toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">1. Introdução</h2>
              <p>
                Bem-vindo ao Guia Casinos Portugal (&quot;nós&quot;, &quot;nosso&quot; ou &quot;nos&quot;). Operamos este website
                (o &quot;Serviço&quot;). Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos
                e protegemos as suas informações quando visita o nosso website.
              </p>
              <p className="mt-3">
                Ao utilizar o nosso Serviço, concorda com a recolha e utilização de informações de acordo
                com esta política. Se não concordar com as nossas políticas e práticas, não utilize o nosso Serviço.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">2. Informações que Recolhemos</h2>

              <h3 className="mb-3 mt-4 text-lg font-semibold text-white/70 sm:text-xl">2.1 Informações Fornecidas por Si</h3>
              <p>
                Podemos recolher informações que nos fornece voluntariamente quando:
              </p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Nos contacta através do website</li>
                <li>Se inscreve na nossa newsletter</li>
                <li>Participa em inquéritos ou promoções</li>
                <li>Interage com o nosso Serviço de outras formas</li>
              </ul>

              <h3 className="mb-3 mt-4 text-lg font-semibold text-white/70 sm:text-xl">2.2 Informações Recolhidas Automaticamente</h3>
              <p>
                Quando visita o nosso Serviço, podemos recolher automaticamente determinadas informações sobre o seu dispositivo, incluindo:
              </p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Endereço IP</li>
                <li>Tipo e versão do navegador</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Endereços de websites de referência</li>
                <li>Data e hora da visita</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">3. Como Utilizamos as Suas Informações</h2>
              <p>Utilizamos as informações recolhidas para diversos fins, incluindo:</p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Fornecer, manter e melhorar o nosso Serviço</li>
                <li>Analisar como o nosso Serviço é utilizado</li>
                <li>Enviar newsletters e comunicações (com o seu consentimento)</li>
                <li>Responder às suas questões e prestar apoio</li>
                <li>Detetar, prevenir e resolver problemas técnicos</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">4. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para monitorizar a atividade no nosso Serviço
                e armazenar determinadas informações. Os cookies são ficheiros com uma pequena quantidade
                de dados que podem incluir um identificador único anónimo.
              </p>
              <p className="mt-3">
                Pode configurar o seu navegador para recusar todos os cookies ou para indicar quando um cookie
                está a ser enviado. No entanto, se não aceitar cookies, poderá não conseguir utilizar
                algumas partes do nosso Serviço.
              </p>
              <p className="mt-3">Utilizamos cookies para:</p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Funcionalidade essencial do website</li>
                <li>Análise e monitorização de desempenho</li>
                <li>Personalização de conteúdos</li>
                <li>Fins publicitários e de marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">5. Serviços de Terceiros</h2>
              <p>
                O nosso Serviço pode conter ligações para websites de terceiros que não são detidos nem
                controlados por nós. Não somos responsáveis pelas práticas de privacidade desses terceiros.
              </p>
              <p className="mt-3">Podemos utilizar serviços de terceiros como:</p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Fornecedores de análise (ex.: Google Analytics)</li>
                <li>Redes publicitárias</li>
                <li>Plataformas de redes sociais</li>
                <li>Processadores de pagamentos (se aplicável)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">6. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger
                as suas informações pessoais. Contudo, nenhum método de transmissão pela Internet ou
                armazenamento eletrónico é 100% seguro, e não podemos garantir segurança absoluta.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">7. Os Seus Direitos (RGPD)</h2>
              <p>Ao abrigo do RGPD, tem os seguintes direitos relativos aos seus dados pessoais:</p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li><strong>Direito de Acesso:</strong> Pode solicitar cópias dos seus dados pessoais</li>
                <li><strong>Direito de Retificação:</strong> Pode solicitar a correção de dados incorretos</li>
                <li><strong>Direito ao Apagamento:</strong> Pode solicitar a eliminação dos seus dados</li>
                <li><strong>Direito à Limitação do Tratamento:</strong> Pode solicitar a limitação do tratamento dos dados</li>
                <li><strong>Direito à Portabilidade:</strong> Pode solicitar a transferência dos seus dados</li>
                <li><strong>Direito de Oposição:</strong> Pode opor-se ao tratamento dos seus dados</li>
                <li><strong>Direito de Retirar o Consentimento:</strong> Pode retirar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">8. Retenção de Dados</h2>
              <p>
                Conservaremos as suas informações pessoais apenas durante o tempo necessário para cumprir
                os fins descritos nesta Política de Privacidade, salvo se um período de retenção mais
                longo for exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">9. Privacidade de Menores</h2>
              <p>
                O nosso Serviço não se destina a pessoas com menos de 18 anos. Não recolhemos deliberadamente
                informações pessoais de menores de 18 anos. Se for pai, mãe ou tutor e acreditar que o seu
                filho nos forneceu dados pessoais, contacte-nos imediatamente.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">10. Alterações a Esta Política</h2>
              <p>
                Podemos atualizar a nossa Política de Privacidade periodicamente. Notificá-lo-emos de
                quaisquer alterações publicando a nova Política nesta página e atualizando a data de
                &quot;Última atualização&quot;.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">11. Contacte-nos</h2>
              <p>
                Se tiver questões sobre esta Política de Privacidade ou pretender exercer os seus direitos,
                contacte-nos:
              </p>
              <div className="mt-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                <p className="font-semibold text-white">Guia Casinos Portugal</p>
                <p>Utilize o formulário de contacto disponível no website</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
