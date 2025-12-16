import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 p-4"
    >
      <div className="p-2 rounded-xl gradient-primary shadow-glow">
        <Music2 size={24} className="text-primary-foreground" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-gradient">VibePlay</h1>
        <p className="text-xs text-muted-foreground">AI-Powered Music</p>
      </div>
    </motion.header>
  );
};
