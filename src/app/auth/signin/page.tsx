// import Link from 'next/link';

// const LoginPage = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center px-6  pt-24 md:pt-32 pb-10">
//             <div className="glass p-6 pt-4 rounded-4xl w-full max-w-md space-y-8 border-white/5">
//                 <div className="text-center">
//                     <div className="w-30 flex items-center justify-center font-bold text-black text-2xl mx-auto mb-2 transition-transform hover:scale-110">
//                         <img src="/assets/logo.svg" alt="" />
//                     </div>
//                     <h1 className="text-3xl font-bold">Welcome Back</h1>
//                     <p className="text-gray-500 mt-2">Continue your coding journey</p>
//                 </div>

//                 <form className="space-y-6">
//                     <div className="space-y-2">
//                         <label className="text-sm font-medium text-gray-400">Email Address</label>
//                         <input
//                             type="email"
//                             placeholder="name@school.com"
//                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-mono"
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-sm font-medium text-gray-400">Password</label>
//                         <input
//                             type="password"
//                             placeholder="••••••••"
//                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-mono"
//                         />
//                     </div>
//                     <Link href="/">
//                     <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white   transition-all duration-300   text-black font-bold rounded-2xl w-full py-2 text-lg">Sign In</button></Link>
//                 </form>

//                 <div className="text-center text-sm text-gray-500">
//                     Don&apos;t have an account? <Link href="/signup" className="text-brand-accent hover:underline">Start for free</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



import Link from 'next/link';
import { login } from './actions';

// 1. Make the component async
export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ message?: string; error?: string }>; // 2. Update type to Promise
}) {
    // 3. Await the searchParams at the top
    const { message, error } = await searchParams;

    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 pb-10">
        <span aria-hidden className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
          LOGIN.
        </span>
            <div className="glass p-6 pt-4 rounded-4xl w-full max-w-md space-y-8 border-white/5">
                <div className="text-center">
                    <div className="w-30 flex items-center justify-center font-bold text-black text-2xl mx-auto mb-2 transition-transform hover:scale-110">
                        <img src="/assets/logo.svg" alt="Codeiyo Logo" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="text-gray-400 mt-2">Continue your coding journey</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="name@school.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all font-mono text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all font-mono text-white"
                        />
                    </div>

                    {/* 4. Use the awaited variables here */}
                    {error && (
                        <p className="text-sm text-red-400 text-center bg-red-400/10 py-2 rounded-lg">
                            {decodeURIComponent(error)}
                        </p>
                    )}
                    {message && (
                        <p className="text-sm text-emerald-400 text-center bg-emerald-400/10 py-2 rounded-lg">
                            {message}
                        </p>
                    )}

                    <button 
                        formAction={login}
                        className="bg-brand-accent border-2 border-brand-accent hover:bg-transparent hover:text-white transition-all duration-300 text-black font-bold rounded-2xl w-full py-2 text-lg cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center text-sm text-gray-500">
                    Don&apos;t have an account?{' '}
                    <Link href="/auth/signup" className="text-brand-accent hover:underline">
                        Start for free
                    </Link>
                </div>
            </div>
        </div>
    );
}