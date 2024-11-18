import { AnimatePresence } from 'framer-motion';
import { Brain, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QuizCard } from './components/QuizCard';
import { ProgressBar } from './components/ProgressBar';
import { Results } from './components/Results';
import { Loader } from './components/Loader';
import { useQuiz } from './hooks/useQuiz';
import { questions } from './data/questions';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentQuestion, state, answerQuestion, resetQuiz } = useQuiz();

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-8 h-8 text-indigo-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Civix Quiz</h1>
          </div>

          {!state.isComplete && (
            <>
              <ProgressBar
                current={state.currentQuestionIndex}
                total={questions.length}
              />
              <div className="mb-4 text-center text-gray-600">
                Question {state.currentQuestionIndex + 1} of {questions.length}
              </div>
            </>
          )}

          <AnimatePresence mode="wait">
            {!state.isComplete ? (
              <QuizCard
                key={currentQuestion.id}
                question={currentQuestion}
                onAnswer={answerQuestion}
              />
            ) : (
              <Results
                score={state.score}
                total={questions.length}
                onReset={resetQuiz}
              />
            )}
          </AnimatePresence>

          <div className="mt-20 text-center text-sm text-gray-600">
            <p className="flex items-center justify-center">
              Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> by{' '}
              <a
                href="https://princekouame.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Prince Kouamé
              </a>
            </p>
            <a
              href="https://princekouame.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 transition-colors text-xs"
            >
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;