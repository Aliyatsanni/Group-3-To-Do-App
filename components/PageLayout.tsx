import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Header />
      <main className="flex-1 p-4 md:p-8">{children}</main>
      <Footer />
    </div>
  );
}
