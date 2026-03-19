import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Termos de Utilização - Guia Casinos Portugal",
  description: "Termos de Utilização do Guia Casinos Portugal. Leia os nossos termos e condições para utilização do website de comparação de casinos.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8 sm:py-12 lg:py-16">
        <div className="rounded-2xl border border-white/10 bg-[#111b2e] p-6 shadow-lg sm:p-8 lg:p-12">
          <h1 className="mb-6 text-3xl font-extrabold text-white sm:mb-8 sm:text-4xl lg:text-5xl">
            Termos de Utilização
          </h1>

          <div className="space-y-6 text-sm leading-relaxed text-white/55 sm:text-base">
            <p className="italic text-white/35">
              Última atualização: {new Date().toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar este website (o &quot;Website&quot; ou &quot;Serviço&quot;), aceita e concorda
                em ficar vinculado aos termos e condições deste acordo. Se não concordar, não utilize este Serviço.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">2. Descrição do Serviço</h2>
              <p>
                O Guia Casinos Portugal é um website informativo e de comparação que fornece análises, classificações
                e informações sobre operadores de casino online. Somos um serviço de comparação independente e não
                operamos quaisquer serviços de jogo.
              </p>
              <p className="mt-3">O nosso Serviço inclui:</p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Análises e classificações de casinos</li>
                <li>Comparação de funcionalidades, bónus e serviços dos casinos</li>
                <li>Conteúdo educativo sobre jogo online</li>
                <li>Ligações para operadores de casino terceiros</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">3. Restrições de Idade</h2>
              <p>
                Deve ter pelo menos 18 anos para utilizar este Serviço. Ao utilizá-lo, declara e garante
                que tem pelo menos 18 anos e capacidade legal para celebrar este acordo.
              </p>
              <p className="mt-3">
                O jogo online é ilegal para menores de 18 anos em Portugal. Não fornecemos deliberadamente
                informações a menores.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">4. Utilização do Serviço</h2>
              <p>
                Concorda em utilizar o Serviço apenas para fins lícitos e em conformidade com estes Termos.
                Concorda em não:
              </p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>Utilizar o Serviço de forma que viole qualquer lei ou regulamento aplicável</li>
                <li>Tentar obter acesso não autorizado a qualquer parte do Serviço</li>
                <li>Interferir ou perturbar o Serviço ou os servidores a ele ligados</li>
                <li>Utilizar qualquer sistema automatizado para aceder ao Serviço sem a nossa permissão</li>
                <li>Reproduzir, duplicar ou revender qualquer parte do Serviço sem a nossa autorização</li>
                <li>Utilizar o Serviço para transmitir vírus, malware ou código malicioso</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">5. Ligações e Serviços de Terceiros</h2>
              <p>
                O nosso Serviço contém ligações para websites de terceiros, incluindo operadores de casino online.
                Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de websites terceiros.
              </p>
              <p className="mt-3">
                Quando clica em ligações para casinos terceiros, abandona o nosso Website e fica sujeito
                aos termos e condições e políticas de privacidade desses websites. Encorajamos a revisão
                dos termos e políticas de privacidade de qualquer website terceiro que visite.
              </p>
              <p className="mt-3">
                Podemos receber compensação de operadores de casino quando clica em ligações ou se regista
                através do nosso Serviço. Isto não afeta a nossa independência editorial nem a precisão
                das nossas análises.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">6. Exclusão de Garantias</h2>
              <p>
                As informações neste Website são fornecidas &quot;tal como estão&quot;. Na máxima extensão permitida
                por lei, excluímos todas as representações, garantias e condições relativas ao nosso Website.
              </p>
              <p className="mt-3">Não garantimos que:</p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li>As informações neste Website sejam completas, precisas ou atualizadas</li>
                <li>O Website esteja disponível em todos os momentos ou livre de erros</li>
                <li>O Website esteja livre de vírus ou outros componentes prejudiciais</li>
                <li>Qualquer operador de casino satisfaça as suas expectativas</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">7. Limitação de Responsabilidade</h2>
              <p>
                Na máxima extensão permitida pela lei aplicável, o Guia Casinos Portugal e os seus proprietários,
                colaboradores e afiliados não serão responsáveis por quaisquer danos indiretos, incidentais,
                especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados,
                uso ou outros prejuízos intangíveis resultantes da utilização do Serviço.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">8. Jogo Responsável</h2>
              <p>
                Estamos comprometidos com a promoção do jogo responsável. O jogo deve ser encarado como
                entretenimento e não como forma de obter rendimento ou resolver problemas financeiros.
              </p>
              <p className="mt-3">
                Se tiver ou conhecer alguém com problemas de jogo, procure ajuda:
              </p>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-2">
                <li><strong>SICAD:</strong> Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências</li>
                <li><strong>Linha Vida:</strong> 1414</li>
                <li><strong>Jogadores Anónimos</strong></li>
              </ul>
              <p className="mt-3">
                Nunca jogue com dinheiro que não pode perder. Defina limites para a sua atividade de jogo e cumpra-os.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">9. Propriedade Intelectual</h2>
              <p>
                O Serviço e o seu conteúdo original, funcionalidades e características são propriedade do
                Guia Casinos Portugal e estão protegidos por leis de direitos de autor, marcas registadas
                e outras leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">10. Divulgação de Afiliação</h2>
              <p>
                O Guia Casinos Portugal pode receber compensação de operadores de casino quando os utilizadores
                clicam em ligações ou se registam através do nosso Serviço. Esta compensação ajuda-nos a manter
                e melhorar o Serviço.
              </p>
              <p className="mt-3">
                As nossas análises e classificações baseiam-se na nossa avaliação independente e não são
                influenciadas por relações de afiliação. Estamos empenhados em fornecer informação honesta,
                precisa e imparcial.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">11. Alterações aos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma
                revisão for significativa, procuraremos fornecer um aviso prévio de pelo menos 30 dias.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">12. Lei Aplicável</h2>
              <p>
                Estes Termos serão regidos e interpretados de acordo com as leis de Portugal. Quaisquer
                litígios decorrentes destes Termos ou do Serviço estarão sujeitos à jurisdição exclusiva
                dos tribunais portugueses.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">13. Informações de Contacto</h2>
              <p>
                Se tiver questões sobre estes Termos de Utilização, contacte-nos:
              </p>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Guia Casinos Portugal</p>
                <p>Utilize o formulário de contacto disponível no website</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">14. Divisibilidade</h2>
              <p>
                Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal,
                as restantes disposições permanecerão em vigor. Estes Termos constituem o acordo integral
                entre nós relativamente ao nosso Serviço.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
