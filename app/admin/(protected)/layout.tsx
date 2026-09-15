import type { ReactNode } from "react";

import { requireAdmin } from "@/lib/admin/require-admin";

import { AdminShell } from "@/components/admin/admin-shell";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({
  children,
}: AdminLayoutProps) {
  await requireAdmin();

  return <AdminShell>{children}</AdminShell>;
}