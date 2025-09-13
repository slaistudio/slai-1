import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-[#5b3a1d] mb-12">核心業務</h1>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0">
        {/* 專責處理區塊 */}
        <div className="w-full md:w-1/2 max-w-md mx-auto border-2 border-[#c4a484] p-6 rounded-xl shadow-md bg-white bg-opacity-90">
          <h2 className="text-2xl font-semibold text-[#7e441f] mb-4 text-center">專責處理</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>文字與多媒體資料收集</li>
            <li>資料庫建構與智慧分類</li>
            <li>語言模型專業調整訓練</li>
            <li>語意分析與智慧對話系統</li>
            <li>模型跨領域訓練與應用</li>
          </ul>
        </div>

        {/* 服務提供區塊 */}
        <div className="w-full md:w-1/2 max-w-md mx-auto border-2 border-[#c4a484] p-6 rounded-xl shadow-md bg-white bg-opacity-90">
          <h2 className="text-2xl font-semibold text-[#7e441f] mb-4 text-center">服務提供</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>教育平台兼智慧助教語言引擎</li>
            <li>華語文化交流推廣及平台論壇</li>
            <li>電商商品描述生成與翻譯優化</li>
            <li>社群媒體自動回應與輿情分析</li>
            <li>車用機械用媒體對答訓練模組</li>
            <li>政府與NGO組織語意訓練資訊</li>
          </ul>
        </div>

        {/* 外部交流區塊 */}
        <div className="w-full md:w-1/2 max-w-md mx-auto border-2 border-[#c4a484] p-6 rounded-xl shadow-md bg-white bg-opacity-90">
          <h2 className="text-2xl font-semibold text-[#7e441f] mb-4 text-center">外部交流與拓展</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>產業展會</li>
            <li>技術論壇</li>
            <li>學術研究</li>
            <li>文化交流</li>
            <li>宗教推廣</li>
            <li>社群創新</li>
          </ul>
        </div>
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
