export default function PythonPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-blue-600 font-bold">
              CLOUD LAB
            </span>

            <h1 className="text-6xl font-bold mt-4 leading-tight">
              Python
              <span className="text-blue-600"> • </span>
              Coding
              <br />
              <span className="text-yellow-500">• </span>
              Problem Solving
            </h1>

            <p className="text-xl text-slate-600 mt-6">
              Τα παιδιά μαθαίνουν προγραμματισμό μέσα από
              δημιουργικά έργα, παιχνίδια και πραγματικές εφαρμογές.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl"
              >
                Εγγραφή
              </a>

              <a
                href="/gallery"
                className="border border-slate-300 px-8 py-4 rounded-xl"
              >
                Gallery
              </a>
            </div>
          </div>

          <img
            src="/images/programming1.jpg"
            alt="Python Lessons"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">
          Τι μαθαίνουν οι μαθητές
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              🎮 Δημιουργία Παιχνιδιών
            </h3>

            <p className="text-slate-600">
              Κατασκευάζουμε μικρά παιχνίδια και διαδραστικές εφαρμογές.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              🧠 Λογική & Αλγόριθμοι
            </h3>

            <p className="text-slate-600">
              Μαθαίνουμε να λύνουμε προβλήματα βήμα-βήμα.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              🤖 Ρομποτική & Αυτοματισμοί
            </h3>

            <p className="text-slate-600">
              Συνδέουμε τον προγραμματισμό με πραγματικές κατασκευές.
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-6">
          Μαθήματα Προγραμματισμού
        </h2>

        <p className="text-center text-slate-600 text-xl mb-16">
          Οι μαθητές δημιουργούν δικά τους Scratch και Python projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/images/programming1.jpg"
            alt="Programming"
            className="rounded-3xl shadow-xl w-full h-96 object-cover"
          />

          <img
            src="/images/programming2.jpg"
            alt="Programming"
            className="rounded-3xl shadow-xl w-full h-96 object-cover"
          />

        </div>

      </section>

    </main>
  );
}