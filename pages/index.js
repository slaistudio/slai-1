import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden"
         style={{ backgroundImage: "url('/hero.png')" }}>
      <div className="absolute inset-0 bg-white bg-opacity-40" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#5b3a1d] text-center whitespace-nowrap md:whitespace-normal"
>簡語科技工作室</h1>
        <h1 className="text-3xl md:text-5xl font-bold text-[#5b3a1d] text-center whitespace-nowrap md:whitespace-normal"
>SL AI Studio</h1>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}