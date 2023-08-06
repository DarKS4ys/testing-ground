import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const Founders = [
  {
    name: 'DarKS4ys',
    image: '/dark.jpg',
    description: 'Editing and Design Expert',
    href: 'https://www.youtube.com/@darks4ys',
  },
  {
    name: 'SPHE',
    image: '/sphe.jpg',
    description: 'Editing and Design Expert',
    href: 'https://www.youtube.com/@ssstoic',
  },
  {
    name: 'Never Ending Motivation',
    image: '/nem.jpg',
    description: 'Editing and Motivation Expert',
    href: 'https://www.youtube.com/@NeverEndingMotivationNEM',
  },
  {
    name: 'ScholarMindset',
    image: '/scholar.jpg',
    description: 'Shortform Content & SEO Expert',
    href: 'https://www.youtube.com/@ScholarMindset',
  },
  {
    name: 'TuhoojaHamudi',
    image: '/hamudi.jpg',
    description: 'Bodybuilder & Finance Manager',
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex justify-center items-center mt-40">
        <div className="text-5xl font-semibold mb-6">
          <h2>Meet the team</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Founders.slice(0, 4).map((founder) => (
          <div
            key={founder.name}
            className="w-82 text-center justify-center items-center flex flex-col bg-slate-800/20 border border-white/25 rounded-xl p-4 px-8 m-4"
          >
            <div className="items-center justify-center">
              <div className="font-semibold tracking-wide text-xl">
                {founder.name}
              </div>
              <div className="relative flex justify-center items-center m-6">
                <Link href={founder.href}>
                  <Image
                    className="rounded-full"
                    src={founder.image}
                    width={150}
                    height={150}
                    alt="Scholar"
                  />
                  <div
                    className="absolute top-0 left-0 w-full h-full rounded-full flex justify-center transition-all items-center opacity-0 hover:opacity-100"
                    style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    <FiExternalLink size={32} color="white" />
                  </div>
                </Link>
              </div>
              <div>{founder.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 flex-col mb-32">
        <div className="bg-slate-800/20 border border-white/25 rounded-xl p-6 px-8 m-4 flex flex-col text-center w-82">
          <div className="font-semibold tracking-wide text-xl">
            {Founders[4].name}
          </div>
          <div className="relative w-150 h-150 flex justify-center items-center m-6">
            <Image
              className="rounded-full"
              src={Founders[4].image}
              width={150}
              height={150}
              alt="Scholar"
            />
          </div>
          <div>{Founders[4].description}</div>
        </div>
      </div>
    </div>
  );
}
