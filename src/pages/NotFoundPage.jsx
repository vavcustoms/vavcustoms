import { useNavigate, Link } from "react-router";
import { MoveLeft } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <title>Page Not Found | VAV Customs</title>
        <meta name="author" content="VAV Customs" />
      </div>

      <section className="relative flex flex-1 items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[180px] md:text-[260px] font-bold text-lightbrown select-none tracking-wider">404</span>
        </div>
        <div className="relative z-10 w-full max-w-xl text-center backdrop-blur-sm py-10">
          <h1 className="mt-8 text-3xl font-semibold text-dark md:text-4xl">Page not found</h1>
          <p className="mt-4 text-dark-mid/80 text-lg">The page you’re looking for doesn’t exist or may have been moved.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button onClick={() => navigate(-1)} className="btn btn-dark flex items-center">
              <MoveLeft size={16} />
              Go back
            </button>
            <Link to="/" className="btn btn-primary" prefetch="none">
              Take me home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
