// proxy.ts or middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// ❌ CHANGE THIS: export async function proxy(request: NextRequest)
// ✅ TO THIS:
export async function proxy(request: NextRequest) {
  // Try three different ways to grab the keys
  const supabaseUrl = 
    process.env.NEXT_PUBLIC_SUPABASE_URL || 
    process.env.SUPABASE_URL || 
    "";
    
  const supabaseKey = 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
    process.env.SUPABASE_ANON_KEY || 
    "";

  // LOG THIS: It will tell us exactly what's failing


  if (!supabaseUrl || !supabaseKey) {
    // If it STILL says NO, we will try Step 2 below
    return NextResponse.next();
  }

  let response = NextResponse.next({ request })

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() { return request.cookies.getAll() },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        )
      },
    },
  })

 const { data: { user } } = await supabase.auth.getUser()

  // 1. Define the SPECIFIC paths to lock down
  const protectedRoutes = [
    '/code/sandbox/codex', // 🔒 Proteced: The Editor/Codex
    '/code/sandbox/codex-v2', // 🔒 Proteced: The Editor/Codex
    '/dashboard',
    '/learn/paths',    // 🔒 Protected: Student Hub
    
  ]

  // 2. Check if the current URL starts with these specific strings
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // 3. Logic: If trying to access /code/sandbox without a user, REDIRECT
  if (!user && isProtectedRoute) {
    // console.log(`🔒 Restricted: ${request.nextUrl.pathname} -> Redirecting`);
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // 4. If it's just /code (not in the list), this returns the normal page
  return response
}

export const config = {
  matcher: [
    '/dashboard',          // Match the base /dashboard
    '/dashboard/:path*',
    '/learn/paths/:path*',    // Match sub-pages
    '/code/sandbox/codex',       // ✅ Add this to match the exact URL
    '/code/sandbox/codex-v2',       // ✅ Add this to match the exact URL
    // '/code/sandbox/:path*', 
  ],
}