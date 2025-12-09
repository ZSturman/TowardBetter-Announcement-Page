import { CiInstagram, CiFacebook, CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { FaPinterest, FaWhatsapp } from "react-icons/fa6";

// All external links have been removed for the demo site.
// Components should open a local demo dialog instead of navigating.
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "",
    icon: <CiInstagram />,
  },
  {
    name: "Facebook",
    url: "",
    icon: <CiFacebook />,
  },
  {
    name: "LinkedIn",
    url: "",
    icon: <CiLinkedin />,
  },
];

export const shareOnSocialLinks: ShareOnSocialLink[] = [
  {
    name: "Twitter",
    icon: <CiTwitter />,
    url: "",
  },
  {
    name: "Facebook",
    icon: <CiFacebook />,
    url: "",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    url: "",
  },
  {
    name: "Email",
    icon: <CiMail />,
    url: "",
  },
];

export const generateShareLinks = (_linkToShare: string, _shareText: string, _shareImage: string) => {
  // Parameters intentionally unused for the demo site.
  void _linkToShare;
  void _shareText;
  void _shareImage;
  // Return share options but keep URLs empty for the demo site.
  const empty = "";
  return [
    { name: "Twitter", icon: <CiTwitter />, url: empty },
    { name: "Facebook", icon: <CiFacebook />, url: empty },
    { name: "LinkedIn", icon: <CiLinkedin />, url: empty },
    { name: "Pinterest", icon: <FaPinterest />, url: empty },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: empty },
    { name: "Email", icon: <CiMail />, url: empty },
  ];
};