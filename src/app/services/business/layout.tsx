import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Services",
  description: "Comprehensive business services by Nexia",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Business Services</h1>
          <p className="text-teal-100 mt-2">Complete business solutions for your organization</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
