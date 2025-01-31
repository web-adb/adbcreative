interface ShowMoreButtonProps {
    showAll: boolean;
    toggleShowAll: () => void;
    totalMembers: number;
    initialMembersToShow: number;
  }
  
  export default function ShowMoreButton({
    showAll,
    toggleShowAll,
    totalMembers,
    initialMembersToShow,
  }: ShowMoreButtonProps) {
    if (totalMembers <= initialMembersToShow) return null;
  
    return (
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleShowAll}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    );
  }
  