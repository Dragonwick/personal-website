import '../styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aaron Solis | Cybersecurity Engineer</title>
        <meta name="description" content="Cybersecurity researcher specializing in binary exploitation, network security, and systems engineering. UTSA Computer Science (May 2026)." />
        <meta name="keywords" content="cybersecurity, penetration testing, binary exploitation, UTSA, C, Python, security research" />
        <meta property="og:title" content="Aaron Solis - Cybersecurity Engineer" />
        <meta property="og:description" content="Computer Science student at UTSA specializing in cybersecurity and systems exploitation" />
        <meta property="og:image" content="/preview.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp