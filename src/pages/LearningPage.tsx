import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useNavigate } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Flame, Award, BookOpen, Clock, Trophy } from "lucide-react"

const LearningPage = () => {
  const navigate = useNavigate();

  // This would normally come from an API
  const mockData = {
    progress: 65,
    streak: 7,
    recentActivities: [
      { id: 1, title: "Completed Linux File System Module", time: "2 hours ago" },
      { id: 2, title: "Started Git Branching", time: "Yesterday" },
      { id: 3, title: "Earned Docker Badge", time: "2 days ago" },
    ],
    achievements: [
      { id: 1, title: "Linux Master", description: "Complete Linux Fundamentals" },
      { id: 2, title: "Git Expert", description: "7-day Git learning streak" },
      { id: 3, title: "Container Pro", description: "Deploy 10 containers" },
    ],
    recommendedModules: [
      { id: 1, title: "Linux Fundamentals", difficulty: "Beginner" },
      { id: 2, title: "Docker Containers", difficulty: "Intermediate" },
      { id: 3, title: "Kubernetes", difficulty: "Advanced" },
    ],
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary-foreground">
            Your Learning Journey
          </h1>
          <Button onClick={() => navigate('/modules')}>
            Continue Learning
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground">
                Overall Progress
              </CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <Progress value={mockData.progress} className="mt-4" />
              <p className="text-xs text-muted-foreground mt-2">
                {mockData.progress}% Complete
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground">
                Learning Streak
              </CardTitle>
              <Flame className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary-foreground">
                {mockData.streak} days
              </div>
              <p className="text-xs text-muted-foreground">
                Keep it up! You're doing great!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground">
                Achievements
              </CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary-foreground">
                {mockData.achievements.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Badges earned
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary-foreground">Recent Activity</CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {mockData.recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex justify-between items-center py-2 border-b border-border"
                  >
                    <span className="text-primary-foreground">{activity.title}</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary-foreground">Achievements</CardTitle>
                <Award className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {mockData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center justify-between py-2 border-b border-border"
                  >
                    <div>
                      <p className="text-primary-foreground">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    <Trophy className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Modules */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Recommended Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockData.recommendedModules.map((module) => (
                <Card
                  key={module.id}
                  className="bg-accent cursor-pointer hover:bg-accent/90 transition-colors"
                  onClick={() => navigate(`/module/${module.title.toLowerCase()}`)}
                >
                  <CardContent className="p-4">
                    <h3 className="text-primary-foreground font-medium mb-2">
                      {module.title}
                    </h3>
                    <Badge variant="secondary">{module.difficulty}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LearningPage
