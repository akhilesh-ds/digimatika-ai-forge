
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface VideoCard {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc?: string;
  youtubeId?: string;
}

// Adding YouTube IDs for better embedding
const videos: VideoCard[] = [
  {
    id: "business-automation",
    title: "Business Operation Automation",
    description: "Automating internal workflows to reduce manual effort and streamline operations.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    thumbnailSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "voice-agent",
    title: "AI Voice Agent for Restaurant",
    description: "Conversational AI that takes reservations, answers FAQs, and enhances customer service.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    thumbnailSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "travel-chatbot",
    title: "Travel Assistant Chatbot",
    description: "An AI travel planner that helps users book trips, find destinations, and get support.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    thumbnailSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "ecommerce-chatbot",
    title: "E-Commerce Chatbot",
    description: "AI chatbot that helps users browse products, answer queries, and complete purchases.",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    thumbnailSrc: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1470&auto=format&fit=crop",
    youtubeId: "dQw4w9WgXcQ"
  }
];

const VideoCard = ({ video }: { video: VideoCard }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Reset video playing state when out of view for better performance
  useEffect(() => {
    if (!inView && isPlaying) {
      setIsPlaying(false);
      setIsLoading(true);
    }
  }, [inView, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Generate optimized YouTube thumbnail URL
  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-secondary-slate/10">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              onClick={handlePlay}
              role="button"
              aria-label={`Play ${video.title} video`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handlePlay();
                }
              }}
            >
              {/* Use YouTube thumbnail if available, otherwise fall back to provided thumbnail */}
              <img 
                src={video.youtubeId ? getYouTubeThumbnail(video.youtubeId) : video.thumbnailSrc} 
                alt={`${video.title} thumbnail`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                width="640"
                height="360"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute flex items-center justify-center bg-accent-coral text-white rounded-full p-4 transform transition-all duration-300 group-hover:scale-110 z-10">
                <Play size={24} className="ml-1" />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary-slate/10">
                  <Video className="animate-pulse text-accent-coral" size={40} />
                </div>
              )}
              <iframe
                src={video.videoSrc}
                title={video.title}
                className={cn("w-full h-full border-0", isLoading ? "opacity-0" : "opacity-100")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
        <CardContent className="flex-grow flex flex-col justify-between p-5">
          <div>
            <h3 className="font-bold text-lg mb-2 text-primary-navy">{video.title}</h3>
            <p className="text-muted-foreground text-sm">{video.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const VideoShowcaseSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section 
      id="video-showcase"
      ref={ref} 
      className="bg-customBg py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-navy">See Our AI in Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch real demos of our AI solutions transforming business operations and customer experiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
