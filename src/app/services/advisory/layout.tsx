import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory Services",
  description: "Professional advisory services by Nexia",
};

export default function AdvisoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Advisory Services</h1>
          <p className="text-teal-100 mt-2">Strategic advisory solutions for business success</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
