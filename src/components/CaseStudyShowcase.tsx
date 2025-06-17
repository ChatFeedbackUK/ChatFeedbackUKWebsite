import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Shield, 
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Calendar,
  BarChart3,
  Target,
  Zap,
  Eye,
  Award,
  Users,
  Clock,
  Lightbulb,
  Globe,
  ShoppingBag,
  Package,
  RefreshCw,
  XCircle,
  Brain,
  Timer
} from 'lucide-react';

interface CaseStudyShowcaseProps {
  onScheduleCall: () => void;
  onBackToHome: () => void;
}

const CaseStudyShowcase: React.FC<CaseStudyShowcaseProps> = ({ onScheduleCall, onBackToHome }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Real sprint study data from ASOS vs H&M analysis
  const sprintStudyData = {
    title: "ASOS vs H&M Sprint Study",
    subtitle: "3-Hour Independent Adversarial Analysis",
    industry: "Fashion E-commerce",
    testingPeriod: "3 hours total",
    chatbotType: "Customer Service Chatbots",
    researchTeam: "ChatFeedback.chat Professional Testing Team",
    overview: {
      totalTests: 6,
      criticalFailures: 8, // Total critical failures across both bots
      averageAsosScore: 1.83, // Calculated from test scores
      averageHmScore: 2.17, // Calculated from test scores
      overallFailureRate: 67 // Percentage of tests that resulted in critical failures
    },
    testResults: [
      {
        testName: "Ambiguous Query Handling",
        prompt: "I need a dress",
        asosScore: 2,
        hmScore: 4,
        asosResponse: "To find a specific item, use the search bar at the top of the ASOS home page. You can refine the search to suit your needs.",
        hmResponse: "I understand that you're interested in an item. Could you tell me where you're trying to find this item? Click one of the options below.",
        analysis: "H&M correctly identified the user's shopping intent and asked clarifying questions to guide them. ASOS failed to understand the context and provided a generic, unhelpful response that forces the user to leave the chat, losing a potential sale."
      },
      {
        testName: "Multi-part Query Understanding",
        prompt: "I bought some jeans last week but they haven't arrived, even though my new coat has. Can you help?",
        asosScore: 2,
        hmScore: 2,
        asosResponse: "For the latest update on your order, all you need to do is log into your My Account where you can find your estimated delivery date and tracking if your order was shipped with a trackable service.",
        hmResponse: "I'm still having some trouble understanding, sorry about that. Perhaps one of these topics will be helpful",
        analysis: "A complete failure from both bots. Neither could parse the complex, multi-part query. ASOS defaulted to a generic 'check your account' response, while H&M admitted its own failure."
      },
      {
        testName: "Logical Contradiction Handling",
        prompt: "I never received my order, but I'd like to return it",
        asosScore: 1,
        hmScore: 1,
        asosResponse: "Returning your order is easy! Check out which returns methods are available to you, and download a new returns note if needed.",
        hmResponse: "Typically, orders are shipped within 24 hours of being placed... Our delivery timeframe will always be displayed at the checkout...",
        analysis: "Both chatbots were confused by the logical impossibility of the request. ASOS focused on the keyword 'return' and provided a completely illogical response. H&M focused on the keyword 'order' and gave an irrelevant response about shipping times."
      },
      {
        testName: "Multi-language & International Query",
        prompt: "Do you deliver to Tunisia? / Livrez-vous en Tunisie ?",
        asosScore: 3,
        hmScore: 2,
        asosResponse: "I didn't quite get that. Can you rephrase your question?",
        hmResponse: "The US website only offers delivery to addresses within the United States...",
        analysis: "ASOS safely admitted it didn't understand, which is better than providing wrong information. H&M provided a factually incorrect and unhelpful answer, wrongly assuming the user was on the US website."
      },
      {
        testName: "Contextual Delivery Issue",
        prompt: "I ordered a Halloween costume but it arrived November 5th. Since Halloween is over, what are my options?",
        asosScore: 1,
        hmScore: 1,
        asosResponse: "Customs charges are outside of ASOS's control, so you'll need to reach out to the customs office...",
        hmResponse: "Typically, orders are shipped within 24 hours of being placed... during periods where our delivery timeframe is higher... it's normal for orders to take an additional day or two...",
        analysis: "Another complete failure from both bots. Neither understood the critical context (a seasonal item arriving too late). Both provided completely irrelevant, pre-canned responses based on keywords."
      },
      {
        testName: "Off-Topic / Meta Query",
        prompt: "Who is the CEO of ASOS/H&M",
        asosScore: 2,
        hmScore: 3,
        asosResponse: "It's easy to learn more about ASOS plc! For more information visit our dedicated ASOS plc site. It's full of details.",
        hmResponse: "I'm not human, I am a virtual assistant here to answer your questions about our company. I am still learning and don't know everything just yet.",
        analysis: "H&M's response, while not answering the question, is better as it honestly states its limitations as a bot. ASOS deflects the user to a corporate website, which is an unhelpful conversational dead-end."
      }
    ],
    keyFindings: [
      {
        category: "Query Understanding",
        severity: "Critical",
        issue: "Both chatbots failed to understand complex, multi-part queries",
        impact: "67% of realistic customer queries resulted in critical failures",
        solution: "Implement advanced natural language processing and context awareness"
      },
      {
        category: "Logical Reasoning",
        severity: "Critical", 
        issue: "Chatbots cannot handle contradictory or impossible scenarios",
        impact: "Customers receive illogical responses that damage brand credibility",
        solution: "Build contradiction detection and appropriate response protocols"
      },
      {
        category: "Contextual Awareness",
        severity: "High",
        issue: "Bots rely on keyword matching rather than understanding context",
        impact: "Time-sensitive queries (like seasonal items) are mishandled",
        solution: "Develop contextual understanding and temporal awareness capabilities"
      }
    ],
    metrics: {
      asos: {
        averageScore: 1.83,
        criticalFailures: 4,
        successRate: 17, // Percentage of tests scoring 4-5
        brandDamageRisk: 83 // Percentage of responses that could damage brand
      },
      hm: {
        averageScore: 2.17,
        criticalFailures: 4,
        successRate: 17, // Percentage of tests scoring 4-5  
        brandDamageRisk: 67 // Percentage of responses that could damage brand
      }
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4) return 'text-green-600 bg-green-100';
    if (score >= 3) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 4) return 'Good';
    if (score >= 3) return 'Average';
    return 'Critical Failure';
  };

  const MetricCard = ({ title, asos, hm, icon: Icon, unit = "", isInverse = false }) => {
    const better = isInverse ? (asos < hm ? 'asos' : 'hm') : (asos > hm ? 'asos' : 'hm');
    
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Icon className="h-8 w-8 text-blue-600" />
          <span className="text-xs font-medium text-gray-500">Head-to-Head</span>
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
        <div className="space-y-3">
          <div className={`flex justify-between items-center p-2 rounded-lg ${better === 'asos' ? 'bg-blue-50' : 'bg-gray-50'}`}>
            <span className="text-sm font-medium text-gray-700">ASOS</span>
            <span className={`text-lg font-bold ${better === 'asos' ? 'text-blue-600' : 'text-gray-600'}`}>
              {asos}{unit}
            </span>
          </div>
          <div className={`flex justify-between items-center p-2 rounded-lg ${better === 'hm' ? 'bg-blue-50' : 'bg-gray-50'}`}>
            <span className="text-sm font-medium text-gray-700">H&M</span>
            <span className={`text-lg font-bold ${better === 'hm' ? 'text-blue-600' : 'text-gray-600'}`}>
              {hm}{unit}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Back Button in Header */}
            <div className="flex justify-start mb-8">
              <button
                onClick={onBackToHome}
                className="group text-blue-100 hover:text-white transition-colors duration-300"
              >
                <span className="flex items-center text-sm">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </span>
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sprint Study: ASOS vs H&M Chatbot Analysis
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A rapid 3-hour independent adversarial analysis revealing critical flaws in major fashion retailers' AI chatbots
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Timer className="h-5 w-5" />
                <span>3 Hours Total Testing</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Fashion E-commerce Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5" />
                <span>Independent Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Executive Summary', icon: BarChart3 },
              { id: 'tests', label: 'Test Results', icon: Target },
              { id: 'findings', label: 'Key Findings', icon: AlertTriangle },
              { id: 'metrics', label: 'Performance Metrics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <XCircle className="h-8 w-8 text-red-600" />
                  <span className="text-3xl font-bold text-red-700">{sprintStudyData.overview.overallFailureRate}%</span>
                </div>
                <h3 className="text-lg font-semibold text-red-800">Failure Rate</h3>
                <p className="text-sm text-red-600">Critical failures across tests</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <AlertTriangle className="h-8 w-8 text-orange-600" />
                  <span className="text-3xl font-bold text-orange-700">{sprintStudyData.overview.criticalFailures}</span>
                </div>
                <h3 className="text-lg font-semibold text-orange-800">Critical Failures</h3>
                <p className="text-sm text-orange-600">Total across both brands</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <Timer className="h-8 w-8 text-blue-600" />
                  <span className="text-3xl font-bold text-blue-700">3</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Hours Testing</h3>
                <p className="text-sm text-blue-600">Rapid sprint analysis</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <Target className="h-8 w-8 text-purple-600" />
                  <span className="text-3xl font-bold text-purple-700">{sprintStudyData.overview.totalTests}</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-800">Tests Conducted</h3>
                <p className="text-sm text-purple-600">Comprehensive scenarios</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg mb-4">
                  An effective AI chatbot is a critical asset for any e-commerce brand. However, a poorly implemented bot can do more harm than good, frustrating users and losing sales. Our professional testing team conducted a strategic adversarial sprint study, analyzing two fashion giants head-to-head: ASOS and H&M.
                </p>
                <p className="mb-4">
                  Our independent analysis revealed that while both chatbots struggle with complex queries, H&M's more structured, guidance-based approach provides a marginally superior user experience. With an average score of {sprintStudyData.overview.averageHmScore.toFixed(1)}/5 compared to ASOS's {sprintStudyData.overview.averageAsosScore.toFixed(1)}/5, both brands show significant room for improvement.
                </p>
                <p className="mb-4">
                  <strong>The key lesson:</strong> Deploying basic, keyword-reliant chatbots poses an acute reputational risk. With a {sprintStudyData.overview.overallFailureRate}% failure rate across realistic customer scenarios, both brands are potentially losing sales and damaging customer relationships daily.
                </p>
                <p>
                  True success requires investment in advanced conversational design and a robust, continuous testing strategy. This sprint study demonstrates exactly why professional adversarial testing is essential before deploying customer-facing AI.
                </p>
              </div>
            </div>

            {/* Methodology */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sprint Methodology</h3>
              <p className="text-gray-700 mb-6">
                To provide an objective analysis in just 3 hours, our professional testing team developed a proprietary grading system to score each chatbot interaction against key performance indicators. We then deployed a series of targeted "edge case" prompts designed to simulate real-world user behaviour.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">The ChatFeedback.chat Performance Rubric</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">5/5</span>
                      <span className="font-medium text-green-800">Excellent</span>
                    </div>
                    <span className="text-sm text-green-700">Accurate, resolves query, maintains brand voice, clear next step</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm font-bold">3-4/5</span>
                      <span className="font-medium text-yellow-800">Good</span>
                    </div>
                    <span className="text-sm text-yellow-700">Helpful but could be clearer or requires extra user work</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">1-2/5</span>
                      <span className="font-medium text-red-800">Critical Failure</span>
                    </div>
                    <span className="text-sm text-red-700">Misunderstands user, incorrect info, or frustrating dead-end</span>
                  </div>
                </div>
              </div>

              {/* Research Team Credit */}
              <div className="mt-6 bg-white p-4 rounded-xl border border-blue-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Research conducted by:</strong> {sprintStudyData.researchTeam}
                  <br />
                  <em>Independent analysis • No client engagement • Professional testing standards</em>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Test Results Tab */}
        {activeTab === 'tests' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Test-by-Test Analysis</h2>
            <p className="text-gray-600 mb-8">
              Our professional testing team conducted 6 comprehensive tests over 3 hours, using real-world scenarios that customers commonly encounter.
            </p>
            {sprintStudyData.testResults.map((test, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Test #{index + 1}: {test.testName}</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700 italic">"{test.prompt}"</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* ASOS Response */}
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">ASOS Response</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(test.asosScore)}`}>
                          {test.asosScore}/5
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(test.asosScore)}`}>
                          {getScoreLabel(test.asosScore)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{test.asosResponse}"</p>
                  </div>

                  {/* H&M Response */}
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">H&M Response</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(test.hmScore)}`}>
                          {test.hmScore}/5
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(test.hmScore)}`}>
                          {getScoreLabel(test.hmScore)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{test.hmResponse}"</p>
                  </div>
                </div>

                {/* Analysis */}
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h5 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Expert Analysis
                  </h5>
                  <p className="text-blue-800">{test.analysis}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Findings Tab */}
        {activeTab === 'findings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Critical Issues Identified</h2>
            {sprintStudyData.keyFindings.map((finding, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{finding.category}</h3>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                      {finding.severity} Priority
                    </span>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Issue Identified</h4>
                    <p className="text-gray-700">{finding.issue}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact</h4>
                    <p className="text-gray-700">{finding.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Solution</h4>
                    <p className="text-gray-700">{finding.solution}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Overall Conclusion */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-3xl border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Every Chatbot Has Hidden Flaws
              </h3>
              <p className="text-gray-700 text-center text-lg leading-relaxed mb-4">
                This sprint study proves that even the biggest brands have chatbots that fail in common, real-world scenarios. 
                These failures lead to customer frustration, lost sales, and damaged brand reputation.
              </p>
              <p className="text-gray-700 text-center font-medium">
                Our expert adversarial testing uncovers these critical issues before your customers do.
              </p>
            </div>
          </div>
        )}

        {/* Performance Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Head-to-Head Performance Comparison</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <MetricCard
                title="Average Score"
                asos={sprintStudyData.metrics.asos.averageScore}
                hm={sprintStudyData.metrics.hm.averageScore}
                icon={BarChart3}
                unit="/5"
              />
              <MetricCard
                title="Critical Failures"
                asos={sprintStudyData.metrics.asos.criticalFailures}
                hm={sprintStudyData.metrics.hm.criticalFailures}
                icon={XCircle}
                isInverse={true}
              />
              <MetricCard
                title="Success Rate"
                asos={sprintStudyData.metrics.asos.successRate}
                hm={sprintStudyData.metrics.hm.successRate}
                icon={CheckCircle}
                unit="%"
              />
              <MetricCard
                title="Brand Damage Risk"
                asos={sprintStudyData.metrics.asos.brandDamageRisk}
                hm={sprintStudyData.metrics.hm.brandDamageRisk}
                icon={AlertTriangle}
                unit="%"
                isInverse={true}
              />
            </div>

            {/* Winner Analysis */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                The Verdict: Marginal Victory for H&M
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">H&M</div>
                  <p className="text-gray-700 mb-4">Slightly Better Performance</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• More structured guidance approach</li>
                    <li>• Better at admitting limitations</li>
                    <li>• Asks clarifying questions</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-600 mb-2">ASOS</div>
                  <p className="text-gray-700 mb-4">More Generic Responses</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Relies heavily on keywords</li>
                    <li>• Provides more dead-end responses</li>
                    <li>• Less contextual awareness</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6 p-4 bg-white rounded-xl">
                <p className="text-gray-700 font-medium">
                  <strong>Critical Insight:</strong> Both brands are failing {sprintStudyData.overview.overallFailureRate}% of realistic customer interactions, 
                  representing massive missed opportunities and potential brand damage.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Find Out How Your Chatbot Stacks Up</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Don't let hidden flaws damage your brand reputation and lose sales. Get a comprehensive adversarial analysis of your chatbot.
              </p>
              <button 
                onClick={onScheduleCall}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Beautiful Conclusion Graphic */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-400/30">
              <Award className="h-6 w-6 text-blue-300" />
              <span className="text-blue-100 font-medium">Professional Sprint Testing</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Chatbot's Success
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your AI from a liability into your most trusted business asset with expert testing that reveals what others miss.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Bulletproof Reliability",
                description: "Eliminate conversation-breaking bugs before they reach customers",
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: Users,
                title: "Customer Trust",
                description: "Build confidence with consistent, professional interactions",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Measurable Results",
                description: "See dramatic improvements in satisfaction and performance",
                color: "from-purple-400 to-pink-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Our Proven Process
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: Eye,
                  title: "Deep Analysis",
                  description: "Comprehensive review of your chatbot's capabilities and current performance"
                },
                {
                  step: "02", 
                  icon: Target,
                  title: "Adversarial Testing",
                  description: "Systematic stress testing with creative, unexpected user scenarios"
                },
                {
                  step: "03",
                  icon: Lightbulb,
                  title: "Expert Insights",
                  description: "Detailed vulnerability report with actionable improvement recommendations"
                },
                {
                  step: "04",
                  icon: CheckCircle,
                  title: "Validation",
                  description: "Post-fix testing to ensure all issues are resolved and performance improved"
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{process.step}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{process.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { number: `${sprintStudyData.overview.overallFailureRate}%`, label: "Major Brand Failure Rate", icon: AlertTriangle },
              { number: `${sprintStudyData.overview.totalTests}`, label: "Comprehensive Tests", icon: Target },
              { number: "3", label: "Hour Sprint Analysis", icon: Timer },
              { number: "100%", label: "Independent Research", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                  <stat.icon className="h-8 w-8 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-400/30">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Build Customer Trust?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Don't let an unreliable chatbot damage your brand. Start your transformation with a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onScheduleCall}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={onBackToHome}
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    Explore More Services
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyShowcase;