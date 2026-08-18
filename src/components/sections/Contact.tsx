// Contact section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';
import { useInView } from '../../hooks/useInView';

// Email Icon
const EmailIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

// WhatsApp Icon
const WhatsAppIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface EmailCardProps {
  label: string;
  email: string;
  name: string;
}

const EmailCard = ({ label, email, name }: EmailCardProps) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleClick}
      className="group border-2 border-white rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 cursor-pointer w-full"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          <EmailIcon />
        </div>

        {/* Label */}
        <h3 className="text-xl font-bold text-white mb-3">{label}</h3>

        {/* Name */}
        <p className="text-lg text-white/90 mb-4">{name}</p>

        {/* Email */}
        <p className="text-base text-red-400 font-semibold group-hover:text-red-300 transition-colors">
          {email}
        </p>
      </div>
    </button>
  );
};

interface WhatsAppCardProps {
  label: string;
  number: string;
  displayNumber: string;
  name: string;
}

const WhatsAppCard = ({ label, number, displayNumber, name }: WhatsAppCardProps) => {
  const handleClick = () => {
    window.open(`https://wa.me/${number.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="group border-2 border-white rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 cursor-pointer w-full"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
          <WhatsAppIcon />
        </div>

        {/* Label */}
        <h3 className="text-xl font-bold text-white mb-3">{label}</h3>

        {/* Name */}
        <p className="text-lg text-white/90 mb-4">{name}</p>

        {/* Phone Number */}
        <p className="text-base text-red-400 font-semibold group-hover:text-red-300 transition-colors">
          {displayNumber}
        </p>
      </div>
    </button>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  const cardsView = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <Section id="contact" background="gradient">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white text-center">
          {t.contact.title}
        </h2>

        <div ref={cardsView.ref} className="flex flex-wrap justify-center gap-8">
          {t.contact.emails.map((contact, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                cardsView.isInView
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <EmailCard
                label={contact.label}
                email={contact.email}
                name={t.contact.name}
              />
            </div>
          ))}

          {/* WhatsApp Card */}
          <div
            className={`transition-all duration-700 ${
              cardsView.isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: `${t.contact.emails.length * 150}ms` }}
          >
            {/* <WhatsAppCard
              label={t.contact.whatsapp.label}
              number={t.contact.whatsapp.number}
              displayNumber={t.contact.whatsapp.displayNumber}
              name={t.contact.name}
            /> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
