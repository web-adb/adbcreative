import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TracingBeam } from "@/components/ui/tracing-beam";

const teamData = [
  {
    id: 1,
    name: "John Doe",
    division: "Desain Grafis",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    division: "Pengembangan Web",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice Johnson",
    division: "Manajemen Proyek",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bob Brown",
    division: "Desain Grafis",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Charlie Davis",
    division: "Pengembangan Web",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Eva Green",
    division: "Manajemen Proyek",
    image: "https://via.placeholder.com/150",
  },
];

export default function Gallery() {
  return (
    <TracingBeam className="px-6">
      <section id="gallery" className="py-20">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          {/* Judul Gallery */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
            Galeri Organisasi
          </h2>

          {/* Bagian Anggota */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Anggota</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Avatar className="size-24 mx-auto border-2 border-blue-500">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h4 className="mt-4 text-lg font-bold text-center text-blue-900 dark:text-blue-300">
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Nama Divisi */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Nama Divisi</h3>
            <div className="flex flex-wrap gap-2">
              {[...new Set(teamData.map((member) => member.division))].map(
                (division) => (
                  <Badge
                    key={division}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
                  >
                    {division}
                  </Badge>
                )
              )}
            </div>
          </div>

          {/* Bagian Anggota dan Divisi */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Anggota dan Divisi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Avatar className="size-24 mx-auto border-2 border-blue-500">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h4 className="mt-4 text-lg font-bold text-center text-blue-900 dark:text-blue-300">
                    {member.name}
                  </h4>
                  <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                    {member.division}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TracingBeam>
  );
}