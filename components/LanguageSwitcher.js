import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname } = router;

  return (
    <div className="space-x-2">
      {locales.map((loc) => (
        <Link key={loc} href={pathname} locale={loc}>
          <button disabled={locale === loc} className="px-2 py-1 border rounded">
            {loc.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}