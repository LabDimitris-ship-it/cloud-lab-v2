import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <span className="text-blue-600 font-bold">
                CLOUD LAB
              </span>

              <h1 className="text-6xl font-bold mt-4 leading-tight">
                Ρομποτική
                <span className="text-blue-600"> • </span>
                STEAM
                <br />
                <span className="text-yellow-500">• </span>
                Προγραμματισμός
              </h1>

              <p className="text-xl text-slate-600 mt-6">
                Μαθαίνουμε δημιουργώντας. Κατασκευάζουμε,
                προγραμματίζουμε και λύνουμε προβλήματα σαν
                πραγματικοί μηχανικοί.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
                  Μαθήματα
                </button>

                <button className="border border-slate-300 px-8 py-4 rounded-xl">
                  Δραστηριότητες
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <Image
                src="/images/lego-hello.jpeg"
                alt="LEGO Robot"
                width={500}
                height={350}
                className="rounded-2xl w-full h-auto object-cover"
              />

              <h3 className="text-2xl font-bold mt-6 text-center">
                LEGO Robotics
              </h3>

              <p className="text-slate-600 mt-2 text-center">
                Κατασκευάζουμε και προγραμματίζουμε πραγματικά
                ρομπότ.
              </p>
            </div>

          </div>
        </section>

        {/* ΤΙ ΜΑΘΑΙΝΟΥΝ */}
        <section className="max-w-7xl mx-auto px-6 pb-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Τι Μαθαίνουν τα Παιδιά;
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow p-8">
              <div className="text-4xl">🤖</div>
              <h3 className="text-2xl font-bold mt-4">
                Κατασκευές
              </h3>
              <p className="text-slate-600 mt-3">
                Δημιουργούμε με LEGO και φαντασία.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <div className="text-4xl">🧠</div>
              <h3 className="text-2xl font-bold mt-4">
                Λογική Σκέψη
              </h3>
              <p className="text-slate-600 mt-3">
                Μαθαίνουμε να λύνουμε προβλήματα.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <div className="text-4xl">💻</div>
              <h3 className="text-2xl font-bold mt-4">
                Προγραμματισμός
              </h3>
              <p className="text-slate-600 mt-3">
                Οι πρώτες αρχές κώδικα και αυτοματισμών.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <div className="text-4xl">🤝</div>
              <h3 className="text-2xl font-bold mt-4">
                Ομαδικότητα
              </h3>
              <p className="text-slate-600 mt-3">
                Συνεργασία και δημιουργία.
              </p>
            </div>

          </div>

        </section>
{/* ΜΑΘΗΜΑΤΑ */}
<section className="max-w-7xl mx-auto px-6 pb-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    Τα Μαθήματά μας
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition">
      <div className="text-5xl">🤖</div>

      <h3 className="text-xl font-bold mt-4">
        LEGO Robotics 6-8
      </h3>

      <p className="text-slate-600 mt-3">
        Πρώτη επαφή με τις κατασκευές και τον προγραμματισμό.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition">
      <div className="text-5xl">⚙️</div>

      <h3 className="text-xl font-bold mt-4">
        LEGO Robotics 9-12
      </h3>

      <p className="text-slate-600 mt-3">
        Σύνθετες κατασκευές, αισθητήρες και αυτοματισμοί.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition">
      <div className="text-5xl">💻</div>

      <h3 className="text-xl font-bold mt-4">
        Scratch Programming
      </h3>

      <p className="text-slate-600 mt-3">
        Δημιουργία παιχνιδιών και διαδραστικών ιστοριών.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition">
      <div className="text-5xl">🐍</div>

      <h3 className="text-xl font-bold mt-4">
        Python για Παιδιά
      </h3>

      <p className="text-slate-600 mt-3">
        Βασικές αρχές προγραμματισμού με Python.
      </p>
    </div>

  </div>

</section>

{/* ΓΙΑΤΙ CLOUD LAB */}
<section className="max-w-7xl mx-auto px-6 pb-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    Γιατί να επιλέξετε την ρομποτική στο Καλο μελέτα ;
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-white rounded-3xl shadow p-8 text-center">
      <div className="text-5xl mb-4">⭐</div>

      <h3 className="text-xl font-bold">
        Μικρά Τμήματα
      </h3>

      <p className="text-slate-600 mt-3">
        Προσωπική καθοδήγηση και ουσιαστική συμμετοχή κάθε παιδιού.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow p-8 text-center">
      <div className="text-5xl mb-4">🤖</div>

      <h3 className="text-xl font-bold">
        Σύγχρονος Εξοπλισμός
      </h3>

      <p className="text-slate-600 mt-3">
        LEGO Education, αισθητήρες και σύγχρονα εργαλεία μάθησης.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow p-8 text-center">
      <div className="text-5xl mb-4">🎯</div>

      <h3 className="text-xl font-bold">
        Πρακτική Μάθηση
      </h3>

      <p className="text-slate-600 mt-3">
        Μαθαίνουμε μέσα από κατασκευές, πειράματα και έργα.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow p-8 text-center">
      <div className="text-5xl mb-4">🏆</div>

      <h3 className="text-xl font-bold">
        Δημιουργικότητα
      </h3>

      <p className="text-slate-600 mt-3">
        Ενισχύουμε τη φαντασία, τη συνεργασία και την επίλυση προβλημάτων.
      </p>
    </div>

  </div>

</section>

{/* GALLERY ΡΟΜΠΟΤΙΚΗΣ */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold text-center mb-6">
    Στιγμές από το Εργαστήριο Ρομποτικής
  </h2>

  <p className="text-center text-slate-600 text-xl mb-16">
    Οι μαθητές κατασκευάζουν, προγραμματίζουν και συνεργάζονται
    δημιουργώντας πραγματικά έργα με LEGO Education.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    <img
      src="/images/robotic-class1.png"
      alt="Robotics"
      className="rounded-3xl shadow-xl w-full h-80 object-cover"
    />

    <img
      src="/images/student-project2.png"
      alt="Robotics"
      className="rounded-3xl shadow-xl w-full h-80 object-cover"
    />

    <img
     src="/images/robotics3.jpg"
      alt="Robotics"
      className="rounded-3xl shadow-xl w-full h-80 object-cover"
    />

  </div>

</section> 
       {/* ΕΠΙΚΟΙΝΩΝΙΑ */}
<section className="max-w-5xl mx-auto px-6 pb-24">

  <div className="bg-blue-600 text-white rounded-3xl p-12 text-center shadow-xl">

    <h2 className="text-4xl font-bold">
      Κλείστε ένα Δωρεάν Δοκιμαστικό Μάθημα
    </h2>

    <p className="mt-4 text-xl text-blue-100">
      Επικοινωνήστε μαζί μας για να γνωρίσετε τον κόσμο της
      Ρομποτικής, του STEAM και του Προγραμματισμού.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

      <a
        href="mailto:liofisdimitris@gmail.com"
        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
      >
        📧 Στείλτε Email
      </a>

    </div>

  </div>
</section>
{/* FOOTER */}

          {/* FOOTER */}
        <footer className="bg-slate-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">

            <div className="grid md:grid-cols-3 gap-10">

              {/* Cloud Lab */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  CLOUD LAB
                </h3>

                <p className="mt-4 text-slate-300">
                  Ρομποτική • STEAM • Προγραμματισμός
                </p>

                <p className="mt-2 text-slate-400">
                  Μαθαίνουμε δημιουργώντας.
                </p>
              </div>

              {/* Μαθήματα */}
              <div>
                <h4 className="font-bold text-lg mb-4">
                  Μαθήματα
                </h4>

                <ul className="space-y-2 text-slate-300">
                  <li>LEGO Robotics</li>
                  <li>STEAM Education</li>
                  <li>Scratch Programming</li>
                  <li>Python για Παιδιά</li>
                </ul>
              </div>

              {/* Επικοινωνία */}
              <div>
                <h4 className="font-bold text-lg mb-4">
                  Επικοινωνία
                </h4>

                <ul className="space-y-2 text-slate-300">
                  <li>📍 Λουτράκι, Ελλάδα</li>
                  <li>📧 liofisdimitris@gmail.com</li>
                </ul>
              </div>

            </div>

            <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
              © 2026 Cloud Lab. All rights reserved.
            </div>

          </div>
        </footer>
</main>
</>
);
}  
