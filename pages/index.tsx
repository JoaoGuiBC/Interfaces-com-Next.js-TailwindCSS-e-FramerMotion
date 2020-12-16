import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from "../components/Layout"

interface CardProps {
  href: string;
  imgSource: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, imgSource, layoutId }) => (
  <Link href={href}>
    <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition duration-300">
      <motion.img 
        src={imgSource} 
        className="w-full h-full" 
        layoutId={layoutId} 
      />
    </div>
  </Link>
)

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
        Construa sites modernos com agilidade sem precisar sair do HTML
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card 
          href={'/nextjs'}  
          imgSource={'/img/nextjs.svg'}
          layoutId={'nextjs-logo'}
        />
        <Card 
          href={'/tailwind'}  
          imgSource={'/img/tailwind.svg'}
          layoutId={'tailwind-logo'}
        />
        <Card 
          href={'/framermotion'}  
          imgSource={'/img/framermotion.svg'}
          layoutId={'framermotion-logo'}
        />
      </div>
    </div>
  )
}
