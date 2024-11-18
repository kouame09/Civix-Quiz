import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, MessageCircle, Twitter, Facebook, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  total: number;
}

export function ShareModal({ isOpen, onClose, score, total }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const percentage = Math.round((score / total) * 100);
  
  const shareText = `🧠 Je viens de marquer ${percentage}% sur l'application Modern Quiz!\n\n🎯 ${score}/${total} questions correctes\n\nDéfie-toi et teste tes connaissances! 🚀`;
  const shareUrl = window.location.href;
  
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareText + '\n' + shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Partager les Résultats</h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <p className="text-indigo-800 whitespace-pre-line">{shareText}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-green-600 mb-1" />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Twitter className="w-6 h-6 text-blue-400 mb-1" />
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Facebook className="w-6 h-6 text-blue-600 mb-1" />
                  <span className="text-sm">Facebook</span>
                </a>
              </div>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Copié!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-5 h-5" />
                    <span>Copier le lien</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
