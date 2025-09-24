'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Deployment',
      description:
        'Deploy your test environments in seconds with our optimized infrastructure and automated workflows.',
      badge: 'Speed',
    },
    {
      icon: Shield,
      title: 'Secure Testing',
      description:
        'Enterprise-grade security protocols protect your test data with encrypted connections and isolated environments.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Testing',
      description:
        'Test across all devices and browsers with our comprehensive compatibility testing suite.',
      badge: 'Compatibility',
    },
    {
      icon: Globe,
      title: 'Global Test Network',
      description:
        'Run tests from multiple geographic locations to ensure worldwide performance optimization.',
      badge: 'Network',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Monitoring',
      description:
        'Track test performance with live metrics, detailed reports, and actionable insights dashboard.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'Custom Test Scenarios',
      description:
        'Build tailored testing workflows that match your specific requirements and use cases.',
      badge: 'Customization',
    },
    {
      icon: Code2,
      title: 'API Integration',
      description:
        'Seamlessly integrate with your existing tools through our comprehensive REST API and webhooks.',
      badge: 'Integration',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description:
        'Get help from our testing specialists available around the clock via chat, email, and phone.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description:
        'Your test data remains completely private with zero-knowledge architecture and GDPR compliance.',
      badge: 'Privacy',
    },
  ];

  const handleStartTesting = () => {
    console.log('Starting free testing trial');
    // Navigate to trial signup
  };

  const handleViewFeatures = () => {
    console.log('Viewing detailed features');
    // Navigate to features page
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Testing Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Testing Solution
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Developers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive testing tools designed to streamline your development workflow and ensure
            flawless user experiences across all platforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to revolutionize your testing workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTesting}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Testing Now
            </button>
            <button
              onClick={handleViewFeatures}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
