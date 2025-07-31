import { Instagram } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState, useRef } from 'react';
import work1 from '@/assets/work_1.jpg';
import work2 from '@/assets/work_2.jpg';
import work3 from '@/assets/work_3.jpg';
import work4 from '@/assets/work_4.jpg';
import work5 from '@/assets/work_5.jpg';
import work6 from '@/assets/work_6.jpg';

// Import video files - add these video files to your src/assets folder
import video1 from '@/assets/clip1.mp4';
import video2 from '@/assets/clip2.mp4';
import video3 from '@/assets/clip3.mp4';
import video4 from '@/assets/clip4.mp4';
import video5 from '@/assets/clip5.mp4';
import video6 from '@/assets/clip6.mp4';

const Portfolio = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const insta_url = "https://www.instagram.com/alexn.mov/"
  const instagramPosts = [
    {
      id: 1,
      type: 'video',
      thumbnail: work1,
      videoUrl: video1,
      instagramUrl: insta_url
    },
    {
      id: 2,
      type: 'video',
      thumbnail: work2,
      videoUrl: video2,
      instagramUrl: insta_url
    },
    {
      id: 3,
      type: 'video',
      thumbnail: work3,
      videoUrl: video3,
      instagramUrl: insta_url
    },
    {
      id: 4,
      type: 'video',
      thumbnail: work4,
      videoUrl: video4,
      instagramUrl: insta_url
    },
    {
      id: 5,
      type: 'video',
      thumbnail: work5,
      videoUrl: video5,
      instagramUrl: insta_url
    },
    {
      id: 6,
      type: 'video',
      thumbnail: work6,
      videoUrl: video6,
      instagramUrl: insta_url
    }
  ];

  const handlePostClick = (instagramUrl: string) => {
    window.open(instagramUrl, '_blank');
  };

  const handleMouseEnter = async (postId: number) => {
    console.log(`Mouse enter on post ${postId}`);
    setHoveredVideo(postId);
    
    const videoIndex = postId - 1;
    const video = videoRefs.current[videoIndex];
    
    if (video) {
      try {
        video.currentTime = 0;
        await video.play();
        console.log(`Video ${postId} playing successfully`);
      } catch (error) {
        console.error(`Video ${postId} play failed:`, error);
      }
    }
  };

  const handleMouseLeave = (postId: number) => {
    console.log(`Mouse leave on post ${postId}`);
    setHoveredVideo(null);
    
    const videoIndex = postId - 1;
    const video = videoRefs.current[videoIndex];
    
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="work" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="hero-text">INSTAGRAM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow along for behind-the-scenes content and latest work
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handlePostClick(post.instagramUrl)}
              onMouseEnter={() => handleMouseEnter(post.id)}
              onMouseLeave={() => handleMouseLeave(post.id)}
            >
              <AspectRatio ratio={1} className="overflow-hidden">
                <div className="relative w-full h-full bg-card">
                  <div className="relative w-full h-full">
                    <img
                      src={post.thumbnail}
                      alt={`Instagram post ${post.id}`}
                      className="w-full h-full object-cover smooth-transition group-hover:opacity-0"
                    />
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={post.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 smooth-transition"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onLoadStart={() => console.log(`Video ${post.id} loading started`)}
                      onLoadedData={() => console.log(`Video ${post.id} loaded successfully`)}
                      onError={(e) => console.error(`Video ${post.id} error:`, e)}
                    />
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 smooth-transition">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 smooth-transition" />
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;