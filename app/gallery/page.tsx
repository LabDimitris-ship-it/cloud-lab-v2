import Image from "next/image";

export default function Gallery() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center">
        Gallery
      </h1>

      {/* Summer Camp */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-3">
          ☀️ Summer Camp
        </h2>

        <p className="text-slate-600 mb-8">
          Creative STEM activities, robotics challenges and teamwork during our summer workshops.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/robotic-class1.png"
              alt="Summer Camp Activity"
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/robotic-class2.png"
              alt="Students Learning"
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/robotics3.jpg"
              alt="Summer Robotics"
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programming */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-3">
          💻 Programming Projects
        </h2>

        <p className="text-slate-600 mb-8">
          Scratch projects created by our students while learning coding fundamentals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/programming1.jpg"
              alt="Scratch Story Project"
              width={800}
              height={1000}
              className="w-full h-[500px] object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-2xl">
                Interactive Story in Scratch
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/programming2.jpg"
              alt="Underwater Scratch Project"
              width={800}
              height={1000}
              className="w-full h-[500px] object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-2xl">
                Underwater Adventure Project
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Robotics */}
      <section>
        <h2 className="text-3xl font-bold mb-3">
          🤖 Robotics Projects
        </h2>

        <p className="text-slate-600 mb-8">
          LEGO Education robotics builds programmed and tested by our students.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/fan-project.jpg"
              alt="Motorized Fan"
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">
                Smart Fan
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/team-building.jpg"
              alt="Team Building Activity"
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">
                Team Building Challenge
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/robot-project.jpg"
              alt="Interactive Robot"
              width={800}
              height={600}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">
                Interactive Robot
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}