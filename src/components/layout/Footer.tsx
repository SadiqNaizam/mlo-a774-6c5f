import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface FooterProps {
  /**
   * Determines the content of the footer.
   * 'proposer': For the dashboard view with support links.
   * 'recipient': A minimal, personal message for the journey.
   */
  variant: 'proposer' | 'recipient';
  proposerName?: string;
}

const Footer: React.FC<FooterProps> = ({ variant, proposerName = 'your partner' }) => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex h-20 items-center justify-center">
        {variant === 'proposer' ? (
          <div className="flex w-full flex-col items-center justify-between gap-2 text-center text-sm text-muted-foreground sm:flex-row">
            <p>&copy; {currentYear} Heartfelt Moments. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <Link to="/support" className="hover:text-primary transition-colors">
                Support
              </Link>
              <Link to="/faq" className="hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-pink-500" aria-label="love" />
            <span>by {proposerName}</span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;