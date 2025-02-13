"use client";

import { ISectionProps } from "@/types";
import { languages, fallbackLng } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n/client";
import SocialShare from "@/components/LandingPage/Contact/SocialShare";
const Contact: React.FC<ISectionProps> = ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "contact");

  return (
    <section
      id="contact"
      className="relative z-10 flex h-screen flex-col items-center justify-center border-b border-white/40 bg-black/50 text-white text-shadow-lg lg:px-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Heading */}
        <h2 className="mb-6 text-4xl font-bold lg:text-4xl">
          {t("contact.title")}
        </h2>
        <p className="mb-10 text-lg">
          {t("contact.description1")}{" "}
          <a
            href="mailto:info@xylon.dev"
            className="underline hover:text-teal-400"
          >
            info@xylon.dev
          </a>{" "}
          {t("contact.description2")}
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/30 bg-black/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              {[t("contact.form.email")]}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-white/30 bg-black/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              {t("contact.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-lg border border-white/30 bg-black/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-500 py-3 text-lg font-medium text-white shadow-lg transition duration-200 hover:bg-teal-400"
          >
            {t("contact.form.button")}
          </button>
        </form>
        <SocialShare />
      </div>
    </section>
  );
};

export default Contact;
