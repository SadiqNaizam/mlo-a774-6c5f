import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FinalProposalDisplayProps {
  proposalMessage?: string;
  mediaUrl: string;
  mediaType: 'video' | 'image';
}

const FinalProposalDisplay: React.FC<FinalProposalDisplayProps> = ({
  proposalMessage = "Will you marry me?",
  mediaUrl,
  mediaType,
}) => {
  console.log('FinalProposalDisplay loaded');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto p-4"
    >
      <Card className="overflow-hidden shadow-2xl bg-white/80 backdrop-blur-lg border-gray-200 rounded-2xl">
        <CardContent className="p-4 sm:p-6 md:p-8 text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full mb-6 sm:mb-8"
          >
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden shadow-lg">
              {mediaType === 'video' ? (
                <video
                  src={mediaUrl || 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'}
                  autoPlay
                  loop
                  muted // Muted is often required for autoplay in browsers
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="A special video message"
                />
              ) : (
                <img
                  src={mediaUrl || 'https://images.unsplash.com/photo-1572782262725-b3a1a9a42d5e?q=80&w=1974&auto=format&fit=crop'}
                  alt="A special memory"
                  className="w-full h-full object-cover"
                />
              )}
            </AspectRatio>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-800"
            // Using a generic font-family but with specific styling to appear elegant
            style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}
          >
            {proposalMessage}
          </motion.h1>
          
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FinalProposalDisplay;