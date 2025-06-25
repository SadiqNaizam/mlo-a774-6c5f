import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PuzzleInputProps {
  question: string;
  correctAnswer: string;
  onCorrectAnswer: () => void;
  className?: string;
}

const FormSchema = z.object({
  answer: z.string().min(1, {
    message: 'An answer is required.',
  }),
});

const PuzzleInput: React.FC<PuzzleInputProps> = ({
  question,
  correctAnswer,
  onCorrectAnswer,
  className,
}) => {
  console.log('PuzzleInput loaded');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const userAnswer = data.answer.trim().toLowerCase();
    const expectedAnswer = correctAnswer.trim().toLowerCase();

    if (userAnswer === expectedAnswer) {
      toast.success("That's right! A beautiful memory.", {
        duration: 2000,
      });
      onCorrectAnswer();
    } else {
      form.setError('answer', {
        type: 'manual',
        message: "Not quite, but maybe another memory will jog your mind. Try again!",
      });
      toast.error('That doesn\'t seem to be the right answer. Give it another try!');
    }
  }

  return (
    <Card className={cn('w-full max-w-md mx-auto shadow-lg', className)}>
      <CardHeader>
        <CardTitle className="text-center text-xl font-serif text-gray-700">A question for you...</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-center block pb-2">{question}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your answer here..."
                      {...field}
                      className="text-center text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Check my answer
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PuzzleInput;