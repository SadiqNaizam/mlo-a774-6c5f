import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MemoryCard from '@/components/MemoryCard';
import PuzzleInput from '@/components/PuzzleInput';
import TimelineStepIndicator from '@/components/TimelineStepIndicator';

// shadcn/ui Components
import { Button } from '@/components/ui/button';

// --- Placeholder Data for a specific step ---
// This represents the data that would be dynamically loaded for "Day 2" of the journey.
const currentStepData = {
  proposerName: 'Your Partner',
  currentStep: 2,
  totalSteps: 5,
  memory: {
    mediaUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1976&auto=format&fit=crop',
    mediaType: 'image' as 'image' | 'video',
    title: "The Place We First Met",
    date: "April 12, 2021",
    story: "Remember this little cafe? I was so nervous, I almost spilled my coffee all over you. From the moment we started talking, I knew I had found someone incredibly special. We talked for hours, and it felt like only minutes had passed. It was the easiest, most natural conversation I'd ever had."
  },
  puzzle: {
    question: "What was the name of that little cafe?",
    correctAnswer: "The Daily Grind",
  },
  buttonText: "Continue to the next memory...",
  finalButtonText: "I have one more question for you...",
};

const JourneyStepPage = () => {
  console.log('JourneyStepPage loaded');
  const navigate = useNavigate();
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);

  const handleCorrectAnswer = () => {
    setIsPuzzleSolved(true);
  };
  
  const handleProceed = () => {
    // In a real app, this would navigate to the next step, e.g., /journey-step?id=3
    // For this template, we'll navigate to the final proposal page as an example of completing a step.
    navigate('/final-proposal'); // Path from App.tsx
  };

  const isFinalStep = currentStepData.currentStep === currentStepData.totalSteps;
  
  // A puzzle is only active if it exists in the data for this step.
  const isPuzzleActive = currentStepData.puzzle && currentStepData.puzzle.question;
  
  // The button should be enabled if there's no puzzle, or if the puzzle is solved.
  const isButtonEnabled = !isPuzzleActive || isPuzzleSolved;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 font-serif">
      <Header variant="recipient" />

      <main className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <TimelineStepIndicator
            currentStep={currentStepData.currentStep}
            totalSteps={currentStepData.totalSteps}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full my-8"
        >
          <MemoryCard
            mediaUrl={currentStepData.memory.mediaUrl}
            mediaType={currentStepData.memory.mediaType}
            title={currentStepData.memory.title}
            date={currentStepData.memory.date}
            story={currentStepData.memory.story}
            mediaAlt={currentStepData.memory.title}
          />
        </motion.div>
        
        {isPuzzleActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="w-full"
          >
            <PuzzleInput
              question={currentStepData.puzzle.question}
              correctAnswer={currentStepData.puzzle.correctAnswer}
              onCorrectAnswer={handleCorrectAnswer}
              className="mb-8"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: isPuzzleActive ? 0.6 : 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={handleProceed}
            disabled={!isButtonEnabled}
            className="shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed"
          >
            {isFinalStep ? currentStepData.finalButtonText : currentStepData.buttonText}
          </Button>
          {!isButtonEnabled && (
            <p className="text-sm text-gray-500 mt-3">Answer the question above to continue.</p>
          )}
        </motion.div>
      </main>

      <Footer variant="recipient" proposerName={currentStepData.proposerName} />
    </div>
  );
};

export default JourneyStepPage;