import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, MessageCircle, Server, GitBranch, Cloud } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Comment {
  id: number;
  content: string;
  author: string;
  timestamp: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  category: string;
}

const Forum = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "CI/CD Pipeline Best Practices",
      content: "What are your recommended practices for setting up CI/CD pipelines?",
      author: "DevOps Engineer",
      likes: 5,
      comments: [
        {
          id: 1,
          content: "Always include automated testing in your pipeline",
          author: "Test Expert",
          timestamp: "1 hour ago"
        }
      ],
      timestamp: "2 hours ago",
      category: "DevOps"
    },
    {
      id: 2,
      title: "Container Orchestration with Kubernetes",
      content: "Looking for tips on managing Kubernetes clusters effectively",
      author: "Cloud Native Dev",
      likes: 8,
      comments: [
        {
          id: 1,
          content: "Use namespaces to organize your resources",
          author: "K8s Pro",
          timestamp: "3 hours ago"
        }
      ],
      timestamp: "4 hours ago",
      category: "DevOps"
    }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", category: "General" });
  const [newComment, setNewComment] = useState({ postId: 0, content: "" });
  const [showCommentInput, setShowCommentInput] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const post: Post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "Demo User",
      likes: 0,
      comments: [],
      timestamp: "Just now",
      category: newPost.category
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", category: "General" });
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

  const handleAddComment = (postId: number) => {
    if (!newComment.content) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newCommentObj: Comment = {
          id: post.comments.length + 1,
          content: newComment.content,
          author: "Demo User",
          timestamp: "Just now"
        };
        return {
          ...post,
          comments: [...post.comments, newCommentObj]
        };
      }
      return post;
    }));

    setNewComment({ postId: 0, content: "" });
    setShowCommentInput(null);
    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully!",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Discussion Forum</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg shadow-sm flex items-center gap-2">
          <Server className="h-6 w-6 text-primary" />
          <span>Infrastructure</span>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm flex items-center gap-2">
          <GitBranch className="h-6 w-6 text-primary" />
          <span>CI/CD</span>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm flex items-center gap-2">
          <Cloud className="h-6 w-6 text-primary" />
          <span>Cloud Native</span>
        </div>
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
        <select
          value={newPost.category}
          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
          className="w-full bg-background border border-input rounded-md px-4 py-2"
        >
          <option value="General">General</option>
          <option value="DevOps">DevOps</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="CI/CD">CI/CD</option>
          <option value="Cloud">Cloud</option>
        </select>
        <Button type="submit">Post Question</Button>
      </form>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{post.category}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.content}</p>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCommentInput(post.id)}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {post.comments.length}
                </Button>
              </div>
            </div>

            {/* Comments section */}
            <div className="space-y-4 mt-4 border-t pt-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="bg-background p-4 rounded-md">
                  <p className="mb-2">{comment.content}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{comment.author}</span>
                    <span>•</span>
                    <span>{comment.timestamp}</span>
                  </div>
                </div>
              ))}

              {showCommentInput === post.id && (
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Write a comment..."
                    value={newComment.content}
                    onChange={(e) => setNewComment({ postId: post.id, content: e.target.value })}
                    className="flex-1"
                  />
                  <Button onClick={() => handleAddComment(post.id)}>Comment</Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;