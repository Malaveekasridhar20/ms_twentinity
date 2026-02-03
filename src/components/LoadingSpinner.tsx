import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border animate-pulse">
      <div className="w-full h-64 bg-secondary shimmer"></div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-20 h-4 bg-secondary rounded shimmer"></div>
          <div className="w-16 h-4 bg-secondary rounded shimmer"></div>
        </div>
        <div className="w-3/4 h-6 bg-secondary rounded mb-3 shimmer"></div>
        <div className="space-y-2 mb-4">
          <div className="w-full h-3 bg-secondary rounded shimmer"></div>
          <div className="w-2/3 h-3 bg-secondary rounded shimmer"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-16 h-6 bg-secondary rounded shimmer"></div>
          <div className="w-20 h-6 bg-secondary rounded shimmer"></div>
          <div className="w-14 h-6 bg-secondary rounded shimmer"></div>
        </div>
      </div>
    </div>
  );
};