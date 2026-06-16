import Image from "next/image";

export default function Services() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <span className="text-blue-600 font-bold">
            CLOUD LAB
          </span>

          <h1 className="text-6xl font-bold mt-4">
            Web Development
            <br />
            & Cloud Solutions
          </h1>

          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Δημιουργούμε σύγχρονες ιστοσελίδες,
            web εφαρμογές και cloud λύσεις για
            επαγγελματίες, επιχειρήσεις και εκπαιδευτικούς οργανισμούς.
          </p>

        </div>

      </section>

      {/* ΥΠΗΡΕΣΙΕΣ */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Υπηρεσίες
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">🌐</div>

            <h3 className="text-2xl font-bold">
              Websites
            </h3>

            <p className="mt-4 text-slate-600">
              Σύγχρονες και γρήγορες ιστοσελίδες
              με Next.js και React.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">⚡</div>

            <h3 className="text-2xl font-bold">
              Web Applications
            </h3>

            <p className="mt-4 text-slate-600">
              Custom εφαρμογές για επιχειρήσεις
              και οργανισμούς.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">☁️</div>

            <h3 className="text-2xl font-bold">
              Cloud Solutions
            </h3>

            <p className="mt-4 text-slate-600">
              Hosting, αυτοματισμοί και cloud υποδομές.
            </p>
          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <div className="h-64 bg-slate-200 flex items-center justify-center text-7xl">
              💻
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Cloud Lab
              </h3>

              <p className="text-slate-600 mt-2">
                Εκπαιδευτική πλατφόρμα Ρομποτικής και STEAM.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <div className="h-64 bg-slate-200 flex items-center justify-center text-7xl">
              🚀
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Επόμενο Project
              </h3>

              <p className="text-slate-600 mt-2">
                Το επόμενο project σας μπορεί να είναι εδώ.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-blue-600 text-white rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold">
            Θέλετε τη δική σας ιστοσελίδα;
          </h2>

          <p className="mt-4 text-xl">
            Επικοινωνήστε μαζί μας για να συζητήσουμε το project σας.
          </p>

          <a
            href="mailto:liofisdimitris@gmail.com"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            📧 Επικοινωνία
          </a>

        </div>

      </section>

    </main>
  );
}