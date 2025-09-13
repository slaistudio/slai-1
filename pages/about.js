import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">關於簡語</h1>
      <p className="mb-6 leading-8">
        在席捲全球的人工智慧浪潮中，語言科技正站上未來產業的尖端，乘著技術革新的風口
      </p>
      <p className="mb-6 leading-8 font-bold">
        「簡語科技工作室」順勢而生...
      </p>
      <p className="mb-6 leading-8">
        我們專注於語言資料蒐整與大規模語言模型訓練，協助各領域產業打造客製化語言理解系統。
      </p>
      <p className="mb-6 leading-8">
        語言不僅是溝通工具，更是人與科技的橋梁。
      </p>
      <p className="mb-6 leading-8">
        我們積極參與國際展會與產業論壇，推動學術合作與文化交流，讓 AI 技術跨越領域與邊界，發揮更深遠的價值。
      </p>
      <p className="mb-6 leading-8">
        從自然語言處理到語音辨識、從智慧客服到自動問答模組，語言，不只是溝通工具，更是串聯人與科技的橋梁。
      </p>
      <p className="leading-8 font-bold  text-center font-size:32">
        讓語言變得更智慧     ，    也讓服務更貼近人心
      </p>
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