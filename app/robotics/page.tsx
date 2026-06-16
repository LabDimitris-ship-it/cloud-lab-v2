import Image from "next/image";

export default function Robotics() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold">
        Ρομποτική
      </h1>

      <p className="text-xl text-slate-600 mt-6">
        Οι μαθητές κατασκευάζουν και προγραμματίζουν πραγματικά ρομπότ με LEGO Education.
      </p>

      {/* Εικόνες */}
     <div className="grid md:grid-cols-2 gap-8 mt-12">

  <div>
    <Image
      src="/images/robotic-class1.png"
      alt="Κατασκευές LEGO"
      width={700}
      height={500}
      className="rounded-3xl shadow-lg w-full"
    />

    <h3 className="text-2xl font-bold mt-4">
      Κατασκευές με LEGO Education
    </h3>

    <p className="text-slate-600 mt-2">
      Οι μαθητές κατασκευάζουν και δοκιμάζουν τα δικά τους ρομποτικά έργα.
    </p>
  </div>

  <div>
    <Image
      src="/images/robotic-class2.png"
      alt="Ομαδικότητα"
      width={700}
      height={500}
      className="rounded-3xl shadow-lg w-full"
    />

    <h3 className="text-2xl font-bold mt-4">
      Συνεργασία & Ομαδικότητα
    </h3>

    <p className="text-slate-600 mt-2">
      Τα παιδιά συνεργάζονται, λύνουν προβλήματα και αναπτύσσουν δεξιότητες επικοινωνίας.
    </p>
  </div>

</div>
      {/* Τι Μαθαίνουν */}
      <section className="mt-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Τι Μαθαίνουν οι Μαθητές;
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold mb-3">
              🤖 Κατασκευές
            </h3>

            <p>
              Δημιουργία και σχεδίαση ρομπότ με LEGO.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold mb-3">
              ⚙️ Αυτοματισμοί
            </h3>

            <p>
              Χρήση αισθητήρων, κινητήρων και μηχανισμών.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-2xl font-bold mb-3">
              💻 Προγραμματισμός
            </h3>

            <p>
              Προγραμματισμός ρομπότ με Scratch και Python.
            </p>
          </div>

        </div>

      </section>

      {/* Γιατί Cloud Lab */}
      <section className="mt-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Γιατί ρομποτική στο Καλο Μελέτα ;
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">👨‍🏫</div>

            <h3 className="text-2xl font-bold mb-3">
              Σύγχρονη Εκπαίδευση
            </h3>

            <p className="text-slate-600">
              Μαθαίνουμε μέσα από παιχνίδι, πειραματισμό και δημιουργικά projects.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">🤖</div>

            <h3 className="text-2xl font-bold mb-3">
              Πραγματική Ρομποτική
            </h3>

            <p className="text-slate-600">
              LEGO Education, αισθητήρες, κινητήρες και αυτοματισμοί.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <div className="text-5xl mb-4">💡</div>

            <h3 className="text-2xl font-bold mb-3">
              Δημιουργική Σκέψη
            </h3>

            <p className="text-slate-600">
              Τα παιδιά αναπτύσσουν λογική σκέψη και δεξιότητες επίλυσης προβλημάτων.
            </p>
          </div>

        </div>

      </section>
<section className="mt-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    Προγράμματα Ρομποτικής
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white p-8 rounded-3xl shadow">
      <div className="text-5xl mb-4">🚀</div>

      <h3 className="text-2xl font-bold">
        LEGO WeDo
      </h3>

      <p className="text-blue-600 font-semibold mt-2">
        Ηλικίες 6-8
      </p>

      <p className="mt-4 text-slate-600">
        Πρώτη επαφή με τη ρομποτική και τον προγραμματισμό.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow">
      <div className="text-5xl mb-4">🤖</div>

      <h3 className="text-2xl font-bold">
        LEGO Spike
      </h3>

      <p className="text-blue-600 font-semibold mt-2">
        Ηλικίες 9-12
      </p>

      <p className="mt-4 text-slate-600">
        Αισθητήρες, κινητήρες και πραγματικοί αυτοματισμοί.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow">
      <div className="text-5xl mb-4">💻</div>

      <h3 className="text-2xl font-bold">
        Python Robotics
      </h3>

      <p className="text-blue-600 font-semibold mt-2">
        Ηλικίες 12+
      </p>

      <p className="mt-4 text-slate-600">
        Προγραμματισμός, αλγόριθμοι και έξυπνα συστήματα.
      </p>
    </div>

  </div>

</section>
{/* Φωτογραφία Μαθητών */}
<section className="mt-20">
  <div className="max-w-5xl mx-auto">
    <Image
      src="/images/student-project1.png"
      alt="Μαθητές παρουσιάζουν το έργο τους"
      width={1200}
      height={800}
      className="w-full rounded-3xl shadow-xl"
    />

    <div className="text-center mt-6">
      <h3 className="text-3xl font-bold">
        Παρουσίαση Μαθητικών Έργων
      </h3>

      <p className="text-slate-600 mt-3 text-lg">
        Οι μαθητές παρουσιάζουν τις κατασκευές τους, εξηγούν
        τον τρόπο λειτουργίας τους και αναπτύσσουν δεξιότητες
        επικοινωνίας και συνεργασίας.
      </p>
    </div>
  </div>
</section>
<section className="mt-24 text-center">
  <h2 className="text-4xl font-bold mb-6">
    Δείτε το Ρομπότ σε Δράση
  </h2>

  <p className="text-slate-600 text-lg mb-8">
    Ένα πραγματικό έργο που δημιούργησαν οι μαθητές μας.
  </p>

  <video
    controls
    className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl"
  >
    <source src="/videos/robot-demo.mp4" type="video/mp4" />
  </video>
</section>
{/* Έργα Μαθητών */}
<section className="mt-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    Έργα Μαθητών
  </h2>

  <p className="text-center text-slate-600 text-xl max-w-3xl mx-auto mb-16">
    Οι μαθητές μας σχεδιάζουν, κατασκευάζουν και προγραμματίζουν
    τα δικά τους έργα μέσα από δημιουργικές προκλήσεις.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <Image
        src="/images/lego-wedo3.jpg"
        alt="Πρώτα βήματα στη ρομποτική"
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          Πρώτα βήματα στη ρομποτική
        </h3>

        <p className="text-slate-600">
          Κατασκευή και προγραμματισμός ενός διαδραστικού
          ρομπότ με LEGO Education.
        </p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <Image
        src="/images/robotics2.jpeg"
        alt="Έξυπνο Όχημα"
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          🚗 Έξυπνο Όχημα
        </h3>

        <p className="text-slate-600">
          Ρομποτικό όχημα με αισθητήρες,
          αποφυγή εμποδίων και αυτόνομη κίνηση.
        </p>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <Image
        src="/images/robotics3.png"
        alt="Προγραμματισμός"
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          💻 Προγραμματισμός
        </h3>

        <p className="text-slate-600">
          Οι μαθητές μαθαίνουν Scratch και Python
          προγραμματίζοντας πραγματικά ρομποτικά έργα.
        </p>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}