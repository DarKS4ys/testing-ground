import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

const Founders = [
  {
    name: 'DarKS4ys',
    image: '/dark.jpg',
    description: 'Editing and Design Expert',
  },
  {
    name: 'SPHE',
    image: '/sphe.jpg',
    description: 'Editing and Design Expert',
  },
  {
    name: 'Never Ending Motivation',
    image: '/nem.jpg',
    description: 'Editing and Motivation Expert',
  },
  {
    name: 'ScholarMindset',
    image: '/scholar.jpg',
    description: 'Shortform Content & SEO Expert',
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
      {/* <FiExternalLink size={32} /> */}
      <div className="grid grid-cols-2 gap-4">
        {Founders.slice(0, 4).map((founder) => (
          <div
            key={founder.name}
            className="w-72 text-center justify-center items-center flex flex-col bg-slate-800/20 border border-white/25 rounded-xl p-4 m-4"
          >
            <div className="items-center justify-center">
              {founder.name}
              <div className="items-center justify-center flex m-6">
                <Image
                  className="rounded-full"
                  src={founder.image}
                  width={150}
                  height={150}
                  alt="Scholar"
                />
              </div>

              <div>{founder.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 flex-col">
        <div className="bg-slate-800/20 border border-white/25 rounded-xl p-4 m-4 flex flex-col text-center w-72">
          {Founders[4].name}
          <div className="items-center justify-center flex m-6">
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
