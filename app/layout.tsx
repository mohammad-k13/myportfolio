import './globals.css';

export const metadata = {
  title: 'Mohammad Keshavarz — Portfolio',
  description: 'Software developer — TypeScript, Next.js, MCP & AI agents',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
