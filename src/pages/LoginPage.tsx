import { Link } from 'react-router-dom';
import { useConfigForm } from '../hooks/forms/useConfigForm';
import { loginFormConfig } from '../types/form-configs/login.config';
import { Button, Input } from '../global/components/ui';

const LoginPage = () => {
  const { form, handleSubmit } = useConfigForm({
    config: loginFormConfig,
    isEdit: false,
    onSubmit: async (data) => {
      console.log('Login:', data);
      alert('Login functionality to be implemented');
    },
  });

  const { register, formState: { errors, isSubmitting } } = form;

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-primary-400">
            NB
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              {...register('email')}
              error={errors.email?.message as string}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              error={errors.password?.message as string}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-400 hover:text-primary-300">
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full" isLoading={isSubmitting}>
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-400 hover:text-primary-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center space-y-2">
          <Link to="/role-select" className="block text-primary-400 hover:text-primary-300 text-sm">
            Demo Dashboards →
          </Link>
          <Link to="/" className="block text-gray-400 hover:text-primary-400 text-sm">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;