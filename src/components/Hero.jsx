import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="w-full pt-16.5 border-b border-lightgray">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-100 h-[60dvh] bg-white">
        <div className="py-14 px-12 flex-1 space-y-4">
          <h1 className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] flex flex-col leading-none">
            <span>Built to spec.</span>
            <span className="text-brand-500">Made to last.</span>
          </h1>
          <p className="text-dark-muted max-w-lg">
            Custom fabrication across multiple materials. From one-of-a-kind pieces to production runs, we build what others
            can't.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link className="btn btn-dark w-full md:w-auto">Custom Build</Link>
            <Link className="btn btn-secondary w-full md:w-auto">Shop Products</Link>
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-full bg-lightgray hidden md:block">
          <svg
            className="absolute top-0 left-0 h-full w-full"
            width="100%"
            height="100%"
            viewBox="-20 -15 380 440"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="340" height="400" fill="#f0f0f0"></rect>
            <g stroke="#d8d8d8" strokeWidth="0.5">
              <line x1="0" y1="40" x2="340" y2="40"></line>
              <line x1="0" y1="80" x2="340" y2="80"></line>
              <line x1="0" y1="120" x2="340" y2="120"></line>
              <line x1="0" y1="160" x2="340" y2="160"></line>
              <line x1="0" y1="200" x2="340" y2="200"></line>
              <line x1="0" y1="240" x2="340" y2="240"></line>
              <line x1="0" y1="280" x2="340" y2="280"></line>
              <line x1="0" y1="320" x2="340" y2="320"></line>
              <line x1="0" y1="360" x2="340" y2="360"></line>
              <line x1="40" y1="0" x2="40" y2="400"></line>
              <line x1="80" y1="0" x2="80" y2="400"></line>
              <line x1="120" y1="0" x2="120" y2="400"></line>
              <line x1="160" y1="0" x2="160" y2="400"></line>
              <line x1="200" y1="0" x2="200" y2="400"></line>
              <line x1="240" y1="0" x2="240" y2="400"></line>
              <line x1="280" y1="0" x2="280" y2="400"></line>
              <line x1="320" y1="0" x2="320" y2="400"></line>
            </g>

            <g fill="none" stroke="#e07820" strokeWidth="1" opacity="0.55">
              <path d="M 40 80 Q 170 40 300 120"></path>
              <path d="M 40 100 Q 170 60 300 140"></path>
              <path d="M 40 120 Q 170 80 300 160"></path>
            </g>
            <g fill="none" stroke="#e07820" strokeWidth="0.5" opacity="0.25">
              <path d="M 40 140 Q 170 100 300 180"></path>
              <path d="M 40 160 Q 170 120 300 200"></path>
            </g>

            <polygon
              points="170,168 220,210 170,252 120,210"
              fill="none"
              stroke="#e07820"
              strokeWidth="1.5"
              opacity="0.85"
            ></polygon>
            <polygon
              points="170,178 210,210 170,242 130,210"
              fill="rgba(224,120,32,0.05)"
              stroke="#e07820"
              strokeWidth="0.8"
              opacity="0.5"
            ></polygon>
            <circle cx="170" cy="210" r="5" fill="#e07820" opacity="0.9"></circle>
            <circle cx="170" cy="210" r="18" fill="none" stroke="#e07820" strokeWidth="0.5" opacity="0.3"></circle>
            <circle cx="170" cy="210" r="32" fill="none" stroke="#e07820" strokeWidth="0.3" opacity="0.15"></circle>

            <line x1="170" y1="178" x2="170" y2="168" stroke="#e07820" strokeWidth="0.8" opacity="0.7"></line>
            <line x1="170" y1="252" x2="170" y2="242" stroke="#e07820" strokeWidth="0.8" opacity="0.7"></line>
            <line x1="120" y1="210" x2="130" y2="210" stroke="#e07820" strokeWidth="0.8" opacity="0.7"></line>
            <line x1="210" y1="210" x2="220" y2="210" stroke="#e07820" strokeWidth="0.8" opacity="0.7"></line>

            <g stroke="#c0c0c0" strokeWidth="1" fill="none">
              <path d="M 40 40 L 40 54 M 40 40 L 54 40"></path>
              <path d="M 300 40 L 300 54 M 300 40 L 286 40"></path>
              <path d="M 40 370 L 40 356 M 40 370 L 54 370"></path>
              <path d="M 300 370 L 300 356 M 300 370 L 286 370"></path>
            </g>
            <g stroke="#c0c0c0" strokeWidth="0.5">
              <line x1="80" y1="38" x2="80" y2="42"></line>
              <line x1="120" y1="38" x2="120" y2="42"></line>
              <line x1="200" y1="38" x2="200" y2="42"></line>
              <line x1="240" y1="38" x2="240" y2="42"></line>
            </g>

            <circle cx="80" cy="160" r="2" fill="#e07820" opacity="0.45"></circle>
            <circle cx="120" cy="140" r="2" fill="#e07820" opacity="0.45"></circle>
            <circle cx="220" cy="150" r="2" fill="#e07820" opacity="0.45"></circle>
            <circle cx="260" cy="130" r="2" fill="#e07820" opacity="0.45"></circle>

            <g fill="none" stroke="#e07820" strokeWidth="0.8" opacity="0.28">
              <path d="M 40 320 Q 130 300 210 330 Q 260 345 300 320"></path>
              <path d="M 40 340 Q 130 320 210 350 Q 260 365 300 340"></path>
            </g>

            <rect width="60" height="400" fill="url(#fade-l)"></rect>
            <defs>
              <linearGradient id="fade-l" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f0f0f0" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#f0f0f0" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
