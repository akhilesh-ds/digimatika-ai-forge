
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Chatbots in Customer Service",
    excerpt: "Discover how AI-powered chatbots are revolutionizing customer support with 24/7 service and personalized experiences.",
    category: "AI Chatbots",
    author: "Sarah Johnson",
    date: "April 10, 2025",
    comments: 12,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-ai-chatbots"
  },
  {
    id: 2,
    title: "How Voice Agents Are Changing Business Communication",
    excerpt: "Voice agent technology has evolved dramatically in recent years. Here's how businesses are using it to streamline operations.",
    category: "Voice Technology",
    author: "Michael Chen",
    date: "April 3, 2025",
    comments: 8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    slug: "voice-agents-changing-business"
  },
  {
    id: 3,
    title: "5 Workflow Automation Strategies That Save Hours Every Week",
    excerpt: "Implement these proven workflow automation strategies to reclaim valuable time and boost productivity across your organization.",
    category: "Workflow",
    author: "Anna Smith",
    date: "March 27, 2025",
    comments: 15,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    slug: "workflow-automation-strategies"
  },
  {
    id: 4,
    title: "The ROI of Business Automation: A Case Study",
    excerpt: "Explore how a midsize manufacturing company achieved 300% ROI by implementing strategic business automation solutions.",
    category: "Business Automation",
    author: "Robert Lee",
    date: "March 20, 2025",
    comments: 6,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    slug: "roi-business-automation"
  }
];

const categories = ["All", "AI Chatbots", "Voice Technology", "Workflow", "Business Automation"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-10"
      >
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-8 text-center">
            Our <span className="text-accent-coral">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-12"></div>
          <p className="text-xl text-center text-secondary-slate max-w-3xl mx-auto mb-16">
            Insights and expert advice on AI, automation, and digital transformation for modern businesses.
          </p>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-64">
              <Input
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-accent-coral hover:bg-accent-coral/90"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Blog posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-56 overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="pt-6 flex-grow">
                      <h2 className="text-2xl font-bold text-primary-navy mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <p className="text-secondary-slate mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        variant="ghost" 
                        className="text-accent-coral hover:text-accent-coral/80 p-0 group flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No blog posts found matching your search.
              </p>
            </div>
          )}
          
          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled size="sm">Previous</Button>
              <Button variant="outline" className="bg-accent-coral text-white hover:bg-accent-coral/90" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Blog;
