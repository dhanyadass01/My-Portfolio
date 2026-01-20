
import React, { useState, useRef, useEffect } from 'react';
import { askResumeAssistant } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hi! I'm Dhanya's AI Assistant. Ask me anything about her skills, projects, or education!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askResumeAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-2xl"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'}`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-primary text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <i className="fas fa-microchip"></i>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Dhanya's AI Bot</h3>
              <p className="text-[10px] opacity-80">Powered by Gemini 3</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth bg-slate-50 dark:bg-slate-950"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me about her projects..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 ring-primary outline-none transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
