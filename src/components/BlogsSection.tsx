
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Blog post data
const blogPosts = [
  {
    title: "What is Kyverno? Policy Management Using Kyverno",
    brief: "Learn about Kyverno, an open-source policy engine designed specifically for Kubernetes that lets you validate, mutate and generate configurations using admission controls.",
    dateAdded: "May 4, 2024",
    slug: "what-is-kyverno-policy-management-using-kyverno"
  },
  {
    title: "Getting Started with Microsoft Semantic Kernel: A Simple Guide to Prompts and Plugins in Python",
    brief: "Semantic Kernel is an open-source SDK by Microsoft that lets you combine code (your logic and plugins) with language models (like OpenAI's GPT or Azure OpenAI) to build AI-first applications..",
    dateAdded: "May 2024",
    slug: "Getting-started-with-microsoft-semantic-kernel-a-simple-guide-to-prompts-and-plugins-in-python"
  },
  {
    title: "Mogenius: Making Kubernetes Feel Effortless for Developers",
    brief: "Discover how Mogenius simplifies Kubernetes for developers, making cloud-native application deployment and management accessible without deep infrastructure expertise.",
    dateAdded: "May 2024",
    slug: "mogenius-making-kubernetes-feel-effortless-for-developers"
  },
  {
    title: "Useful Terraform Commands You Need to Know",
    brief: "Explore essential Terraform commands that will boost your infrastructure-as-code workflow and help you manage cloud resources more efficiently.",
    dateAdded: "April 2024",
    slug: "useful-terraform-commands-you-need-to-know"
  }
];

const BlogCard = ({ blog, index }: { blog: any, index: number }) => (
  <div 
    className="bg-portfolioNavy/80 border border-portfolioTeal/20 rounded-lg overflow-hidden animate-fade-in hover:border-portfolioTeal/50 transition-all duration-300 h-full flex flex-col"
    style={{animationDelay: `${index * 150}ms`}}
  >
    <div className="p-6 flex flex-col h-full">
      <div className="flex items-center text-portfolioSlate mb-3">
        <Calendar className="h-4 w-4 mr-2 text-portfolioTeal" />
        <span className="text-sm">{blog.dateAdded}</span>
      </div>
      <h3 className="text-xl font-bold text-portfolioLightestSlate mb-2">{blog.title}</h3>
      <p className="text-portfolioSlate mb-4 flex-grow">{blog.brief}</p>
      <Button
  asChild
  variant="outline"
  className="w-fit text-black border-black hover:bg-black/10 hover:text-black hover:border-black"
>
  <a
    href={`https://harshalr.hashnode.dev/${blog.slug}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    Read More
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</Button>

    </div>
  </div>
);

const BlogsSection = () => {
  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-portfolioNavy/30">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">Blog</h2>
          <div className="h-px bg-portfolioSlate/30 w-full max-w-xs mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {blogPosts.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>

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
