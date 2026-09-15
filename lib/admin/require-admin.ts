import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import type { User } from "@supabase/supabase-js";

import { supabaseAdmin } from "@/lib/supabase/admin";

export async function requireAdmin(): Promise<User> {
  const cookieStore = await cookies();

  /**
   * This client uses the user's Supabase Auth session.
   * It is responsible only for determining who is currently logged in.
   */
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Cookie updates can fail in Server Components.
            // Middleware should refresh the session when necessary.
          }
        },
      },
    },
  );

  /**
   * Verify the current user's Supabase Auth session.
   */
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/admin/login");
  }

  /**
   * Check the admin allowlist using the server-only
   * service-role client.
   *
   * This is intentional because admin_users has RLS enabled
   * and should not be readable through the normal browser/session
   * Supabase client.
   */
  const { data: admin, error: adminError } = await supabaseAdmin
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError) {
    console.error("Failed to verify admin access:", adminError);
    redirect("/unauthorized");
  }

  /**
   * The user is authenticated, but isn't in the
   * CareRify admin allowlist.
   */
  if (!admin) {
    redirect("/unauthorized");
  }

  return user;
}

