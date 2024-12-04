import { Trophy, Medal, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface User {
  rank: number;
  name: string;
  points: number;
  achievements: number;
  level: string;
}

const Leaderboard = () => {
  const users: User[] = [
    { rank: 1, name: "Sarah Johnson", points: 2500, achievements: 15, level: "Expert" },
    { rank: 2, name: "Michael Chen", points: 2300, achievements: 13, level: "Advanced" },
    { rank: 3, name: "Emma Davis", points: 2100, achievements: 12, level: "Advanced" },
    { rank: 4, name: "James Wilson", points: 1900, achievements: 10, level: "Intermediate" },
    { rank: 5, name: "Lisa Anderson", points: 1800, achievements: 9, level: "Intermediate" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <Star className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Leaderboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Participants
            </CardTitle>
            <Star className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150+</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Points Awarded
            </CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25,000</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Achievements Unlocked
            </CardTitle>
            <Medal className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500+</div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Top Performers</h2>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.rank}
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8">
                    {getRankIcon(user.rank)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">Level: {user.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="font-semibold">{user.points}</p>
                    <p className="text-sm text-muted-foreground">Points</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{user.achievements}</p>
                    <p className="text-sm text-muted-foreground">Achievements</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;