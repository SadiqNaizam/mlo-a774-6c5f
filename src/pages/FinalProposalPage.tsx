import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Heart } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalProposalDisplay from '@/components/FinalProposalDisplay';
import { Button } from '@/components/ui/button';

const FinalProposalPage: React.FC = () => {
  console.log('FinalProposalPage loaded');

  const handleYesClick = () => {
    toast.success("Congratulations! We're so happy for you!", {
      duration: 5000,
      icon: <Heart className="text-pink-500" />,
    });
    // In a real application, this would likely trigger a state change,
    // send a notification to the proposer, or navigate to a celebration page.
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-100 dark:from-slate-900 dark:via-black dark:to-rose-900/50">
      {/* The recipient variant of the header renders null to create an immersive experience */}
      <Header variant="recipient" />

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FinalProposalDisplay
            proposalMessage="Will you marry me?"
            mediaType="video"
            mediaUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.5, ease: 'backOut' }}
          className="mt-8"
        >
          <Button
            onClick={handleYesClick}
            size="lg"
            className="h-16 px-12 text-2xl font-bold rounded-full shadow-lg bg-rose-500 hover:bg-rose-600 text-white transition-all transform hover:scale-105"
          >
            <Heart className="w-7 h-7 mr-3 -ml-2 animate-pulse" />
            YES
          </Button>
        </motion.div>
      </main>

      {/* The recipient variant of the footer provides a personal, minimal touch */}
      <Footer variant="recipient" proposerName="Your Partner" />
    </div>
  );
};

export default FinalProposalPage;