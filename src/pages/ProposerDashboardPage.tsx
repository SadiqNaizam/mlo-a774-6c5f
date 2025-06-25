import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Content Components
import MemoryCard from '@/components/MemoryCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Edit, Trash, PlusCircle } from 'lucide-react';

// Define the structure for a journey step
interface JourneyStep {
  id: number;
  title: string;
  date: string;
  story: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  // Future fields for puzzles can be added here
  // puzzleQuestion?: string;
  // puzzleAnswer?: string;
}

const ProposerDashboardPage = () => {
  console.log('ProposerDashboardPage loaded');
  const navigate = useNavigate();

  // State to manage the journey steps
  const [steps, setSteps] = useState<JourneyStep[]>([
    {
      id: 1,
      title: 'Our First Adventure',
      date: 'June 12, 2020',
      story: "Remember that time we went hiking and got beautifully lost? We stumbled upon that hidden waterfall and spent the whole afternoon just talking. It was the first time I knew this was something special. The way the light hit the water reminded me of the sparkle in your eyes.",
      mediaUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop',
      mediaType: 'image',
    },
    {
      id: 2,
      title: 'The Day We Built a Fort',
      date: 'November 25, 2021',
      story: "A rainy Saturday, a pile of blankets, and a string of fairy lights. We spent the entire day inside, watching old movies and eating popcorn. It wasn't about doing anything grand; it was about being perfectly content in our own little world. That day felt like home.",
      mediaUrl: 'https://images.unsplash.com/photo-1604017721249-02de0a8c2f17?q=80&w=2070&auto=format&fit=crop',
      mediaType: 'image',
    }
  ]);

  const handleLogout = () => {
    // Navigate to the Admin Login Page, which is at the root path
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header variant="proposer" onLogout={handleLogout} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Proposal Journey Builder</h1>
          <p className="text-muted-foreground">Craft each step of your unique story.</p>
        </div>

        <Tabs defaultValue="steps" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="steps">Journey Steps</TabsTrigger>
            <TabsTrigger value="settings">Settings & Schedule</TabsTrigger>
            <TabsTrigger value="preview">Live Preview</TabsTrigger>
          </TabsList>

          {/* Tab for Editing/Creating Steps */}
          <TabsContent value="steps">
            <Card>
              <CardHeader>
                <CardTitle>Manage Your Memories</CardTitle>
                <CardDescription>Add, edit, or remove the moments that define your story.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ScrollArea className="h-96 pr-4">
                  <div className="space-y-4">
                    {steps.map((step) => (
                      <Card key={step.id} className="flex items-center justify-between p-4">
                        <div>
                          <p className="font-semibold">{step.title}</p>
                          <p className="text-sm text-muted-foreground">{step.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                          <Button variant="destructive" size="icon"><Trash className="h-4 w-4" /></Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Add a New Step</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Memory Title</Label>
                        <Input id="title" placeholder="e.g., Our Trip to the Coast" />
                      </div>
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" placeholder="e.g., August 15, 2022" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="mediaUrl">Image/Video URL</Label>
                      <Input id="mediaUrl" placeholder="https://..." />
                    </div>
                    <div>
                      <Label htmlFor="story">Your Story</Label>
                      <Textarea id="story" placeholder="Tell the story of this memory..." rows={5} />
                    </div>
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add This Step to Journey
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab for General Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Journey Settings</CardTitle>
                <CardDescription>Configure the overall experience and timing.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="proposerName">Your Name (for the footer)</Label>
                  <Input id="proposerName" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="startDate">Journey Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab for Previewing the Journey */}
          <TabsContent value="preview">
             <Card>
              <CardHeader>
                <CardTitle>Recipient's View</CardTitle>
                <CardDescription>This is how each step will appear to your partner. Scroll to see all steps.</CardDescription>
              </CardHeader>
              <CardContent className="bg-gray-100 p-4 rounded-lg">
                <ScrollArea className="h-[70vh]">
                  <div className="space-y-12 max-w-3xl mx-auto py-8">
                  {steps.length > 0 ? (
                    steps.map((step) => (
                      <MemoryCard
                        key={`preview-${step.id}`}
                        title={step.title}
                        date={step.date}
                        story={step.story}
                        mediaUrl={step.mediaUrl}
                        mediaType={step.mediaType}
                        mediaAlt={`A memory about ${step.title}`}
                      />
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground">Add a step in the 'Journey Steps' tab to see a preview.</p>
                  )}
                  </div>
                </ScrollArea>
              </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer variant="proposer" />
    </div>
  );
};

export default ProposerDashboardPage;