import type { Metadata } from "next";
import DynamicServicesLayout from "@/shared/DynamicServicesLayout";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional services offered by Nexia",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicServicesLayout>
      {children}
    </DynamicServicesLayout>
  );
}
