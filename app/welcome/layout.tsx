import WelcomePageNavbar from "@/app/components/WelcomePageNavbar";

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WelcomePageNavbar />
      {children}
    </>
  );
}
