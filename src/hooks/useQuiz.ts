import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { QuizState, QuizResults } from '../types/quiz';

const STORAGE_KEY = 'quiz-state';
const RESULTS_KEY = 'quiz-results';

export function useQuiz() {
  const [state, setState] = useState<QuizState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const currentQuestion = questions[state.currentQuestionIndex];

  const answerQuestion = (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newAnswers = [...state.answers, answerIndex];
    const newScore = isCorrect ? state.score + 1 : state.score;
    const isComplete = state.currentQuestionIndex === questions.length - 1;

    if (isComplete) {
      const results: QuizResults = {
        score: newScore,
        totalQuestions: questions.length,
        timestamp: Date.now()
      };
      const savedResults = JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]');
      localStorage.setItem(RESULTS_KEY, JSON.stringify([...savedResults, results]));
    }

    setState({
      ...state,
      score: newScore,
      answers: newAnswers,
      currentQuestionIndex: isComplete ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
      isComplete
    });

    return isCorrect;
  };

  const resetQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false
    });
  };

  const shareResults = async () => {
    const text = `I scored ${state.score} out of ${questions.length} on the Modern Quiz App!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Quiz Results',
          text: text,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  return {
    currentQuestion,
    state,
    answerQuestion,
    resetQuiz,
    shareResults
  };
}