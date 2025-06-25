import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Heart } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const AdminLoginPage = () => {
  console.log('AdminLoginPage loaded');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real application, you would authenticate the user here.
    // For this mock, we'll just log the values and navigate.
    console.log('Login attempt:', values);
    toast.success('Login successful! Redirecting...');
    // Redirect to the proposer dashboard on successful login
    setTimeout(() => {
        navigate('/proposer-dashboard');
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* The recipient variant of the header renders nothing, keeping the login page clean */}
      <Header variant="recipient" />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="flex items-center gap-2 mb-6">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold tracking-tight">Heartfelt Moments</span>
        </div>
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Proposer Login</CardTitle>
            <CardDescription>
              Access your dashboard to create your perfect proposal journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="proposer@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-2">
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>

      {/* The proposer variant of the footer shows generic links suitable for a login page */}
      <Footer variant="proposer" />
    </div>
  );
};

export default AdminLoginPage;