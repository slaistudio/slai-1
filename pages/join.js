import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Join() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-[#fdf9f3] text-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#5b3a1d]">加入我們</h1>

      {[ 
      
        {
          title: '聯絡我們',
          content: (
            <>
              <p className="text-lg leading-relaxed mb-2 text-justify">
                簡語科技工作室是一個自由、專業且具備研究熱誠的團隊，致力於人工智慧的深度探索與的應用實踐，作為新創企業，站在巨人的肩膀上看世界，才能不斷突破，乘科技洪流展翅高飛！
              </p>
              <p className="text-lg leading-relaxed mb-2 text-justify">
                如果您對語言資料、人工智慧應用有高度熱情，我們將提供薪資、獎金以及國外實地考察的機會！
              </p>
              <p className="text-lg leading-relaxed mb-2 text-justify">
                運用您的閒暇之餘，協助我們創造訓練素材及市場利潤。
              </p>
              <p className="text-lg leading-relaxed mb-4 text-justify">
                運用您的社交人脈，協助我們涉略華語文學及研究資料。
              </p>
<p className="text-lg mt-4">
  歡迎透過 <strong>slai.tecstudio@gmail.com</strong> 或是點擊{' '}
  <Link href="/apply" className="text-[#7e441f] underline hover:scale-105 hover:font-semibold transition">
    這裡
  </Link>{' '}
  聯絡我們，將有專員與您聯繫，期待您的來信！
</p>
            </>
          )
        }
      ].map(({ title, content }, index) => (
        <div key={index} className="relative border-4 border-[#c4a484] rounded-xl p-8 mb-12 shadow-md bg-white bg-opacity-90">
          <SVGCorner position="tl" />
          <SVGCorner position="tr" />
          <SVGCorner position="bl" />
          <SVGCorner position="br" />
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#7e441f]">{title}</h2>
          <div>{content}</div>
        </div>
      ))}
    </div>
  );
}

// SVG 四角元件
function SVGCorner({ position }) {
  const baseClass = "absolute w-10 h-10 text-[#c4a484]";
  const positions = {
    tl: "top-0 left-0 rotate-0",
    tr: "top-0 right-0 rotate-90",
    br: "bottom-0 right-0 rotate-180",
    bl: "bottom-0 left-0 rotate-[270deg]",
  };

  return (
    <svg
      className={`${baseClass} ${positions[position]}`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M100,0 Q0,0 0,100"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
      />
    </svg>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
