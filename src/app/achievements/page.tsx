import { TracingBeam } from "@/components/ui/tracing-beam";
import { Trophy, Award, Star } from "lucide-react";
import achievementsData from "@/data/achievements.json"; // Sesuaikan path-nya

const Achievements = () => {
  const { achievements } = achievementsData; // Destructure data dari JSON

  return (
    <TracingBeam className="px-6">
      <div className="mx-auto w-full space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Trophy className="h-12 w-12 text-yellow-500" />
            <h3 className="mt-4 text-2xl font-semibold">1245</h3>
            <p className="mt-2 text-gray-600">Penghargaan</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Award className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-2xl font-semibold">357</h3>
            <p className="mt-2 text-gray-600">Proyek Sukses</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <Star className="h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-2xl font-semibold">930</h3>
            <p className="mt-2 text-gray-600">Klien Puas</p>
          </div>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-bold mt-10">Dokumentasi</h3>{" "}
        </div>
        {/* Tambahan Card dengan 2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-lg shadow-lg"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">{achievement.title}</h3>
              <p className="mt-2 text-gray-600">
                <strong>Tanggal:</strong> {achievement.dates}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Lokasi:</strong> {achievement.location}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Achievement {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  );
};

export default Achievements;