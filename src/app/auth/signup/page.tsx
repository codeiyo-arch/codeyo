// import Link from 'next/link';

// const SignupPage = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-10">
//             <div className="glass p-6 pt-4 rounded-4xl w-full max-w-md space-y-8 border-white/5">
//                 <div className="text-center">
//                     <div className="w-30 flex items-center justify-center font-bold text-black text-2xl mx-auto mb-2 transition-transform hover:scale-110">
//                         <img src="/assets/logo.svg" alt="" />
//                     </div>
//                     <h1 className="text-3xl font-bold">Create Account</h1>
//                     <p className="text-gray-500 mt-2">Join 500+ students learning today</p>
//                 </div>

//                 <form className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                             <label className="text-xs font-medium text-gray-400">First Name</label>
//                             <input type="text" placeholder="first name" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-primary/50 transition-all" />
//                         </div>
//                         <div className="space-y-2">
//                             <label className="text-xs font-medium text-gray-400">Last Name</label>
//                             <input type="text" placeholder="last name" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-primary/50 transition-all" />
//                         </div>
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">School Name</label>
//                         <input type="text" placeholder="school name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all" />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">Class</label>
//                         <input type="text" placeholder="10" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all" />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">Email Address</label>
//                         <input type="email" placeholder="student@school.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-mono" />
//                     </div>

//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">Password</label>
//                         <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all font-mono" />
//                     </div>
//                     <Link href="/">
//                     <button className="bg-brand-accent  border-2 border-brand-accent hover:bg-transparent  hover:text-white   transition-all duration-300   text-black font-bold rounded-2xl w-full py-2 text-lg">Start Coding</button></Link>
//                 </form>

//                 <div className="text-center text-sm text-gray-500">
//                     Already have an account? <Link href="/login" className="text-brand-accent hover:underline">Log in</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignupPage;




// import Link from 'next/link';
// import { signup } from '../login/actions'; 



// 1. Make the function async
// export default async function SignupPage({
//     searchParams,
// }: {
//     // 2. Update type to Promise
//     searchParams: Promise<{ message?: string; error?: string }>;
// }) {
//     // 3. Await the params at the top
//     const { message, error } = await searchParams;

//     return (
//         <div className="min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-10">
//         <span aria-hidden className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
//           SIGNUP.
//         </span>
//             <div className="glass p-6 pt-4 rounded-4xl w-full max-w-md space-y-8 border-white/5">
//                 <div className="text-center">
//                     <div className="w-30 flex items-center justify-center font-bold text-black text-2xl mx-auto mb-2 transition-transform hover:scale-110">
//                         <img src="/assets/logo.svg" alt="Codeiyo Logo" />
//                     </div>
//                     <h1 className="text-3xl font-bold text-white">Create Account</h1>
//                     <p className="text-gray-400 mt-2">Join 500+ students learning today</p>
//                 </div>

//                 <form className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                             <label className="text-xs font-medium text-gray-400">First Name</label>
//                             <input name="firstName" type="text" placeholder="First name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-brand-accent/50 transition-all text-white" />
//                         </div>
//                         <div className="space-y-2">
//                             <label className="text-xs font-medium text-gray-400">Last Name</label>
//                             <input name="lastName" type="text" placeholder="Last name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-brand-accent/50 transition-all text-white" />
//                         </div>
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">School Name</label>
//                         <input name="school" type="text" placeholder="School name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all text-white" />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">Class</label>
//                         <input name="class" type="text" placeholder="10" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all text-white" />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">Email Address</label>
//                         <input name="email" type="email" placeholder="student@school.com" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all font-mono text-white" />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-medium text-gray-400">Password</label>
//                         <input name="password" type="password" placeholder="••••••••" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-accent/50 transition-all font-mono text-white" />
//                     </div>

//                     {/* 4. Use the unwrapped variables */}
//                     {error && (
//                         <p className="text-xs text-red-400 text-center bg-red-400/10 py-2 rounded-lg">
//                             {decodeURIComponent(error)}
//                         </p>
//                     )}
                    
//                     {message && (
//                         <p className="text-xs text-emerald-400 text-center bg-emerald-400/10 py-2 rounded-lg">
//                             {message}
//                         </p>
//                     )}

//                     <button 
//                         formAction={signup}
//                         className="bg-brand-accent border-2 border-brand-accent hover:bg-transparent hover:text-white transition-all duration-300 text-black font-bold rounded-2xl w-full py-2 text-lg cursor-pointer"
//                     >
//                         Start Coding
//                     </button>
//                 </form>

//                 <div className="text-center text-sm text-gray-500">
//                     Already have an account? <Link href="/login" className="text-brand-accent hover:underline">Log in</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }


import Link from 'next/link';
import SignupForm from '../../../components/SignupForm'; // Import the client component

export default async function SignupPage({
    searchParams,
}: {
    searchParams: Promise<{ message?: string; error?: string }>;
}) {
    const { message, error } = await searchParams;

    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-10">
            <span aria-hidden className="pointer-events-none select-none absolute top-15 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-black tracking-tighter text-white/2 leading-none whitespace-nowrap">
                SIGNUP.
            </span>
            <div className="glass p-6 pt-4 rounded-4xl w-full max-w-md space-y-8 border-white/5 relative z-10">
                <div className="text-center">
                    <div className="w-30 flex items-center justify-center mx-auto mb-2 transition-transform hover:scale-110">
                        <img src="/assets/logo.svg" alt="Codeiyo Logo" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Create Account</h1>
                    <p className="text-gray-400 mt-2 text-sm font-light">Join 500+ students learning today</p>
                </div>

                {/* Render the Client Form */}
                <SignupForm error={error} message={message} />

                <div className="text-center text-sm text-gray-500">
                    Already have an account? <Link href="/auth/login" className="text-brand-accent hover:underline">Log in</Link>
                </div>
            </div>
        </div>
    );
}