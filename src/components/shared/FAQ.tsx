import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const FAQPage = () => {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Is this a lead generation service?',
            answer: 'Yes, our platform includes lead generation capabilities as part of our comprehensive automation solution. We help identify and qualify potential customers for your business.',
        },
        {
            id: 'item-2',
            question: 'What happens during after-hours and weekends?',
            answer: 'Our AI system continues to operate 24/7, including after-hours and weekends. You maintain full visibility and control over all automated processes regardless of the time.',
        },
        {
            id: 'item-3',
            question: 'How quickly can we get started?',
            answer: 'Most implementations can be set up within hours to days, depending on your specific requirements and CRM complexity. Our support team will guide you through the entire setup process.',
        },
        {
            id: 'item-4',
            question: 'How do I connect with my CRM?',
            answer: 'We support integrations with all major CRM platforms. Our integration wizard provides step-by-step instructions, and our support team is available to assist with any technical setup.',
        },
        {
            id: 'item-5',
            question: 'How do I stop the AI from responding to a customer?',
            answer: 'You can pause or disable AI responses for specific customers or conversations at any time through your dashboard. Changes take effect immediately.',
        },
        {
            id: 'item-6',
            question: 'My CRM data isn\'t syncing properly. What should I do?',
            answer: 'Check your connection settings and API credentials first. If issues persist, our support team can diagnose the problem by reviewing your sync logs and configuration.',
        },
        {
            id: 'item-7',
            question: 'Emails aren\'t sending or I\'m seeing failed email notifications. Why?',
            answer: 'This typically indicates an email service connection issue, invalid email address, or spam filter blocking. We\'ll check your email settings in detail and verify the connection and delivery settings to resolve it.',
        },
        {
            id: 'item-8',
            question: 'What happens after my system is live? Do you provide support?',
            answer: 'Yes, we provide comprehensive ongoing support including monitoring, troubleshooting, optimization recommendations, and regular check-ins to ensure your system performs optimally.',
        },
        {
            id: 'item-9',
            question: 'Do you only use Claude/Anthropic API?',
            answer: 'We primarily use Claude/Anthropic API for our AI backbone, but we also support other LLM providers depending on your specific needs and preferences.',
        },
        {
            id: 'item-10',
            question: 'What about custom AI apps or agents that aren\'t part of your packages?',
            answer: 'We build custom AI-powered apps and specialized agents beyond our standard packages. These are designed to handle complex multi-agent workflows or integrate into your existing software. Book a call with our team to discuss your needs.',
        },
        {
            id: 'item-11',
            question: 'Can the AI actually book appointments in my CRM?',
            answer: 'Yes, our AI can directly create and book appointments in your CRM system. This is fully integrated and updated in real-time.',
        },
        {
            id: 'item-12',
            question: 'Will automation replace my team members?',
            answer: 'No, our automation is designed to augment your team by handling repetitive tasks. This frees up your team members to focus on higher-value activities like relationship building and strategy.',
        },
        {
            id: 'item-13',
            question: 'What about data security and compliance?',
            answer: 'We maintain enterprise-grade security with encryption, compliance with GDPR/CCPA, regular security audits, and adherence to industry standards. Your data is protected and secure.',
        },
        {
            id: 'item-14',
            question: 'What\'s included in the setup process?',
            answer: 'Setup includes CRM integration, AI configuration, workflow customization, team training, testing, and go-live support. We handle the technical aspects so you can focus on your business.',
        },
        {
            id: 'item-15',
            question: 'Why is the AI asking for information that\'s already in my CRM?',
            answer: 'This can occur if the AI doesn\'t have access to that specific CRM field or if there\'s a syncing delay. Our team can adjust field permissions and ensure proper data synchronization.',
        },
        {
            id: 'item-16',
            question: 'Why did the bot start responding again after I moved a lead to "Done"?',
            answer: 'This typically happens if the lead status wasn\'t properly configured in our automation rules. We\'ll review your workflow settings and update the rules to respect your lead status.',
        },
        {
            id: 'item-17',
            question: 'How much does an AI system actually cost?',
            answer: 'Pricing varies based on your usage, feature set, and customization needs. We offer flexible pricing models. Contact our sales team for a detailed quote tailored to your requirements.',
        },
        {
            id: 'item-18',
            question: 'How long does it take to get my AI system up and running?',
            answer: 'Most systems are operational within 1-2 weeks from project start. This includes setup, configuration, testing, and training. Complex integrations may take longer.',
        },
        {
            id: 'item-19',
            question: 'Do I need to be technical to use this?',
            answer: 'No, our platform is designed for non-technical users. We provide an intuitive interface and comprehensive support. However, technical users can leverage advanced customization options.',
        },
        {
            id: 'item-20',
            question: 'What if my business is unique? Can your AI handle my specific situation?',
            answer: 'Absolutely. Our AI is highly customizable and can be tailored to unique business models, industries, and workflows. We specialize in adapting solutions to specific business needs.',
        },
        {
            id: 'item-21',
            question: 'How much will the AI API costs actually be each month?',
            answer: 'API costs depend on your usage volume and the specific AI models used. Most businesses see costs between $200-2000/month based on their automation scope. We\'ll provide transparent cost breakdowns.',
        },
        {
            id: 'item-22',
            question: 'What kind of ROI can I expect?',
            answer: 'Most clients see significant returns through increased lead conversion, reduced response times, and operational efficiency. Typical ROI ranges from 2-5x within the first year, though this varies by use case.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-12">
            <div className="w-10/12 mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Get answers to the most common questions about our automation platform,
                        <br />
                        implementation, and ongoing support.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                        <Accordion type="single" collapsible defaultValue="">
                            {faqItems.slice(0, 11).map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="mb-4">
                                    <AccordionTrigger className="text-left hover:text-green-400 transition-colors py-4">
                                        <span className="text-base font-medium">{item.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300 pb-4">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Right Column */}
                    <div>
                        <Accordion type="single" collapsible defaultValue="">
                            {faqItems.slice(11).map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="mb-4">
                                    <AccordionTrigger className="text-left hover:text-green-400 transition-colors py-4">
                                        <span className="text-base font-medium">{item.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-300 pb-4">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;