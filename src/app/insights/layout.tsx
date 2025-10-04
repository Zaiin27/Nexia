import type { Metadata } from "next";
import DynamicInsightsLayout from "@/shared/DynamicInsightsLayout";

export const metadata: Metadata = {
    title: "Insights",
    description: "Latest insights, case studies, and publications from Nexia",
};

export default function InsightsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DynamicInsightsLayout>
            {children}
        </DynamicInsightsLayout>
    );
}
