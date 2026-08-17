import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Shield, TrendingUp, AlertCircle, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || '/';

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { icon: Shield, text: 'Back up your financial readiness progress' },
    { icon: TrendingUp, text: 'Save negotiation strategies to the cloud' },
    { icon: AlertCircle, text: 'Pick up where you left off on any device' },
    { icon: BookOpen, text: 'Sync your checklists across sessions' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">

        {/* Left panel — branding & benefits */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Home className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">HomeBuyer Pro</h1>
              <p className="text-sm text-gray-500">Texas Home Buyer Guide</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your trusted guide to buying a home in Texas
          </h2>
          <p className="text-gray-600 mb-8">
            You can use every feature without an account. Sign in with Google if you'd like
            your progress and saved properties backed up and available on other devices.
          </p>

          <ul className="space-y-4">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel — login card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
          {/* Mobile branding */}
          <div className="flex items-center space-x-2 mb-6 md:hidden">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">HomeBuyer Pro</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Save your progress</h2>
          <p className="text-gray-500 mb-8">Signing in is optional — it just syncs your data to the cloud</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {/* Google SVG logo */}
            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {loading ? 'Signing in...' : 'Continue with Google'}
          </button>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              By signing in, you agree to our Terms of Service and Privacy Policy.
              Your data is secured and never sold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
