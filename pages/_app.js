import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { appWithTranslation } from "next-i18next";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-[#fdf6e3] text-gray-800 shadow px-4 py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          {/* 手機版：Logo + 導覽列分兩行 */}
          <div className="block md:hidden">
            <div className="flex items-center justify-start mb-1">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-90 transition"
              >
                <Image src="/logo.png" alt="簡語 Logo" width={36} height={36} />
                <span className="text-base font-normal tracking-wide whitespace-nowrap">
                  簡語
                </span>
              </Link>
            </div>

            <div className="flex justify-between text-sm font-medium">
              <Link
                href="/"
                className="w-1/5 text-center hover:text-[#b30000] transition"
              >
                首頁
              </Link>
              <Link
                href="/about"
                className="w-1/5 text-center hover:text-[#b30000] transition"
              >
                關於簡語
              </Link>
              <Link
                href="/services"
                className="w-1/5 text-center hover:text-[#b30000] transition"
              >
                核心業務
              </Link>
              <Link
                href="/join"
                className="w-1/5 text-center hover:text-[#b30000] transition"
              >
                加入我們
              </Link>
              <Link
                href="/apply"
                className="w-1/5 text-center hover:scale-105 hover:font-semibold transition"
              >
                應徵表單
              </Link>
            </div>
          </div>

          {/* 桌機版：Logo 與導覽列同排 */}
          <div className="hidden md:flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-90 transition"
            >
              <Image src="/logo.png" alt="簡語 Logo" width={40} height={40} />
<span className="flex flex-col leading-tight">
  <span
    className="text-lg font-bold text-gray-800 whitespace-nowrap"
    style={{ fontFamily: "DFKai-SB, BiauKai, KaiTi, serif" }}
  >
    簡語
  </span>
</span>
            </Link>

            <div className="flex space-x-8 text-base font-medium">
              <Link href="/" className="hover:text-[#b30000] transition">
                首頁
              </Link>
              <Link href="/about" className="hover:text-[#b30000] transition">
                關於簡語
              </Link>
              <Link href="/services" className="hover:text-[#b30000] transition">
                核心業務
              </Link>
              <Link href="/join" className="hover:text-[#b30000] transition">
                加入我們
              </Link>
              <Link
                href="/apply"
                className="hover:scale-105 hover:font-semibold transition"
              >
                應徵表單
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-[#fefcf5] min-h-screen">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);