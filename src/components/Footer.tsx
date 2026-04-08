import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaTiktok,FaInstagram,FaLinkedinIn,FaDiscord } from 'react-icons/fa';


const Footer = () => {
    return (
        // <footer className="py-10 px-6 md:px-10 border-t border-white/5">
        //     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        //         <div className="space-y-6">
        //             <Link href="/" className="flex items-center gap-2">
        //                 <div className="w-8 h-8 flex items-center justify-center font-bold text-black text-xl">
        //                     <img src="/assets/logo.svg" alt="Codeiyo-logo" />
        //                 </div>
        //                 <span className="text-xl font-bold tracking-tight text-white">Codeiyo</span>
        //             </Link>
        //             <p className="text-gray-500 text-sm leading-relaxed">
        //                 Making coding education accessible, structured, and scalable for school students worldwide.
        //             </p>
        //             <div className="flex gap-4">
        //             {[
        //             { name: 'Facebook', url: 'https://www.facebook.com/yourpage' },
        //             { name: 'WhatsApp', url: 'https://wa.me/1234567890' },
        //             { name: 'TikTok', url: 'https://www.tiktok.com/@yourhandle' }
        //             ].map(social => (
        //             <a
        //                 key={social.name}
        //                 href={social.url}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="w-8 h-8 rounded-full bg-white/5 flex items-center border-2 border-white/5 hover:border-brand-accent-hover justify-center text-gray-400 hover:text-brand-accent hover:bg-white/10 transition-all text-xs"
        //             >
        //                 {social.name[0]}
        //             </a>
        //             ))}
        //             </div>
        //         </div>

        //         <div>
        //             <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Platform</h5>
        //             <ul className="space-y-4 text-sm text-gray-500">
        //                 <li><Link href="/editor" className="hover:text-brand-accent-hover transition-colors">Codeiyo Lab</Link></li>
        //                 <li><Link href="/roadmap" className="hover:text-brand-accent-hover  transition-colors">Roadmap</Link></li>
        //                 <li><Link href="/features" className="hover:text-brand-accent-hover transition-colors">Challenges</Link></li>
        //                 <li><Link href="/features" className="hover:text-brand-accent-hover  transition-colors">Certifications</Link></li>
        //             </ul>
        //         </div>

        //         <div>
        //             <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Solutions</h5>
        //             <ul className="space-y-4 text-sm text-gray-500">
        //                 <li><Link href="/signup" className="hover:text-brand-accent-hover transition-colors">For Students</Link></li>
        //                 <li><Link href="/schools" className="hover:text-brand-accent-hover  transition-colors">For Teachers</Link></li>
        //                 <li><Link href="/schools" className="hover:text-brand-accent-hover transition-colors">Partner Program</Link></li>
        //             </ul>
        //         </div>

        //         <div>
        //             <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Support</h5>
        //             <ul className="space-y-4 text-sm text-gray-500">
        //                 <li><Link href="/home" className="hover:text-brand-accent-hover  transition-colors">About Us</Link></li>
        //                 <li><Link href="/home" className="hover:text-brand-accent-hover transition-colors">Contact</Link></li>
        //                 <li><Link href="/home" className="hover:text-brand-accent-hover transition-colors">Privacy Policy</Link></li>
        //                 <li><Link href="/home" className="hover:text-brand-accent-hover  transition-colors">Terms of Service</Link></li>

        //             </ul>
        //         </div>
        //     </div>
        //     <div className="max-w-7xl mx-auto mt-10 pt-5 border-t border-white/5 text-center text-gray-600 text-xs">
        //             &copy; 2026 <span className="font-bold text-[#34D399]">Codeiyo</span>. Born in emerging markets, built for the world.

        //     </div>
        // </footer>


        <footer className="py-10 px-6  border-t border-white/5 bg-[#020617]">
            <div className="max-w-7xl mx-auto justify-items-center items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
                

                <div className="space-y-8">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-accent/50 transition-all">
                            <img src="/assets/logo.svg" alt="Codeiyo" className="w-8 h-8" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-white">Codeiyo</span>
                    </Link>
                    
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">
                        The pro-grade coding environment for the next generation of Pakistani developers.
                    </p>
                    <div className="flex gap-3">
                    {[
                        { 
                        name: 'LinkedIn', 
                        url: 'http://linkedin.com/company/codeiyo', 
                        icon: <FaLinkedinIn size={16} strokeWidth={2.25} /> 
                        },
                        { 
                        name: 'Facebook', 
                        url: 'https://www.facebook.com/people/Codeiyo/61576794842418/', 
                        icon: <FaFacebook size={16} strokeWidth={2.25} /> 
                        },
                        { 
                        name: 'Instagram', 
                        url: 'https://www.instagram.com/codeiyo/', 
                        icon: <FaInstagram size={16} strokeWidth={2.25} /> 
                        },
                        { 
                        name: 'Discord', 
                        url: 'https://www.instagram.com/codeiyo/', 
                        icon: <FaDiscord size={16} strokeWidth={2.25} /> 
                        },

                        { 
                        name: 'TikTok', 
                        url: 'https://www.tiktok.com/@codeiyo', 
                        icon: <FaTiktok size={16} strokeWidth={2.25} /> 
                        },
                        { 
                        name: 'WhatsApp', 
                        url: 'https://chat.whatsapp.com/HHytpSmQWJJCrELWj3PwIn', 
                        icon: <FaWhatsapp size={16} strokeWidth={2.25} /> 
                        },

                    ].map((social) => (
                        <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="w-10 h-10 rounded-xl bg-white/03 flex items-center justify-center border border-white/5 text-slate-500 hover:text-brand-accent hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all duration-300 group"
                        >
                        <div className="group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                        </div>
                        </a>
                    ))}
                    </div>
                </div>


                <div>
                    <h5 className="font-bold mb-8 text-[11px] uppercase tracking-[0.2em] text-brand-accent font-mono">Platform</h5>
                    <ul className="space-y-4 text-[13px] text-gray-500">
                        <li><Link href="/code/sandbox" className="hover:text-brand-accent transition-colors">Codeiyo Sandbox</Link></li>
                        <li><Link href="/code/tracker" className="hover:text-brand-accent transition-colors">Skill Tracker</Link></li>
                        <li><Link href="#" className="hover:text-brand-accent transition-colors">Live Challenges</Link></li>
                        <li><Link href="/learn/paths" className="hover:text-brand-accent transition-colors">Learning Paths</Link></li>
                    </ul>
                </div>


                <div>
                    <h5 className="font-bold mb-8 text-[11px] uppercase tracking-[0.2em] text-brand-accent font-mono">Ecosystem</h5>
                    <ul className="space-y-4 text-[13px] text-gray-500">
                        <li><Link href="#" className="hover:text-brand-accent transition-colors">For Students</Link></li>
                        <li><Link href="#" className="hover:text-brand-accent transition-colors">School Partnerships</Link></li>
                        <li><Link href="#" className="hover:text-brand-accent transition-colors">Partner Program</Link></li>
                        <li><Link href="#" className="hover:hover:text-brand-accent transition-colors">Join the Team</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold mb-8 text-[11px] uppercase tracking-[0.2em] text-brand-accent font-mono">Resources</h5>
                    <ul className="space-y-4 text-[13px] text-gray-500">
                        <li><Link href="/more/about" className="hover:text-brand-accent transition-colors">Our Vision</Link></li>
                        <li><Link href="/more/contact" className="hover:text-brand-accent transition-colors">Get in Touch</Link></li>
                        <li><Link href="/more/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/more/user-agreement" className="hover:text-brand-accent transition-colors">User Agreement</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 mt-10 justify-center  border-t border-white/5 flex flex-col md:flex-row  items-center gap-4">
                <p className="text-slate-600 text-[11px] font-mono tracking-wide uppercase">
                    &copy; 2026 <span className="text-brand-accent font-medium">Codeiyo</span>. All rights reserved.
                </p>
            </div>
        </footer>
        
    );
};

export default Footer;
