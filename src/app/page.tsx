// import Hero from '../components/Hero'
// import Features from '../components/Features'
// import Pricing from '../components/Pricing'
// import TrustSection from '../components/Trust'
// import FAQs  from '../components/Faqs'
// import RoadmapWrapper from "@/components/RoadmapWrapper";
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/next"



// const Home = () => {
//     return (
//         <>
//             <Hero />
//             <TrustSection />
//             <Features />
//             <RoadmapWrapper />
//             <FAQs />
//             <Pricing />

//         </>
//     )
// }

// export default Home



import { createClient } from '@/utils/supabase/server'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import TrustSection from '../components/Trust'
import FAQs from '../components/Faqs'
import RoadmapWrapper from "@/components/RoadmapWrapper"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { SessionContextProvider } from '@supabase/auth-helpers-react';
// import { useState } from 'react';


export default async function Home() {
  const supabase = await createClient()

  // This fetches your data from Supabase
  const { data: todos } = await supabase.from('todos').select()

  return (
    <>
      <Hero />
      <TrustSection />
      
      {/* Example: Displaying Supabase data between sections */}
      {todos && todos.length > 0 && (
        <section className="py-10 bg-brand-navy/50 text-center">
          <h2 className="text-emerald-400 font-bold mb-4">Database Connection Live:</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="text-white">{todo.name}</li>
            ))}
          </ul>
        </section>
      )}

      <Features />
      <RoadmapWrapper />
      <FAQs />
      <Pricing />
      
      <SpeedInsights />
      <Analytics />
    </>
  )
}