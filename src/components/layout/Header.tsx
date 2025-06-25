import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, LogOut } from 'lucide-react';

interface HeaderProps {
  /**
   * Determines the appearance and functionality of the header.
   * 'proposer': For the dashboard view with navigation and logout.
   * 'recipient': A minimal/hidden view for the immersive journey.
   */
  variant: 'proposer' | 'recipient';
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ variant, onLogout }) => {
  console.log('Header loaded');

  if (variant === 'recipient') {
    // The recipient's journey is meant to be immersive, so we render no header.
    return null;
  }

  // Render the header for the Proposer's dashboard view.
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/proposer-dashboard" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="font-bold text-lg tracking-tight">Heartfelt Moments</span>
        </Link>
        <Button variant="ghost" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;