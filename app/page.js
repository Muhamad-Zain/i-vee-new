import App from "@/components/app/page";
import Head from "next/head";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Undangan Pernikahan [Nama]</title>
        <meta name="description" content="Selamat datang di undangan pernikahan kami! Silakan RSVP dan tinggalkan ucapan untuk kami." />
        <meta property="og:title" content="Undangan Pernikahan [Nama]" />
        <meta property="og:description" content="Selamat datang di undangan pernikahan kami! Silakan RSVP dan tinggalkan ucapan untuk kami." />
        <meta property="og:image" content="https://localhost:3000/icons.ico" />
        <meta property="og:url" content="https://your-vercel-project.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <App />
    </section>
  );
}
