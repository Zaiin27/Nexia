import type { Metadata } from "next";
import DynamicAboutLayout from "@/shared/DynamicAboutLayout";

export const metadata: Metadata = {
  title: "About Nexia",
  description: "Learn about Nexia's history, mission, and values",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicAboutLayout>
      {children}
    </DynamicAboutLayout>
  );
}
