export default function Gallery() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">
        STEAM - STEAM 
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="border rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            ☀️ Summer Camp
          </h2>

          <p className="text-slate-600">
            Φωτογραφίες και στιγμές από τα καλοκαιρινά μας εργαστήρια.
          </p>

          <p className="mt-6 text-blue-600 font-medium">
            Αναμένεται σύντομα
          </p>
        </div>

        <div className="border rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            🚀 STEM - STEAM
          </h2>

          <p className="text-slate-600">
            Δραστηριότητες, κατασκευές και έργα των μαθητών μας.
          </p>

          <p className="mt-6 text-blue-600 font-medium">
            Αναμένεται σύντομα
          </p>
        </div>
      </div>
    </main>
  );
}