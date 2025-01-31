import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MemberProps {
  member: {
    id: number;
    name: string;
    division: string;
    image: string;
  };
}

export default function MemberCard({ member }: MemberProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <Avatar className="size-24 mx-auto border-2 border-blue-500">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback>{member.name[0]}</AvatarFallback>
      </Avatar>
      <h4 className="mt-4 text-lg font-bold text-center text-blue-900 dark:text-blue-300">
        {member.name}
      </h4>
      <div className="mt-2 flex justify-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200 truncate">
          {member.division}
        </span>
      </div>
    </div>
  );
}
