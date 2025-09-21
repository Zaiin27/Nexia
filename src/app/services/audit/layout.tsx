import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Services",
  description: "Professional audit services by Nexia",
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
