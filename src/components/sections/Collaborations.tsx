// Collaborations section
import { Section } from '../layout';
import { useLanguage } from '../../hooks/useLanguage';
import { useState } from 'react';
import tt7Logo from '../../assets/TT7-logo.png';
import tt7Bg from '../../assets/TIT.jpg';
import raincupLogo from '../../assets/raincup-logo.png';
import raincupBg from '../../assets/raincup-game.png';
import astrobardLogo from '../../assets/astrobard-logo.png';
import crackpotsLogo from '../../assets/crackpot.png';
import CloudLogo from '../../assets/Cloud-Logo.png';
import GalInk from '../../assets/Gal_Ink.png';
import DonPepe from '../../assets/don_pepe.png';
import Ibis from '../../assets/Ibis.png';
import MekanicalLogo from '../../assets/mekanical-logo.png';
import Kali from '../../assets/Kali.png';

interface CollaborationCardProps {
  name: string;
  logo: string;
  backgroundImage: string;
  games: Array<{ title: string; description?: string }>;
}

const CollaborationCard = ({ name, logo, backgroundImage, games }: CollaborationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      className="h-96 group cursor-pointer"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0.5rem',
        transition: 'border-color 0.5s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: isHovered ? 1 : 0, transition: 'opacity 0.5s' }}>
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-8">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ease-out ${
            isHovered ? 'w-40 h-40 mb-6' : 'w-48 h-48'
          }`}
        >
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Game info - fades in on hover */}
        <div
          className={`text-center transition-all duration-700 ${
            isHovered
              ? 'opacity-100 translate-y-0 max-h-96'
              : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>

          {games.map((game, index) => (
            <div key={index} className="mb-3">
              <p className="text-lg font-semibold text-white mb-2">
                {t.collaborations.testedGame}: <span className="text-red-400">{game.title}</span>
              </p>
              {/* {game.description && (
                <p className="text-sm text-white/90 leading-relaxed max-w-md mx-auto">
                  {game.description}
                </p>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Collaborations = () => {
  const { t } = useLanguage();

  const collaborationsData = [
    {
      name: t.collaborations.partners[0].name,
      logo: tt7Logo,
      backgroundImage: tt7Bg,
      games: t.collaborations.partners[0].games
    },
    {
      name: t.collaborations.partners[1].name,
      logo: raincupLogo,
      backgroundImage: raincupBg,
      games: t.collaborations.partners[1].games
    },
    {
      name: t.collaborations.partners[2].name,
      logo: astrobardLogo,
      backgroundImage: crackpotsLogo,
      games: t.collaborations.partners[2].games
    },
    {
      name: t.collaborations.partners[3].name,
      logo: CloudLogo,
      backgroundImage: GalInk,
      games: t.collaborations.partners[3].games
    },
    {
      name: t.collaborations.partners[4].name,
      logo: MekanicalLogo,
      backgroundImage: Kali,
      games: t.collaborations.partners[4].games
    },
    {
      name: t.collaborations.partners[5].name,
      logo: Ibis,
      backgroundImage: DonPepe,
      games: t.collaborations.partners[5].games
    }
  ];

  const looped = [...collaborationsData, ...collaborationsData];

  return (
    <Section id="collaborations" background="light">
      <style>{`
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: carousel-scroll 30s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white text-center">
          {t.collaborations.title}
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="carousel-track flex gap-6" style={{ width: 'max-content' }}>
          {looped.map((collab, index) => (
            <div key={index} className="w-80 flex-none">
              <CollaborationCard
                name={collab.name}
                logo={collab.logo}
                backgroundImage={collab.backgroundImage}
                games={collab.games}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Collaborations;
