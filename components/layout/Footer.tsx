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
    <footer className="bg-dark-bg text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="/"><Logo height={36} /></a>
          <p className="text-sm leading-relaxed text-center flex-1">
            Uma nova experiência em academia. Saúde, movimento e qualidade de vida para toda a família.
          </p>
          <div className="flex items-center gap-4">
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
        <hr className="border-white/10 mt-6 mb-4" />
        <p className="text-xs text-gray-600 text-center">© {new Date().getFullYear()} Move Academia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
