const BlueprintBg = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(224,120,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(224,120,32,0.05)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      <svg
        className="absolute inset-0 top-0 left-0 w-full pointer-events-none"
        viewBox="0 0 800 80"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="none" stroke="#e07820" strokeWidth="0.8" opacity="0.3">
          <path d="M 0 40 Q 200 10 400 50 Q 600 90 800 40"></path>
          <path d="M 0 55 Q 200 25 400 65 Q 600 105 800 55"></path>
        </g>
      </svg>
    </>
  );
};

export default BlueprintBg;
