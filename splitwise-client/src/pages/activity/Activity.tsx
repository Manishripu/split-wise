import {
  ActivityWrapper,
  PageTitle,
  FiltersRow,
  ActivityList,
  ActivityCard,
  ActivityText,
  ActivityDate,
} from "./style";

const Activity = () => {
  // Placeholder data – real data will come from backend later
  const activities = [
    {
      id: 1,
      text: "You added Dinner (₹500) to Goa Trip",
      date: "2 hours ago",
    },
    {
      id: 2,
      text: "John settled up with you (₹200)",
      date: "1 day ago",
    },
    {
      id: 3,
      text: "Mia added Snacks (₹150) to Friends Group",
      date: "3 days ago",
    },
  ];

  return (
    <ActivityWrapper>
      <PageTitle>Recent Activity</PageTitle>

      {/* Filter buttons (can be enhanced later) */}
      <FiltersRow>
        <button>All</button>
        <button>Expenses</button>
        <button>Settlements</button>
      </FiltersRow>

      {/* Activity List */}
      <ActivityList>
        {activities.map((act) => (
          <ActivityCard key={act.id}>
            <ActivityText>{act.text}</ActivityText>
            <ActivityDate>{act.date}</ActivityDate>
          </ActivityCard>
        ))}
      </ActivityList>
    </ActivityWrapper>
  );
};

export default Activity;
