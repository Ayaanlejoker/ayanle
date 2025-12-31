import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-neutral-900 text-white">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center items-center p-8 lg:p-16">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 inline-block">
                            NexusLearn
                        </Link>
                        <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
                        <p className="mt-2 text-gray-400">Please enter your details to sign in.</p>
                    </div>

                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-600 bg-white/5 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-400">Remember me</label>
                            </div>
                            <Link href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400">
                        Don't have an account?{' '}
                        <Link href="/register" className="font-medium text-indigo-400 hover:text-indigo-300">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image/Decoration */}
            <div className="hidden lg:block relative bg-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20" />
                <div className="absolute top-1/2 left-1/2 -ml-[30rem] -mt-[20rem] w-[60rem] h-[60rem] bg-indigo-600/10 blur-[100px] rounded-full" />
                <div className="relative z-10 flex h-full items-center justify-center p-16">
                    <blockquote className="space-y-2">
                        <p className="text-lg font-medium text-white/80">
                            "NexusLearn transformed my career. The quality of courses and the community support is unmatched."
                        </p>
                        <footer className="text-sm text-gray-400">— Sarah Chen, Senior Developer</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
