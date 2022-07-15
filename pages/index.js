import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";

// assets
import projectImage from "../public/images/project.png";

export default function Home() {
  const thumbnailSEO =
    "https://wahyudi.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyd.073bd1cf.jpg&w=256&q=75";
  return (
    <>
      <Head>
        <title>Wahyudi</title>
        <meta
          name="description"
          content="Wahyudi adalah seorang Web Developer yang tinggal di Makassar."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Wahyudi" />
        <meta itemProp="author" content="Wahyudi" />
        <meta
          itemProp="description"
          content="Wahyudi adalah seorang Web Developer yang tinggal di Makassar."
        />
        <meta itemProp="image" content={thumbnailSEO} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://wahyudi.id" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wahyudi" />
        <meta
          property="og:description"
          content="Wahyudi adalah seorang Web Developer yang tinggal di Makassar."
        />
        <meta property="og:image" content={thumbnailSEO} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wahyudi" />
        <meta
          name="twitter:description"
          content="Wahyudi adalah seorang Web Developer yang tinggal di Makassar."
        />
        <meta name="twitter:image" content={thumbnailSEO} />
      </Head>
      <Navbar />
      <div className="container lg:max-w-4xl md:max-w-3lg mx-auto px-10">
        <div className="py-20">
          <h1 className="font-extrabold text-lg lg:text-4xl md:text-4xl sm:text-3xl">
            Halo, nama saya Wahyudi. 😎
          </h1>
          <p className="text-md font-semibold py-3 text-slate-200">
            Saya adalah website developer yang tinggal di Indonesia, Sulawesi
            Selatan, Makassar. Jika tertarik bekerja sama silahkan hubungi saya.
            😉
          </p>

          <a href="mailto:business@wahyudi.id" className="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
            Hubungi Saya
          </a>
        </div>
        <div className="Project">
          <span className="lg:text-3xl md:text-3xl sm:text-2xl font-bold text-xl">
            Latest Project
          </span>

          <div className="py-2">
            <Image
              src={projectImage}
              alt="Latest Project"
              className="w-100 rounded-lg"
            />
            <p className="text-center py-3">
              Website mengirim anonymous message ke teman ataupun rekan kerja.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
