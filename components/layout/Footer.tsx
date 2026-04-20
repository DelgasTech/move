import { FiInstagram, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <a href="/"><Logo height={36} /></a>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Uma nova experiência em academia. Saúde, movimento e qualidade de vida para toda a família.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/personnalitemove/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Modalidades", href: "/#modalidades" },
                { label: "Horários", href: "/#horarios" },
                { label: "Planos", href: "/#planos" },
                { label: "Parcerias", href: "/parcerias" },
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
                { name: "Rondon", href: "https://www.google.com/maps/dir//Move+-+Rondon+-+R.+Botucatu,+74+-+Jardim+da+Cidade,+Salto+-+SP,+13323-080/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf4f7b3e63e5fd:0xf628a5c4fd7422ba?sa=X&ved=1t:57443&ictx=111" },
                { name: "Rui Barbosa", href: "https://www.google.com/maps/dir//Move+-+Rui+Barbosa+-+R.+Rui+Barbosa,+672+-+Centro,+Salto+-+SP,+13320-230/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf513c7ec597b1:0x141f75856c97702?sa=X&ved=1t:57443&ictx=111" },
                { name: "Sete de Setembro", href: null },
                { name: "Central / Parque", href: "https://www.google.com/maps/dir/-23.1243776,-47.251456/Move+-+Central+Parque,+Av.+Get%C3%BAlio+Vargas,+770+-+Piso+1+-+Jardim+Celani,+Salto+-+SP,+13326-185/@-23.1620744,-47.3189233,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94cf5304b22be769:0x937b69c90efbcaac!2m2!1d-47.307373!2d-23.1909294?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D" },
              ].map((unit) => (
                <li key={unit.name} className="flex items-start gap-2">
                  <FiMapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {unit.href ? (
                    <a href={unit.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {unit.name} — Salto, SP
                    </a>
                  ) : (
                    <span>{unit.name} — Salto, SP</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato por Unidade</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Sete de Setembro", tel: "+55 11 97107-1020", telRaw: "5511971071020" },
                { name: "Rondon",            tel: "+55 19 99886-6581", telRaw: "5519998866581" },
                { name: "Central / Parque",  tel: "+55 11 93446-1020", telRaw: "5511934461020" },
                { name: "Rui Barbosa",       tel: "+55 11 91844-1020", telRaw: "5511918441020" },
              ].map((unit) => (
                <li key={unit.name} className="flex items-start gap-2">
                  <FiPhone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-xs font-semibold">{unit.name}</p>
                    <a href={`tel:+${unit.telRaw}`} className="hover:text-primary transition-colors">
                      {unit.tel}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-2 pt-1">
                <FiMail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@moveacademia.com.br" className="hover:text-primary transition-colors">
                  contato@moveacademia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-center">
          <p>© {new Date().getFullYear()} Move Academia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
