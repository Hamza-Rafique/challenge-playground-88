import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const Forum = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Help with React Hooks",
      content: "I'm having trouble understanding useEffect. Can someone explain?",
      author: "John Doe",
      likes: 5,
      comments: 3,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "Best practices for state management",
      content: "What's your preferred method for managing global state in React?",
      author: "Jane Smith",
      likes: 8,
      comments: 6,
      timestamp: "4 hours ago"
    }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const post: Post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "Demo User",
      likes: 0,
      comments: 0,
      timestamp: "Just now"
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "" });
    toast({
      title: "Post created",
      description: "Your question has been posted successfully!",
    });
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Discussion Forum</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
        <Input
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="w-full"
        />
        <Textarea
          placeholder="What's your question?"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="w-full"
        />
        <Button type="submit">Post Question</Button>
      </form>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.content}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>{post.author}</span>
                <span>{post.timestamp}</span>
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  {post.likes}
                </Button>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;