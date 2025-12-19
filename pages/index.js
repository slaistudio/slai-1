import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>SLAI Studio｜AI 語言資料與模型訓練工作室</title>
        <meta
          name="description"
          content="SLAI Studio 是專注於 AI 語言資料蒐集、標註與模型訓練的工作室，提供研究與商業應用導向的 AI 解決方案。"
        />
        {/* 建議加上，避免行動裝置顯示異常 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-40" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#5b3a1d] text-center whitespace-nowrap md:whitespace-normal">
            簡語科技工作室
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-[#5b3a1d] text-center whitespace-nowrap md:whitespace-normal mt-2">
            SLAI Studio
          </h2>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}