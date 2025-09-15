import React, { useState } from 'react';
import { ChevronRight, Upload, FileText, Users, MessageSquare, Code, Map, CheckCircle, Edit3, Eye, Download } from 'lucide-react';

const ResearchOSPrototype = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  
  const steps = [
    {
      id: 'brief',
      title: 'Project Brief',
      subtitle: 'Company Context',
      icon: FileText,
      description: 'Define your company, product, goals, and constraints',
      color: 'bg-blue-500'
    },
    {
      id: 'personas',
      title: 'Personas',
      subtitle: 'Target Users (Optional)',
      icon: Users,
      description: 'Define your target user personas',
      color: 'bg-purple-500'
    },
    {
      id: 'guide',
      title: 'Interview Guide',
      subtitle: 'Structured Questions',
      icon: MessageSquare,
      description: 'Generate persona-aware interview questions',
      color: 'bg-green-500'
    },
    {
      id: 'transcripts',
      title: 'Transcripts',
      subtitle: 'Upload & Process',
      icon: Upload,
      description: 'Upload interview transcripts for analysis',
      color: 'bg-orange-500'
    },
    {
      id: 'coding',
      title: 'Coding',
      subtitle: 'Extract Insights',
      icon: Code,
      description: 'AI-powered coding of themes and patterns',
      color: 'bg-red-500'
    },
    {
      id: 'mapping',
      title: 'Mapping',
      subtitle: 'JTBD & Insights',
      icon: Map,
      description: 'Map codes to jobs-to-be-done and insights',
      color: 'bg-indigo-500'
    }
  ];

  const StepCard = ({ step, index, isActive, isCompleted, onClick }) => {
    const Icon = step.icon;
    
    return (
      <div 
        className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
          isActive 
            ? 'border-blue-500 bg-blue-50 shadow-md' 
            : isCompleted 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
        onClick={() => onClick(index)}
      >
        {isCompleted && (
          <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-green-500" />
        )}
        
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg ${step.color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{step.subtitle}</p>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        </div>
        
        {index < steps.length - 1 && (
          <ChevronRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 bg-white rounded-full border-2 border-gray-200" />
        )}
      </div>
    );
  };

  const StepContent = ({ step }) => {
    const handleComplete = () => {
      setCompletedSteps(prev => new Set(prev).add(currentStep));
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handleEdit = () => {
      // Simulate micro-edit functionality
      alert('Micro-edit functionality - refine specific elements with AI assistance');
    };

    switch (step.id) {
      case 'brief':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Company Context</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product/Service</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="What do you offer?" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Research Goals</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows="3" placeholder="What do you want to learn from this research?"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Market/Industry</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., SaaS, E-commerce" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Level</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Standard</option>
                    <option>High - Redact PII</option>
                    <option>Enterprise - Full encryption</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex space-x-3">
                <button 
                  onClick={handleComplete}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue to Personas
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  AI Normalize
                </button>
              </div>
            </div>
          </div>
        );

      case 'personas':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">User Personas</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Optional for MVP</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Add Primary Persona</p>
                </div>
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Add Secondary Persona</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-3">
                <button 
                  onClick={handleComplete}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue to Interview Guide
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Skip for Now
                </button>
              </div>
            </div>
          </div>
        );

      case 'guide':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Interview Guide</h3>
                <button onClick={handleEdit} className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
                  <Edit3 className="w-4 h-4" />
                  <span className="text-sm">Micro-edit</span>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Opening & Context (5 min)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tell me about your role and daily responsibilities</li>
                    <li>• What tools do you currently use for [context from brief]?</li>
                    <li>• Walk me through a typical workflow</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Pain Points & Challenges (15 min)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• What's the most frustrating part of your current process?</li>
                    <li>• Tell me about a time when [specific scenario]</li>
                    <li>• What would need to change for this to work better?</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Solution Validation (10 min)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• How do you imagine solving [key problem]?</li>
                    <li>• What would success look like?</li>
                    <li>• Who else is involved in this decision?</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button 
                  onClick={handleComplete}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue to Transcripts
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Run Critic Pass
                </button>
              </div>
            </div>
          </div>
        );

      case 'transcripts':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Upload Interview Transcripts</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Transcripts</h4>
                <p className="text-gray-600 mb-4">Drag and drop your interview files or click to browse</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Choose Files
                </button>
                <p className="text-sm text-gray-500 mt-2">Supports .txt, .docx, .pdf, .mp3, .mp4</p>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Processing Options</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span className="text-sm">Redact PII before analysis</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span className="text-sm">Generate embeddings for retrieval</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-sm">Auto-detect speakers</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button 
                  onClick={handleComplete}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Process & Continue
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  API Integration
                </button>
              </div>
            </div>
          </div>
        );

      case 'coding':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">AI-Powered Coding</h3>
                <div className="flex space-x-2">
                  <button onClick={handleEdit} className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
                    <Edit3 className="w-4 h-4" />
                    <span className="text-sm">Refine Codes</span>
                  </button>
                  <button className="flex items-center space-x-1 text-green-500 hover:text-green-600">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">View Evidence</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Generated Codes</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium">Workflow Friction</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">23 mentions</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium">Tool Integration Issues</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">18 mentions</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium">Time-saving Desires</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">31 mentions</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <span className="text-sm font-medium">Collaboration Pain</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">15 mentions</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Emerging Themes</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-sm mb-1">Process Efficiency</h5>
                      <p className="text-xs text-gray-600">Users consistently struggle with manual, repetitive tasks</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-sm mb-1">Integration Gaps</h5>
                      <p className="text-xs text-gray-600">Existing tools don't talk to each other effectively</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-sm mb-1">Decision Support</h5>
                      <p className="text-xs text-gray-600">Need better data to make informed choices</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button 
                  onClick={handleComplete}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue to Mapping
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Second Pass Analysis
                </button>
              </div>
            </div>
          </div>
        );

      case 'mapping':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Insight Mapping</h3>
                <div className="flex space-x-2">
                  <button onClick={handleEdit} className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
                    <Edit3 className="w-4 h-4" />
                    <span className="text-sm">Remap</span>
                  </button>
                  <button className="flex items-center space-x-1 text-green-500 hover:text-green-600">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Export</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Jobs to Be Done</h4>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-sm text-blue-600 mb-2">Primary JTBD</h5>
                      <p className="text-sm font-medium mb-1">When I'm managing multiple research projects,</p>
                      <p className="text-sm mb-1">I want to quickly synthesize insights across interviews,</p>
                      <p className="text-sm text-gray-600">So I can make evidence-based decisions faster.</p>
                      <div className="mt-2 text-xs text-gray-500">
                        Evidence: 15 quotes across 8 interviews
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-sm text-purple-600 mb-2">Secondary JTBD</h5>
                      <p className="text-sm font-medium mb-1">When I'm presenting research findings,</p>
                      <p className="text-sm mb-1">I want to trace insights back to source material,</p>
                      <p className="text-sm text-gray-600">So I can build stakeholder confidence.</p>
                      <div className="mt-2 text-xs text-gray-500">
                        Evidence: 12 quotes across 6 interviews
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Key Insights</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h5 className="font-semibold text-sm text-red-700 mb-1">Critical Pain</h5>
                      <p className="text-sm text-gray-700">Manual coding takes 3-5x longer than expected, causing project delays</p>
                      <div className="mt-2 text-xs text-red-600">High confidence • 23 supporting quotes</div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h5 className="font-semibold text-sm text-green-700 mb-1">Opportunity</h5>
                      <p className="text-sm text-gray-700">Users value tools that maintain audit trails and evidence links</p>
                      <div className="mt-2 text-xs text-green-600">Medium confidence • 18 supporting quotes</div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h5 className="font-semibold text-sm text-blue-700 mb-1">Behavior</h5>
                      <p className="text-sm text-gray-700">Teams prefer iterative refinement over complete regeneration</p>
                      <div className="mt-2 text-xs text-blue-600">High confidence • 31 supporting quotes</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button 
                  onClick={handleComplete}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Complete Analysis
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Step content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Research OS</h1>
          <p className="text-gray-600">Turn interviews into structured strategy - fast, repeatable, and auditable</p>
        </div>

        {/* Progress Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isActive={currentStep === index}
              isCompleted={completedSteps.has(index)}
              onClick={setCurrentStep}
            />
          ))}
        </div>

        {/* Current Step Content */}
        <div className="mb-8">
          <StepContent step={steps[currentStep]} />
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Research OS MVP - Interactive Prototype</p>
          <p className="mt-1">Click any step above to navigate • All continue buttons work as expected in a clickable dummy</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchOSPrototype;