import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-manrope",
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://сочи-жк-море.рф"),
  title: {
    template: "%s | ЖК «Море» Сочи",
    default: "ЖК «Море» Сочи — Премиальные квартиры у моря в Мамайке",
  },
  description: "Официальный портал подбора недвижимости в ЖК «Море». Честные цены, проверенные планировки и полная информация об инфраструктуре района Мамайка в Сочи.",
  keywords: ["ЖК Море Сочи", "купить квартиру в Сочи", "новостройки Мамайка", "недвижимость у моря", "AVA Group Сочи"],
  robots: "index, follow",
  verification: {
    google: "Ir7_I-YOweNrAMGTxSYWBfkN5pD-YuGOIpErmmBtEzI",
    yandex: "f97d56b745e2f037",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${jakarta.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-brand-accent/20 selection:text-brand-accent overflow-x-hidden">
        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

              ym(94713465, 'init', {webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/94713465"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
