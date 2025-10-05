import type { Metadata } from "next";
import DynamicIndustriesLayout from "@/shared/DynamicIndustriesLayout";

export const metadata: Metadata = {
    title: "Industries",
    description: "Industry expertise and services from Nexia International",
};

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DynamicIndustriesLayout>
            {children}
        </DynamicIndustriesLayout>
    );
}
