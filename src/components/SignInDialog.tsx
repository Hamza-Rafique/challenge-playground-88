import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"
import { Github, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function SignInDialog() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
    
    // This is a mock authentication - replace with real API call
    if (username === 'demo' && password === 'demo') {
      toast({
        title: "Success",
        description: "Successfully signed in!",
      })
      setOpen(false)
      navigate('/learning')
    } else {
      toast({
        title: "Error",
        description: "User not found. Please check your credentials.",
        variant: "destructive"
      })
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      // This is where you would implement Google OAuth
      // For now, we'll show a success message
      toast({
        title: "Google Sign In",
        description: "Google authentication will be implemented here",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in with Google",
        variant: "destructive"
      })
    }
  }

  const handleGithubSignIn = async () => {
    try {
      // This is where you would implement GitHub OAuth
      // For now, we'll show a success message
      toast({
        title: "GitHub Sign In",
        description: "GitHub authentication will be implemented here",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in with GitHub",
        variant: "destructive"
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="min-w-[200px]">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Sign in to access your learning journey.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button variant="outline" onClick={handleGithubSignIn}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="johndoe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">Sign In with Email</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}