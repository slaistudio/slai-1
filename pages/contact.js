import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
  return (
    <div className="p-10 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">聯絡我們</h1>
      <p className="mb-6">
        如果您有合作提案、資料提供意願，或對我們的語言模型服務有進一步了解需求，
        歡迎透過以下方式聯絡我們，我們將儘快回覆您。
      </p>
      <ul className="text-lg space-y-2 mb-6">
        <li><strong>Email：</strong>contact@slai.studio</li>
        <li><strong>地址：</strong>台灣</li>
        <li><strong>Line ID：</strong>@slai</li>
        <li><strong>聯絡時間：</strong>週一至週五 09:00 - 17:00</li>
      </ul>
      <div className="mt-6">
        <Link href="/apply" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          我要應徵／留下資訊
        </Link>
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