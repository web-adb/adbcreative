"use client";

import { useState } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import teamData from "@/data/teamData.json";
import MentorCard from "./MentorCard";
import LeaderCard from "./LeaderCard";
import MemberCard from "./MemberCard";
import ShowMoreButton from "./ShowMoreButton";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const initialMembersToShow = 9;

  const membersToDisplay = showAll
    ? teamData.members
    : teamData.members.slice(0, initialMembersToShow);

  return (
    <TracingBeam className="px-6">
      <section id="gallery">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
            Struktur Organisasi
          </h2>

          <MentorCard mentor={teamData.mentor} />
          <LeaderCard leader={teamData.leader} />

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Anggota</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membersToDisplay.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
            <ShowMoreButton
              showAll={showAll}
              toggleShowAll={() => setShowAll(!showAll)}
              totalMembers={teamData.members.length}
              initialMembersToShow={initialMembersToShow}
            />
          </div>
        </div>
      </section>
    </TracingBeam>
  );
}
