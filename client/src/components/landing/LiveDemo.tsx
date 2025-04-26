'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CodeSnippet {
  language: string;
  label: string;
  code: string;
  className: string;
}

const codeSnippets: CodeSnippet[] = [
  {
    language: 'javascript',
    label: 'JavaScript',
    className: 'language-js',
    code: `// Interactive Todo App
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render todos to the list
function renderTodos() {
  todoList.innerHTML = '';
  
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      toggleComplete(index);
    });
    
    const text = document.createElement('span');
    text.textContent = todo.text;
    text.className = todo.completed ? 'completed' : '';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodo(index);
    });
    
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
  
  saveTodos();
}

// Add a new todo
function addTodo(text) {
  const todo = {
    text,
    completed: false
  };
  
  todos.push(todo);
  renderTodos();
}`,
  },
  {
    language: 'python',
    label: 'Python',
    className: 'language-python',
    code: `# Simple Flask API with SQLite database
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'tasks.db')
db = SQLAlchemy(app)

# Task model
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(300))
    done = db.Column(db.Boolean, default=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'done': self.done
        }

# Create database tables
with app.app_context():
    db.create_all()

# Get all tasks
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

# Create a new task
@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    task = Task(
        title=data['title'],
        description=data.get('description', '')
    )
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201`,
  },
  {
    language: 'react',
    label: 'React',
    className: 'language-jsx',
    code: `import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Todo App</h1>
      
      <div className="add-todo">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >All</button>
        
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >Active</button>
        
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >Completed</button>
      </div>
    </div>
  );
}`,
  },
  {
    language: 'html',
    label: 'HTML/CSS',
    className: 'language-html',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Portfolio Website</title>
  <style>
    :root {
      --primary-color: #3b82f6;
      --secondary-color: #1e40af;
      --text-color: #f3f4f6;
      --dark-color: #111827;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--dark-color);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .header {
      background-color: rgba(17, 24, 39, 0.8);
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: fixed;
      width: 100%;
      z-index: 100;
      backdrop-filter: blur(8px);
    }
    
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-links a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav-links a:hover {
      color: var(--primary-color);
    }
    
    /* Responsive navigation */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">Portfolio</div>
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  </header>
</body>
</html>`,
  },
];

const PlayIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" id={id}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const FullscreenIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" id={id}>
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

const CopyIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" id={id}>
    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" id={id}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" id={id}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const LiveDemo: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<string>('javascript');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle language selection
  const selectLanguage = (language: string) => {
    setActiveLanguage(language);
    setIsDropdownOpen(false);
  };

  // Handle copy code
  const copyCode = () => {
    const code = codeSnippets.find((snippet) => snippet.language === activeLanguage)?.code || '';
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Handle modal open
  const openModal = () => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const closeButton = modalRef.current?.querySelector('#close-modal-btn');
      if (closeButton instanceof HTMLElement) {
        closeButton.focus();
      }
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  };

  // Handle fullscreen
  const requestFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !dropdownRef.current.previousElementSibling?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle ESC key and focus trapping in modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
      if (event.key === 'Tab' && isModalOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  if (!mounted) {
    return <div className="py-20 bg-neutral-900" />;
  }

  const activeCode = codeSnippets.find((snippet) => snippet.language === activeLanguage);

  return (
    <section id="live-demo" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4" id="el-5ce7q3gq">
        <div className="text-center mb-16" id="el-iw2mmpzc">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" id="el-4vlpl3vw">
            Demo
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto" id="el-i4ty39zd">
            See CodeCloud in action with our interactive demo and walkthrough video.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" id="el-ij58t8e0">
          {/* Demo video card */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-md mb-12" id="el-r1punwmx">
            <div className="bg-neutral-900 text-white p-4 flex justify-between items-center" id="el-1sra4bww">
              <div className="flex items-center" id="el-6nuxzjzh">
                <div className="flex space-x-2 mr-4" id="el-k2v05u9y">
                  <div className="w-3 h-3 rounded-full bg-red-500" id="el-cesjhgjg"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500" id="el-m1vzi9o6"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500" id="el-dg8jjlwe"></div>
                </div>
                <span className="text-sm font-mono" id="el-eg7w5cq8">
                  CodeCloud Demo - React App Development
                </span>
              </div>
              <button
                id="fullscreen-btn"
                className="text-neutral-400 hover:text-blue-400"
                aria-label="View fullscreen"
                onClick={requestFullscreen}
              >
                <FullscreenIcon className="h-5 w-5" id="el-elxa163q" />
              </button>
            </div>
            <div className="relative aspect-video" id="el-v5k01cl3">
              <div
                id="demo-video-placeholder"
                className="absolute inset-0 bg-neutral-950 flex items-center justify-center"
              >
                <div className="text-center" id="el-m70nimnz">
                  <button
                    id="play-demo-btn"
                    className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors"
                    onClick={openModal}
                  >
                    <PlayIcon className="h-8 w-8" id="el-k9ail8bd" />
                  </button>
                  <p className="text-neutral-300 text-sm" id="el-vd4s5xh3">
                    Click to play demo video
                  </p>
                </div>
              </div>
              <video
                id="demo-video"
                className="w-full h-full object-cover hidden"
                controls
                poster="https://placehold.co/1280x720/1a1a1a/blue?text=CodeCloud+Demo"
                ref={videoRef}
              >
                <source src="#" type="video/mp4" id="el-j1ous5wn" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Interactive code preview */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-md" id="el-ky47vh40">
            <div className="bg-neutral-900 text-white p-4 flex justify-between items-center" id="el-hr47atus">
              <div className="flex items-center" id="el-lieculkh">
                <div className="flex space-x-2 mr-4" id="el-6lb5fsno">
                  <div className="w-3 h-3 rounded-full bg-red-500" id="el-0s9ggalp"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500" id="el-33bwdthv"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500" id="el-xsi0yvjy"></div>
                </div>
                <span className="text-sm font-mono" id="el-tujn4s88">
                  Interactive Code Preview (Read-only)
                </span>
              </div>
              <div className="flex space-x-4" id="el-762sgggr">
                <div className="relative">
                  <button
                    id="change-language-btn"
                    className="text-sm bg-neutral-800 px-3 py-1 rounded hover:bg-neutral-700 border border-neutral-700"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                    aria-controls="language-dropdown"
                  >
                    {codeSnippets.find((snippet) => snippet.language === activeLanguage)?.label || 'JavaScript'}{' '}
                    <span id="el-rwsm5uzg">▼</span>
                  </button>
                  <div
                    id="language-dropdown"
                    className={`absolute right-0 mt-1 bg-neutral-800 rounded-md shadow-lg z-10 border border-neutral-700 ${
                      isDropdownOpen ? 'block' : 'hidden'
                    }`}
                    ref={dropdownRef}
                  >
                    <ul className="py-1" id="el-4jl7pbfg">
                      {codeSnippets.map((snippet) => (
                        <li key={snippet.language} id={`el-${snippet.language === 'javascript' ? 'd97hkbmz' : snippet.language === 'python' ? 's2hzh1we' : snippet.language === 'react' ? '3hp8tbtm' : 'e3i68zd8'}`}>
                          <button
                            className="language-option block px-4 py-2 text-sm text-white hover:bg-neutral-700 w-full text-left"
                            data-lang={snippet.language}
                            onClick={() => selectLanguage(snippet.language)}
                            id={`el-${snippet.language === 'javascript' ? 'e63l8xoh' : snippet.language === 'python' ? 'i7ajvxvm' : snippet.language === 'react' ? 'foexk48l' : '7sqrm8po'}`}
                          >
                            {snippet.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  id="copy-code-btn"
                  className="text-neutral-400 hover:text-blue-400"
                  aria-label="Copy code"
                  onClick={copyCode}
                >
                  {isCopied ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    <CopyIcon className="h-5 w-5" id="el-txnl9iyu" />
                  )}
                </button>
              </div>
            </div>

            {/* Code preview pane */}
            <div className="code-preview h-96 overflow-auto bg-neutral-950 p-6" id="el-ukblvp11">
              <pre
                id={`${activeLanguage}-code`}
                className={`${activeCode?.className} text-sm font-mono text-neutral-300 leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: activeCode?.code || '' }}
              />
            </div>

            <div className="p-4 bg-neutral-800 border-t border-neutral-700 flex justify-between items-center" id="el-olfu3jq3">
              <div className="text-sm text-neutral-400" id="el-hjph2xo2">
                Try editing this code on CodeCloud
              </div>
              <a
                href="#features"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                id="el-5yoied7u"
                target="_self"
              >
                Open in CodeCloud
              </a>
            </div>
          </div>

          {/* Demo features note */}
          <div className="mt-8 p-4 bg-blue-900 border border-blue-800 rounded-lg" id="el-ol97eb5z">
            <h3 className="text-lg font-medium text-blue-200 mb-2" id="el-s4mo1s50">
              Want to try it yourself?
            </h3>
            <p className="text-neutral-300 mb-4" id="el-yo535mn7">
              This is just a preview of what CodeCloud offers. Sign up for free to access all features including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2" id="el-s9t1jtb4">
              {[
                { text: 'Full editor capabilities', id: 'wa8hfyhb', svgId: '9eh2udkw' },
                { text: 'Live collaboration', id: 'ls1lwcrr', svgId: 'vgo87afm' },
                { text: 'One-click deployment', id: 'ztn8ihwv', svgId: 'kft7bqm0' },
                { text: 'Version control integration', id: 'gc10prp0', svgId: '59qsge3u' },
              ].map((item) => (
                <li key={item.id} className="flex items-center" id={`el-${item.id}`}>
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" id={`el-${item.svgId}`} />
                  <span className="text-neutral-200" id={`el-${item.id === 'wa8hfyhb' ? 'y8b5yz9f' : item.id === 'ls1lwcrr' ? 'pnkjmwhe' : item.id === 'ztn8ihwv' ? 'tabojhbp' : 'd1vqizlz'}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div
        id="video-modal"
        className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen ? 'block' : 'hidden'}`}
        aria-modal={isModalOpen}
        aria-hidden={!isModalOpen}
        ref={modalRef}
      >
        <div
          id="modal-backdrop"
          className="absolute inset-0 bg-black bg-opacity-80"
          onClick={closeModal}
        ></div>
        <div
          className="bg-neutral-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden relative z-10 border border-neutral-700"
          id="el-lckwt3hw"
        >
          <div className="flex justify-between items-center p-4 border-b border-neutral-700" id="el-twksadun">
            <h3 className="text-lg font-medium text-white" id="el-radanp59">
              CodeCloud Demo Video
            </h3>
            <button
              id="close-modal-btn"
              className="text-neutral-400 hover:text-neutral-200"
              aria-label="Close modal"
              onClick={closeModal}
            >
              <CloseIcon className="h-6 w-6" id="el-j7teyzx3" />
            </button>
          </div>
          <div className="aspect-video" id="el-4i8po7su">
            <div id="modal-video-container" className="w-full h-full bg-neutral-950">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://placehold.co/1280x720/1a1a1a/blue?text=CodeCloud+Demo"
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;