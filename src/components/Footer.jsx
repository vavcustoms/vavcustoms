import BlueprintBg from "@/components/BlueprintBg";
import miniLogo from "@/assets/images/1.png";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-lightgray border-t border-brand-500/50 text-center px-12">
      <div className="py-40">
        <BlueprintBg />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-start">
            <div className="flex items-center gap-2 mb-4">
              <img className="w-36" src={miniLogo} alt="VAV Customs Logo" />
            </div>
            <p className="text-dark/70 max-w-md">
              Custom woodworking and CNC machining, built the way you imagined it, with the quality you deserve.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Let's make your dream item</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" target="_blank" className="flex items-center gap-2 btn btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="text-xs uppercase">Facebook</span>
              </a>
              <a href="#" target="_blank" className="flex items-center gap-2 btn btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="text-xs uppercase">Instagram</span>
              </a>
              <a href="#" target="_blank" className="flex items-center gap-2 btn btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-at-sign"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                </svg>
                <span className="text-xs uppercase">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 border-t border-dark-mid/20">
        <p className="flex items-center gap-2 text-sm text-dark/60 pt-4">
          <Copyright size={12} /> VAV Customs {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
