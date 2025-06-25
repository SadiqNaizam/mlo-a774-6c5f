import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LockKeyhole } from 'lucide-react';
import { motion } from 'framer-motion';

const JourneyLockedPage = () => {
  console.log('JourneyLockedPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-100 font-serif text-slate-700">
      {/* The header variant is 'recipient', so it will render null for an immersive experience */}
      <Header variant="recipient" />

      <main className="flex-grow flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm border-rose-100 shadow-2xl shadow-rose-200/50 rounded-xl text-center">
            <CardHeader className="items-center pt-8 pb-4">
              <LockKeyhole className="h-12 w-12 text-pink-300 mb-4" />
              <CardTitle className="text-3xl font-serif text-slate-800">
                Not Just Yet...
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-8 px-6">
              <p className="text-lg leading-relaxed text-slate-600">
                Our story continues, but this chapter is still waiting to be revealed.
              </p>
              <div className="mt-6 text-sm text-pink-800/80 bg-pink-100/50 rounded-lg p-3">
                <p className="font-sans font-semibold">The next memory unlocks in:</p>
                <p className="text-2xl font-sans font-bold tracking-wider mt-1">1d 4h 12m</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* The footer provides a personal touch from the proposer */}
      <Footer variant="recipient" proposerName="Your Partner" />
    </div>
  );
};

export default JourneyLockedPage;