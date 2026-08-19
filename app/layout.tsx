import './globals.css';

export const metadata = {
  title: 'Shitanshu Kumar — Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
