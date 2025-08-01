import Link from "next/link"
import { ArrowLeft, Phone, Mail, Facebook } from "lucide-react"

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-stone-800">Ekostat - Krásný kámen</h1>
            </div>
            <nav>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 bg-stone-700 text-white rounded-md hover:bg-stone-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zpět na hlavní stránku
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-stone-800 text-center mb-8">Kontaktní informace</h2>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-stone-700 mb-4">Ing. Václav Vachuška Ph.D.</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg">
                  <Phone className="w-8 h-8 text-stone-600 mb-3" />
                  <h4 className="font-semibold text-stone-700 mb-2">Telefon</h4>
                  <a href="tel:+420602305209" className="text-stone-600 hover:text-stone-800 transition-colors">
                    +420 602 305 209
                  </a>
                </div>

                <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg">
                  <Mail className="w-8 h-8 text-stone-600 mb-3" />
                  <h4 className="font-semibold text-stone-700 mb-2">Email</h4>
                  <a
                    href="mailto:vachuska@ekostat.cz"
                    className="text-stone-600 hover:text-stone-800 transition-colors"
                  >
                    vachuska@ekostat.cz
                  </a>
                </div>

                <div className="flex flex-col items-center p-6 bg-stone-50 rounded-lg">
                  <Facebook className="w-8 h-8 text-stone-600 mb-3" />
                  <h4 className="font-semibold text-stone-700 mb-2">Facebook</h4>
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

              <div className="text-center mt-8">
                <p className="text-stone-600">
                  Kontaktujte nás pro nezávaznou cenovou nabídku nebo konzultaci vašeho projektu.
                </p>
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
