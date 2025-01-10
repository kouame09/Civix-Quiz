import { motion } from 'framer-motion';
import { Share2, RotateCcw, Trophy } from 'lucide-react';
import { useState } from 'react';
import { ShareModal } from './ShareModal';

interface ResultsProps {
  score: number;
  total: number;
  onReset: () => void;
}

export function Results({ score, total, onReset }: ResultsProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const percentage = Math.round((score / total) * 100);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center"
        >
          <Trophy className="w-12 h-12 text-indigo-600" />
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Terminé!</h2>
        
        <div className="mb-8">
          <div className="text-5xl font-bold text-indigo-600 mb-2">{percentage}%</div>
          <p className="text-gray-600">
            Vous avez trouvé {score} question(s) correcte(s) sur {total}  
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5 }}
            className="h-2 bg-indigo-100 rounded-full mt-4 mx-auto max-w-xs overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-full bg-indigo-600 rounded-full"
            />
          </motion.div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Partager
          </button>
          <button
            onClick={onReset}
            className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Recommencer
          </button>
        </div>
      </motion.div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        score={score}
        total={total}
      />
    </>
  );
}
