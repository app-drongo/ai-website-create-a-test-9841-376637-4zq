'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  const handleBillingToggle = (annual: boolean) => {
    setIsAnnual(annual);
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Basic Testing',
      description: 'Essential tools for simple website testing',
      price: isAnnual ? '$8' : '$10',
      period: '/month',
      badge: null,
      features: [
        'Up to 5 test scenarios',
        'Basic performance monitoring',
        'Email notifications',
        'Standard reporting',
        'Community support',
      ],
      cta: 'Start Basic Plan',
      popular: false,
      handler: handleStarterPlan,
    },
    {
      name: 'Professional Testing',
      description: 'Advanced testing suite for growing websites',
      price: isAnnual ? '$24' : '$30',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited test scenarios',
        'Advanced performance analytics',
        'Real-time monitoring',
        'Custom test automation',
        'Priority support',
        'API integration',
        'Team collaboration',
        'Advanced reporting dashboard',
      ],
      cta: 'Start Professional Plan',
      popular: true,
      handler: handleProfessionalPlan,
    },
    {
      name: 'Enterprise Testing',
      description: 'Complete testing solution for large-scale websites',
      price: 'Custom',
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security testing',
        'SLA guarantees',
        'Dedicated account manager',
        'Custom training sessions',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      handler: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Testing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Flexible Testing
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect testing plan for your website needs. Transparent pricing, powerful
            features, and reliable support included.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => handleBillingToggle(false)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                !isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingToggle(true)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.handler}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional Testing' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No setup fees required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need custom testing solutions?</h3>
          <p className="text-muted-foreground mb-6">
            We provide tailored testing frameworks for complex websites with unique requirements.
            Let's discuss how our testing platform can optimize your site's performance.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            Schedule Testing Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
