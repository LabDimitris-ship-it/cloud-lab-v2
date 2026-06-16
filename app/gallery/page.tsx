export default function Gallery() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">
        Gallery
      </h1>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          ☀️ Summer Camp
        </h2>

        <p className="text-slate-600">
          Φωτογραφίες από τα καλοκαιρινά μας εργαστήρια.
        </p>

        <p className="mt-4 text-slate-400">
          Περιεχόμενο σύντομα...
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">
          🤖 Μαθήματα
        </h2>

        <p className="text-slate-600">
          Δραστηριότητες και κατασκευές των μαθητών μας.
        </p>

        <p className="mt-4 text-slate-400">
          Περιεχόμενο σύντομα...
        </p>
      </div>
    </main>
  );
}