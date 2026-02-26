import AiCreativeProduction from "@/components/AiCreativeProduction";

export const metadata = {
    title: "AI Ad Generation Services | Adquora",
    description: "Scale your global creative without traditional agency overhead using AI.",
};

export default function AiAdGenerationPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-24 pt-16">
            <AiCreativeProduction />
        </main>
    );
}
