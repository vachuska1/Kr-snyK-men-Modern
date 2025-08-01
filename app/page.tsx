import Link from "next/link"
import { PhotoGallery } from "@/components/photo-gallery"
import { Phone, Mail, Facebook } from "lucide-react"
import Head from "next/head"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* SEO Head */}
      <Head>
        <title>Ekostat - Krásný kámen</title>
        <meta
          name="description"
          content="Z kamene dodáváme: dlažby, obklady, obrubníky, kostky, stoly, parapety, haklíky, schody, kašny a další atypické kamenické výrobky a prvky ruční kamenické výroby."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-stone-800">Ekostat - Krásný kámen</h1>
            </div>
            <nav>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-4 py-2 bg-stone-700 text-white rounded-md hover:bg-stone-800 transition-colors"
              >
                Ceny a kontakt ▶
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-stone-100 to-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Vybírejte</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Z kamene dodáváme: dlažby, obklady, obrubníky, kostky, stoly, parapety, haklíky, schody, kašny a další
            atypické kamenické výrobky a prvky ruční kamenické výroby.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-12">Naše práce</h3>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-12">Kontakt</h3>

          <div className="bg-stone-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-stone-700">Ing. Václav Vachuška Ph.D.</h4>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Phone className="w-8 h-8 text-stone-600 mb-3" />
                <h5 className="font-semibold text-stone-700 mb-2">Telefon</h5>
                <a href="tel:+420602305209" className="text-stone-600 hover:text-stone-800 transition-colors">
                  +420 602 305 209
                </a>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Mail className="w-8 h-8 text-stone-600 mb-3" />
                <h5 className="font-semibold text-stone-700 mb-2">Email</h5>
                <a href="mailto:vachuska@ekostat.cz" className="text-stone-600 hover:text-stone-800 transition-colors">
                  vachuska@ekostat.cz
                </a>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Facebook className="w-8 h-8 text-stone-600 mb-3" />
                <h5 className="font-semibold text-stone-700 mb-2">Facebook</h5>
                <a
                  href="https://www.facebook.com/profile.php?id=61553671262213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-800 transition-colors text-center"
                >
                  Ekostat - krásný kámen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-300">© 2025 Ekostat - Krásný kámen. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  )
}
