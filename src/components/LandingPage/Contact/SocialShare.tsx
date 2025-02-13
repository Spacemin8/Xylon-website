import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export default function SocialShare() {
  return (
    <div className="mt-5 flex items-center justify-center gap-3">
      <div>
        <a href="https://www.facebook.com/">
        <FacebookIcon size={40} borderRadius={40} />
        </a>
      </div>
      <div>
      <a href="https://www.twitter.com/">
        <TwitterIcon size={40} borderRadius={40} />
        </a>
      </div>
      <div>
      <a href="https://web.telegram.org/">
        <TelegramIcon size={40} borderRadius={40} />
      </a>
      </div>
      <div>
        <a href="https://web.whatsapp.com/">
        <WhatsappIcon size={40} borderRadius={40} />
        </a>
      </div>
    </div>
  );
}
