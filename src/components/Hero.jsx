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
            <rect width="340" height="410" fill="#f0f0f0"></rect>

            <g stroke="#d8d8d8" stroke-width="0.5">
              <line x1="0" y1="40" x2="340" y2="40"></line>
              <line x1="0" y1="80" x2="340" y2="80"></line>
              <line x1="0" y1="120" x2="340" y2="120"></line>
              <line x1="0" y1="160" x2="340" y2="160"></line>
              <line x1="0" y1="200" x2="340" y2="200"></line>
              <line x1="0" y1="240" x2="340" y2="240"></line>
              <line x1="0" y1="280" x2="340" y2="280"></line>
              <line x1="0" y1="320" x2="340" y2="320"></line>
              <line x1="0" y1="360" x2="340" y2="360"></line>
              <line x1="40" y1="0" x2="40" y2="410"></line>
              <line x1="80" y1="0" x2="80" y2="410"></line>
              <line x1="120" y1="0" x2="120" y2="410"></line>
              <line x1="160" y1="0" x2="160" y2="410"></line>
              <line x1="200" y1="0" x2="200" y2="410"></line>
              <line x1="240" y1="0" x2="240" y2="410"></line>
              <line x1="280" y1="0" x2="280" y2="410"></line>
              <line x1="320" y1="0" x2="320" y2="410"></line>
            </g>

            <rect
              x="40"
              y="48"
              width="260"
              height="72"
              rx="2"
              fill="none"
              stroke="#b0b0b0"
              stroke-width="1"
              opacity="0.7"
            ></rect>
            <g fill="none" stroke="#c0c0c0" stroke-width="0.8" opacity="0.9">
              <path d="M 42 58 Q 100 54 160 60 Q 220 66 298 58"></path>
              <path d="M 42 67 Q 90 63 150 69 Q 210 75 298 67"></path>
              <path d="M 42 75 Q 110 71 170 77 Q 230 83 298 75"></path>
              <path d="M 42 84 Q 95 80 155 86 Q 215 92 298 84"></path>
              <path d="M 42 93 Q 105 89 165 95 Q 225 101 298 93"></path>
              <path d="M 42 102 Q 88 98 148 104 Q 208 110 298 102"></path>
              <path d="M 42 110 Q 115 106 175 112 Q 235 118 298 110"></path>
            </g>
            <ellipse cx="230" cy="84" rx="12" ry="7" fill="none" stroke="#b8b8b8" stroke-width="0.8" opacity="0.8"></ellipse>
            <ellipse cx="230" cy="84" rx="6" ry="3" fill="none" stroke="#b8b8b8" stroke-width="0.6" opacity="0.6"></ellipse>
            <line x1="40" y1="120" x2="40" y2="126" stroke="#b0b0b0" stroke-width="1" opacity="0.6"></line>
            <line x1="300" y1="120" x2="300" y2="126" stroke="#b0b0b0" stroke-width="1" opacity="0.6"></line>
            <path
              d="M 40 120 Q 170 124 300 120 L 300 126 Q 170 130 40 126 Z"
              fill="#e0e0e0"
              stroke="#b0b0b0"
              stroke-width="0.5"
              opacity="0.5"
            ></path>

            <rect
              x="55"
              y="38"
              width="230"
              height="8"
              rx="2"
              fill="none"
              stroke="#a0a0a0"
              stroke-width="1"
              opacity="0.7"
            ></rect>
            <rect
              x="55"
              y="20"
              width="8"
              height="28"
              rx="1"
              fill="none"
              stroke="#a0a0a0"
              stroke-width="1"
              opacity="0.6"
            ></rect>
            <rect
              x="277"
              y="20"
              width="8"
              height="28"
              rx="1"
              fill="none"
              stroke="#a0a0a0"
              stroke-width="1"
              opacity="0.6"
            ></rect>
            <rect
              x="48"
              y="46"
              width="22"
              height="4"
              rx="1"
              fill="none"
              stroke="#a0a0a0"
              stroke-width="0.8"
              opacity="0.5"
            ></rect>
            <rect
              x="270"
              y="46"
              width="22"
              height="4"
              rx="1"
              fill="none"
              stroke="#a0a0a0"
              stroke-width="0.8"
              opacity="0.5"
            ></rect>
            <rect
              x="152"
              y="34"
              width="36"
              height="16"
              rx="2"
              fill="none"
              stroke="#e07820"
              stroke-width="1"
              opacity="0.75"
            ></rect>
            <rect
              x="162"
              y="50"
              width="16"
              height="22"
              rx="1"
              fill="none"
              stroke="#e07820"
              stroke-width="1"
              opacity="0.7"
            ></rect>
            <path
              d="M 164 72 L 162 80 L 170 84 L 178 80 L 176 72 Z"
              fill="rgba(224,120,32,0.08)"
              stroke="#e07820"
              stroke-width="1"
              opacity="0.85"
            ></path>
            <line
              x1="170"
              y1="84"
              x2="170"
              y2="96"
              stroke="#e07820"
              stroke-width="1.5"
              opacity="0.9"
              stroke-linecap="round"
            ></line>
            <circle cx="170" cy="97" r="2.5" fill="#e07820" opacity="0.9"></circle>

            <g fill="none" stroke="#e07820" stroke-width="0.9" opacity="0.55">
              <path d="M 60 104 L 290 104"></path>
              <path d="M 290 104 L 290 110"></path>
              <path d="M 290 110 L 60 110"></path>
              <path d="M 60 110 L 60 116"></path>
              <path d="M 60 116 L 290 116"></path>
            </g>
            <g stroke="#e07820" stroke-width="0.8" opacity="0.55" fill="none">
              <path d="M 285 101 L 290 104 L 285 107"></path>
              <path d="M 65 107 L 60 110 L 65 113"></path>
              <path d="M 285 113 L 290 116 L 285 119"></path>
            </g>

            <rect
              x="80"
              y="185"
              width="60"
              height="80"
              rx="1"
              fill="none"
              stroke="#b0b0b0"
              stroke-width="1"
              opacity="0.6"
            ></rect>
            <g fill="none" stroke="#c4c4c4" stroke-width="0.6" opacity="0.8">
              <path d="M 82 195 Q 108 192 138 195"></path>
              <path d="M 82 205 Q 108 202 138 205"></path>
              <path d="M 82 215 Q 108 212 138 215"></path>
              <path d="M 82 225 Q 108 222 138 225"></path>
              <path d="M 82 235 Q 108 232 138 235"></path>
              <path d="M 82 245 Q 108 242 138 245"></path>
              <path d="M 82 255 Q 108 252 138 255"></path>
            </g>

            <rect
              x="200"
              y="185"
              width="60"
              height="80"
              rx="1"
              fill="none"
              stroke="#b0b0b0"
              stroke-width="1"
              opacity="0.6"
            ></rect>
            <g fill="none" stroke="#c4c4c4" stroke-width="0.6" opacity="0.8">
              <path d="M 202 195 Q 228 192 258 195"></path>
              <path d="M 202 205 Q 228 202 258 205"></path>
              <path d="M 202 215 Q 228 212 258 215"></path>
              <path d="M 202 225 Q 228 222 258 225"></path>
              <path d="M 202 235 Q 228 232 258 235"></path>
              <path d="M 202 245 Q 228 242 258 245"></path>
              <path d="M 202 255 Q 228 252 258 255"></path>
            </g>

            <g fill="rgba(224,120,32,0.07)" stroke="#e07820" stroke-width="1.1" opacity="0.85">
              <path d="M 140 195 L 155 200 L 155 215 L 140 220 Z"></path>
              <path d="M 140 230 L 155 235 L 155 250 L 140 255 Z"></path>
              <path
                d="M 140 220 L 148 222 L 148 228 L 140 230 Z"
                fill="rgba(224,120,32,0.04)"
                stroke="#e07820"
                stroke-width="0.7"
                opacity="0.6"
              ></path>
            </g>

            <g fill="rgba(224,120,32,0.04)" stroke="#e07820" stroke-width="0.9" opacity="0.7" stroke-dasharray="3,2">
              <path d="M 200 195 L 185 200 L 185 215 L 200 220 Z"></path>
              <path d="M 200 230 L 185 235 L 185 250 L 200 255 Z"></path>
            </g>

            <text
              x="170"
              y="275"
              text-anchor="middle"
              fill="#e07820"
              font-size="7"
              opacity="0.6"
              font-family="monospace"
              letter-spacing="1"
            >
              DOVETAIL JOINT
            </text>
            <line x1="120" y1="272" x2="148" y2="272" stroke="#e07820" stroke-width="0.5" opacity="0.4"></line>
            <line x1="192" y1="272" x2="220" y2="272" stroke="#e07820" stroke-width="0.5" opacity="0.4"></line>

            <g stroke="#e07820" stroke-width="0.6" opacity="0.4" fill="none">
              <line x1="80" y1="180" x2="260" y2="180"></line>
              <line x1="80" y1="177" x2="80" y2="183"></line>
              <line x1="260" y1="177" x2="260" y2="183"></line>
              <text x="170" y="178" text-anchor="middle" fill="#e07820" font-size="6" opacity="0.7" font-family="monospace">
                180mm
              </text>
              <line x1="265" y1="185" x2="265" y2="265"></line>
              <line x1="262" y1="185" x2="268" y2="185"></line>
              <line x1="262" y1="265" x2="268" y2="265"></line>
              <text x="272" y="228" text-anchor="start" fill="#e07820" font-size="6" opacity="0.7" font-family="monospace">
                80mm
              </text>
            </g>

            <g fill="none" stroke="#e07820" stroke-width="0.9" opacity="0.45">
              <path d="M 60 310 Q 100 295 140 310 Q 180 325 220 305 Q 260 290 300 310"></path>
              <path d="M 60 330 Q 100 315 140 330 Q 180 345 220 325 Q 260 310 300 330"></path>
            </g>

            <circle cx="60" cy="310" r="3" fill="none" stroke="#e07820" stroke-width="0.8" opacity="0.5"></circle>
            <circle cx="300" cy="330" r="2" fill="#e07820" opacity="0.5"></circle>

            <g stroke="#c0c0c0" stroke-width="1" fill="none">
              <path d="M 40 40 L 40 54 M 40 40 L 54 40"></path>
              <path d="M 300 40 L 300 54 M 300 40 L 286 40"></path>
              <path d="M 40 370 L 40 356 M 40 370 L 54 370"></path>
              <path d="M 300 370 L 300 356 M 300 370 L 286 370"></path>
            </g>

            <g stroke="#c0c0c0" stroke-width="0.5">
              <line x1="80" y1="38" x2="80" y2="42"></line>
              <line x1="120" y1="38" x2="120" y2="42"></line>
              <line x1="200" y1="38" x2="200" y2="42"></line>
              <line x1="240" y1="38" x2="240" y2="42"></line>
            </g>

            <rect width="60" height="410" fill="url(#fade-l)"></rect>
            <defs>
              <linearGradient id="fade-l" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#f0f0f0" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="#f0f0f0" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
