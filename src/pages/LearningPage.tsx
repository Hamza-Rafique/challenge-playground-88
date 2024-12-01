import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const LearningPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-foreground mb-6">
          Your Learning Journey
        </h1>
        <div className="grid gap-6">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-primary-foreground mb-4">
              Welcome to your learning dashboard
            </h2>
            <p className="text-muted-foreground mb-4">
              Track your progress and continue your learning journey here.
            </p>
            <Button onClick={() => navigate('/modules')}>
              Continue Learning
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPage