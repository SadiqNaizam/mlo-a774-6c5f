import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Circle, CircleDot } from 'lucide-react';

interface TimelineStepIndicatorProps {
  /** The current active step, starting from 1. */
  currentStep: number;
  /** The total number of steps in the journey. */
  totalSteps: number;
}

const TimelineStepIndicator: React.FC<TimelineStepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  console.log('TimelineStepIndicator loaded');

  // Create an array to map over for generating the steps visually
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-lg my-4">
      <div className="flex flex-col items-center space-y-3">
        {/* Textual indicator */}
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Day {currentStep} of {totalSteps}
        </p>

        {/* Visual indicator */}
        <div className="flex items-center justify-center w-full">
          {steps.map((step, index) => {
            const isCompleted = step < currentStep;
            const isCurrent = step === currentStep;
            const isFuture = step > currentStep;

            return (
              <React.Fragment key={step}>
                {/* Step Icon */}
                <div className="flex flex-col items-center relative">
                  {isCompleted && (
                    <CheckCircle
                      className="h-7 w-7 text-green-500"
                      aria-label={`Step ${step} completed`}
                    />
                  )}
                  {isCurrent && (
                    <CircleDot
                      className="h-8 w-8 text-primary animate-pulse"
                      aria-label={`Current step: ${step}`}
                    />
                  )}
                  {isFuture && (
                    <Circle
                      className="h-7 w-7 text-gray-300 dark:text-gray-600"
                      aria-label={`Future step: ${step}`}
                    />
                  )}
                </div>

                {/* Connector Line (not after the last step) */}
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-1 transition-colors duration-500',
                      isCompleted ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineStepIndicator;