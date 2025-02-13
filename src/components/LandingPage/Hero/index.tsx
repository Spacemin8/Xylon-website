"use client";

import { ISectionProps } from "@/types";
import { languages, fallbackLng } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n/client";

const Hero: React.FC<ISectionProps> = ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "hero");

  return (
    <>
      <section
        id="home"
        className="relative z-10 h-screen overflow-hidden border-b border-gray-200 bg-black/10 text-shadow-lg"
      >
        <div className="flex h-full w-full flex-col items-center justify-center bg-black/50">
          <h2 className="text-[44px] font-semibold text-white">
            {t("hero.title")}
          </h2>
          <p className="mt-4 text-2xl font-medium text-white">
            {t("hero.description")}
          </p>
          <div className="flex">
            <button className="m-16 rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white text-shadow-sm">
              {t("hero.button")}
            </button>
            <a href="https://docs.google.com/document/d/1FmDB2NaF71pislNpcXnH8J0mMcosX_AH/edit?usp=sharing&ouid=111630420283850699272&rtpof=true&sd=true">
              <button className="m-16 rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white text-shadow-sm">
                {t("hero.whitePaperButton")}
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
