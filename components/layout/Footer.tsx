import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import Logo from "@/components/Logo";

const socials = [
  { icon: FiInstagram, label: "Instagram", href: "https://www.instagram.com/personnalitemove/" },
  { icon: FiFacebook,  label: "Facebook",  href: "https://www.facebook.com/share/1JBkqdcUVf/?mibextid=wwXIfr" },
  { icon: SiTiktok,    label: "TikTok",    href: "https://www.tiktok.com/@personnalite.move?_r=1&_t=ZS-96ZhjU1Hylx" },
  { icon: FiLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/academia-move/" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <a href="/" className="flex justify-center sm:justify-start">
            <Logo height={36} />
          </a>

          {/* Tagline */}
          <p className="text-sm leading-relaxed text-center">
            Uma nova experiência em academia.<br />
            Saúde, movimento e qualidade de vida para toda a família.
          </p>

          {/* Redes sociais */}
          <div className="flex items-center justify-center sm:justify-end gap-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-white/10 mt-8 mb-4" />
        <p className="text-xs text-gray-600 text-center">© {new Date().getFullYear()} Move Academia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
