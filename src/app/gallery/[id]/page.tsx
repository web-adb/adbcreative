import { notFound } from "next/navigation";
import teamData from "@/data/teamData.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MemberDetailProps {
  params: { id: string };
}

export default function MemberDetail({ params }: MemberDetailProps) {
  const member = teamData.members.find((m) => m.id === Number(params.id));

  if (!member) return notFound();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <Avatar className="size-32 mx-auto border-4 border-blue-500 overflow-hidden">
          <AvatarImage
            className="w-full h-full object-cover"
            src={member.image}
            alt={member.name}
          />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-2xl font-bold text-center text-blue-900 dark:text-blue-300">
          {member.name}
        </h2>
        <p className="mt-2 text-center text-gray-700 dark:text-gray-400">
          {member.division}
        </p>
      </div>
    </div>
  );
}
