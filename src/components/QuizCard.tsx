import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { Question } from '../types/quiz';

interface QuizCardProps {
  question: Question;
  onAnswer: (index: number) => boolean;
}

export function QuizCard({ question, onAnswer }: QuizCardProps) {
  const [answered, setAnswered] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (index: number) => {
    if (answered !== null) return;
    const correct = onAnswer(index);
    setAnswered(index);
    setIsCorrect(correct);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: answered === null ? 1.02 : 1 }}
            whileTap={{ scale: answered === null ? 0.98 : 1 }}
            onClick={() => handleAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              answered === null
                ? 'hover:bg-indigo-50 bg-gray-50'
                : answered === index
                ? isCorrect
                  ? 'bg-green-100'
                  : 'bg-red-100'
                : index === question.correctAnswer && answered !== null
                ? 'bg-green-100'
                : 'bg-gray-50'
            } ${answered !== null ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {answered === index && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-2"
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </motion.span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
      {answered !== null && question.explanation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 p-4 bg-blue-50 rounded-lg text-blue-800"
        >
          {question.explanation}
        </motion.div>
      )}
    </motion.div>
  );
}