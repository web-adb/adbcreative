"use client";

import { useState } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import teamData from "@/data/teamData.json";
import MentorCard from "./MentorCard";
import LeaderCard from "./LeaderCard";
import MemberCard from "./MemberCard";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
// import ShowMoreButton from "./ShowMoreButton";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const initialMembersToShow = 9;

  // Kelompokkan anggota berdasarkan divisi
  const groupedMembers = teamData.members.reduce(
    (acc, member) => {
      if (!acc[member.division]) {
        acc[member.division] = [];
      }
      acc[member.division].push(member);
      return acc;
    },
    {} as Record<string, typeof teamData.members>
  );

  // Ambil data anggota yang akan ditampilkan
  const membersToDisplay = showAll
    ? teamData.members
    : teamData.members.slice(0, initialMembersToShow);

  return (
    <TracingBeam className="px-6">
      <section id="gallery">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              Struktur Organisasi
            </h2>
          </BlurFade>

          <BlurFade>
            <MentorCard mentor={teamData.mentor} />
          </BlurFade>

          <BlurFade>
            <LeaderCard leader={teamData.leader} />
          </BlurFade>

          {/* Tampilkan anggota berdasarkan divisi */}
          {Object.entries(groupedMembers).map(([division, members]) => (
            <div key={division} className="space-y-6">
              <BlurFadeText
                text={`${division}`}
                className="text-xl font-bold"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {members.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}

          {/* Tombol "Show More" atau "Show Less" */}
          {/* <ShowMoreButton
            showAll={showAll}
            toggleShowAll={() => setShowAll(!showAll)}
            totalMembers={teamData.members.length}
            initialMembersToShow={initialMembersToShow}
          /> */}
        </div>
      </section>
    </TracingBeam>
  );
}
