import { requireAdmin } from "@/lib/supabase/admin";
import { Sidebar } from "@/components/admin/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await requireAdmin();

  return (
    <div className="min-h-screen bg-admin-bg font-[family-name:var(--font-body)] text-admin-ink antialiased">
      <Sidebar email={user.email ?? ""} />
      <main className="px-4 py-8 sm:px-6 lg:pl-64 lg:pr-10 lg:py-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
