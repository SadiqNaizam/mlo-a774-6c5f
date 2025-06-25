import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MemoryCardProps {
  mediaUrl: string;
  mediaType: 'image' | 'video';
  title: string;
  date: string;
  story: string;
  mediaAlt?: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  mediaUrl,
  mediaType,
  title,
  date,
  story,
  mediaAlt = "A cherished memory"
}) => {
  console.log('MemoryCard loaded for:', title);

  const renderMedia = () => {
    if (mediaType === 'image') {
      return (
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-t-xl overflow-hidden">
          <img
            src={mediaUrl}
            alt={mediaAlt}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      );
    }

    if (mediaType === 'video') {
      return (
        <AspectRatio ratio={16 / 9} className="bg-black rounded-t-xl overflow-hidden">
          <video
            src={mediaUrl}
            controls
            className="w-full h-full"
            aria-label={mediaAlt}
          >
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      );
    }

    return null;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border-rose-100 shadow-2xl shadow-rose-200/50 rounded-xl overflow-hidden transition-all duration-500">
      <CardHeader className="p-0">
        {renderMedia()}
      </CardHeader>
      <CardContent className="p-6 sm:p-8 md:p-10 text-center">
        <CardDescription className="text-base text-rose-800/80 mb-2 font-serif italic">
          {date}
        </CardDescription>
        <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-6">
          {title}
        </CardTitle>
        <div className="prose prose-lg prose-p:text-slate-700 prose-p:leading-relaxed max-w-none text-left mx-auto">
          {/* Using a div with dangerouslySetInnerHTML to allow proposers to add simple formatting like <br> or <b> if needed in the future */}
          {/* For now, just rendering text with preserved newlines */}
          <p className="whitespace-pre-wrap">
            {story}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryCard;