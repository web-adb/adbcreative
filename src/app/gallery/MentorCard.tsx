import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MentorProps {
  mentor: {
    name: string;
    image: string;
  };
}

export default function MentorCard({ mentor }: MentorProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Pembina</h3>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <Avatar className="size-24 mx-auto border-2 border-blue-500">
            <AvatarImage src={mentor.image} alt={mentor.name} />
            <AvatarFallback>{mentor.name[0]}</AvatarFallback>
          </Avatar>
          <h4 className="mt-4 text-lg font-bold text-center text-blue-900 dark:text-blue-300">
            {mentor.name}
          </h4>
        </div>
      </div>
    </div>
  );
}
