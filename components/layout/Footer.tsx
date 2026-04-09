import { FiInstagram, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Logo from "@/components/Logo";

const WA_NUMBER = "5511999999999";
const WA_MESSAGE = encodeURIComponent("Olá! Tenho interesse em conhecer os planos da Move Academia.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo height={36} />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Uma nova experiência em academia. Saúde, movimento e qualidade de vida para toda a família.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-primary transition-colors">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Modalidades", href: "#modalidades" },
                { label: "Horários", href: "#horarios" },
                { label: "Planos", href: "#planos" },
                { label: "Eventos", href: "/eventos" },
                { label: "Anuncie na Move", href: "/anuncie" },
                { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unidades */}
          <div>
            <h4 className="text-white font-semibold mb-4">Unidades</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Rondon",
                "Rui Barbosa",
                "Sete de Setembro",
                "Central / Parque",
              ].map((unit) => (
                <li key={unit} className="flex items-start gap-2">
                  <FiMapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{unit} — Salto, SP</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (XX) 9XXXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@moveacademia.com.br" className="hover:text-primary transition-colors">
                  contato@moveacademia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} Move Academia. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para a sua saúde</p>
        </div>
      </div>
    </footer>
  );
}