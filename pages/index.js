import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>簡語科技工作室｜SLAI Studio｜AI 語言資料與模型訓練</title>

        <meta
          name="description"
          content="簡語科技工作室（簡語科技，SLAI Studio）專注於 AI 語言資料蒐集、標註、模型訓練與網站系統開發，提供研究與商業應用導向的 AI 解決方案。"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="簡語科技工作室｜SLAI Studio" />
        <meta
          property="og:description"
          content="簡語科技工作室專注於 AI 語言資料、模型訓練與現代化網站開發"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.slai-tech.com/" />
        <meta
          property="og:image"
          content="https://www.slai-tech.com/og-image.png"
        />

        {/* 基本 SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.slai-tech.com/" />
      </Head>

      {/* Hero 區（原視覺完全不動） */}
      <div
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-40" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#5b3a1d] whitespace-nowrap md:whitespace-normal">
            簡語科技工作室
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-[#5b3a1d] whitespace-nowrap md:whitespace-normal mt-2">
            SLAI Studio
          </h2>
        </div>
      </div>

      {/* SEO 語意內容（不顯示、不影響版面） */}
      <section className="seo-content" aria-hidden="true">
        <h1>簡語科技工作室（簡語科技）</h1>

        <h2>SLAI Studio</h2>

        <p>
          簡語科技工作室是一間位於台灣的科技工作室，專注於 AI
          語言資料蒐集、資料標註、模型訓練與應用部署。
        </p>

        <p>
          SLAI Studio 提供研究與商業導向的人工智慧解決方案，
          協助組織與團隊建立可長期維護的 AI 系統。
        </p>

        <p>
          服務項目包含 AI 語言資料處理、模型微調、網站系統開發、
          SEO 架構優化與自動化工具整合。
        </p>
      </section>
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
