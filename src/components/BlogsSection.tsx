
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Sample blog post for initial rendering
const sampleBlog = {
  title: "What is Kyverno? Policy Management Using Kyverno",
  brief: "Learn about Kyverno, an open-source policy engine designed specifically for Kubernetes that lets you validate, mutate and generate configurations using admission controls.",
  coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1714846799129/da5de157-9997-4bad-9090-3e528829844e.png",
  dateAdded: "May 4, 2024",
  slug: "what-is-kyverno-policy-management-using-kyverno"
};

const BlogCard = ({ blog, index }: { blog: any, index: number }) => (
  <Card className="glass-card overflow-hidden animate-fade-in border-portfolioTeal/10 h-full flex flex-col" style={{animationDelay: `${index * 150}ms`}}>
    <div className="h-48 overflow-hidden">
      <img
        src={blog.coverImage || "https://cdn.hashnode.com/res/hashnode/image/upload/v1714846799129/da5de157-9997-4bad-9090-3e528829844e.png"}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader>
      <div className="flex items-center text-portfolioSlate mb-2">
        <Calendar className="h-4 w-4 mr-2" />
        <span className="text-sm">{blog.dateAdded}</span>
      </div>
      <CardTitle className="text-portfolioLightestSlate">{blog.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-portfolioSlate">{blog.brief}</CardDescription>
    </CardContent>
    <CardFooter>
      <Button
        asChild
        variant="outline"
        className="w-full text-portfolioTeal border-portfolioTeal/50 hover:bg-portfolioTeal/10 hover:text-portfolioTeal hover:border-portfolioTeal"
      >
        <a
          href={`https://harshalr.hashnode.dev/${blog.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([sampleBlog]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Just for demonstration - we're using the sample blog
    // In a real app, you would fetch from Hashnode API
    setBlogs([sampleBlog]);
  }, []);

  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-portfolioNavy/30">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <span className="section-heading-number">04.</span>
          <h2 className="section-heading-text">Blog</h2>
          <div className="section-heading-line"></div>
        </div>

        {loading ? (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-portfolioTeal"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} index={index} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            asChild
            className="group button-primary animate-fade-in"
          >
            <a href="https://harshalr.hashnode.dev" target="_blank" rel="noopener noreferrer">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
