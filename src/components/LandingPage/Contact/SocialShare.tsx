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
      <FacebookShareButton url={"https://facebook.com"}>
        <FacebookIcon size={40} borderRadius={40} />
      </FacebookShareButton>
      <TwitterShareButton url={"https://Twitter.com"}>
        <TwitterIcon size={40} borderRadius={40} />
      </TwitterShareButton>
      <TelegramShareButton url={"https://web.telegram.org/"}>
        <TelegramIcon size={40} borderRadius={40} />
      </TelegramShareButton>
      <WhatsappShareButton url={"https://web.whatsapp.com/"}>
        <WhatsappIcon size={40} borderRadius={40} />
      </WhatsappShareButton>
    </div>
  );
}
