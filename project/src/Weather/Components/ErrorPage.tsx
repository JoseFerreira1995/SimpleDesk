import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

interface ErrorPageProps {
  code?: string;
  title?: string;
  message?: string;
  onGoBack?: () => void;
  onGoHome?: () => void;
}

function ErrorPage({
  code = "404",
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or has been moved.",
  onGoBack,
  onGoHome,
}: ErrorPageProps) {
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      window.history.back();
    }
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100">
          <AlertTriangle className="w-12 h-12 text-red-600" strokeWidth={1.5} />
        </div>

        <div className="mb-6">
          <h1 className="text-8xl font-bold text-slate-900 mb-2 tracking-tight">
            {code}
          </h1>
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-sm hover:shadow min-w-40 justify-center"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            Go Back
          </button>
          <button
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg min-w-40 justify-center"
          >
            <Home className="w-5 h-5" strokeWidth={2} />
            Go Home
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Need help?{" "}
            <a
              href="/contact"
              className="text-slate-700 hover:text-slate-900 font-medium underline underline-offset-4"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
