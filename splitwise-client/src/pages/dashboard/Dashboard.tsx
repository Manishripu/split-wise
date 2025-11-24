import {
  DashboardWrapper,
  Title,
  SummaryGrid,
  SummaryCard,
  CardLabel,
  CardValue,
  SectionTitle,
  ActivityList,
  ActivityItem,
  IconWrapper,
  ActivityText,
} from "./style";

const Dashboard = () => {
  const youOwe = 250;
  const youAreOwed = 530;
  const net = youAreOwed - youOwe;

  const recentActivity = [
    {
      id: 1,
      icon: "🧾",
      text: "John added Dinner (₹500) in Goa Trip",
      date: "2 hours ago",
    },
    {
      id: 2,
      icon: "💸",
      text: "You settled up with Mia (₹200)",
      date: "1 day ago",
    },
    {
      id: 3,
      icon: "⛽",
      text: "Rohan added Fuel (₹600)",
      date: "3 days ago",
    },
  ];

  return (
    <DashboardWrapper>
      <Title>Dashboard</Title>

      {/* Summary Cards */}
      <SummaryGrid>
        <SummaryCard bg="linear-gradient(135deg, #ff6b6b, #d63031)">
          <CardLabel>You Owe</CardLabel>
          <CardValue>₹{youOwe}</CardValue>
        </SummaryCard>

        <SummaryCard bg="linear-gradient(135deg, #00b894, #019874)">
          <CardLabel>You Are Owed</CardLabel>
          <CardValue>₹{youAreOwed}</CardValue>
        </SummaryCard>

        <SummaryCard
          bg={
            net >= 0
              ? "linear-gradient(135deg, #6c5ce7, #4b4ae3)"
              : "linear-gradient(135deg, #d63031, #c0392b)"
          }
        >
          <CardLabel>Net Balance</CardLabel>
          <CardValue>₹{net}</CardValue>
        </SummaryCard>
      </SummaryGrid>

      {/* Recent Activity */}
      <SectionTitle>Recent Activity</SectionTitle>

      <ActivityList>
        {recentActivity.map((act) => (
          <ActivityItem key={act.id}>
            <IconWrapper>{act.icon}</IconWrapper>
            <ActivityText>
              <p>{act.text}</p>
              <p className="date">{act.date}</p>
            </ActivityText>
          </ActivityItem>
        ))}
      </ActivityList>
    </DashboardWrapper>
  );
};

export default Dashboard;
