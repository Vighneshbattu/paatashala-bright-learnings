
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { GraduationCap, LogIn } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login form submitted:', data);
    // Future authentication implementation would go here
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Log In" 
          subtitle="Access your Paatashala account to continue your learning journey." 
        />
        
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between max-w-4xl mx-auto">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="relative">
              <div className="w-full h-80 bg-paata-blue-light rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400" 
                  alt="Learning with Paatashala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-paata-blue" />
                  <span className="font-medium">Continue Your Learning</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-paata-blue hover:bg-blue-600" size="lg">
                  <LogIn className="mr-2 h-4 w-4" /> Log In
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center space-y-4">
              <p className="text-sm text-gray-600">
                Forgot your password? <Link to="#" className="text-paata-blue hover:underline">Reset it here</Link>
              </p>
              <p className="text-sm text-gray-600">
                Don't have an account? <Link to="/signup" className="text-paata-blue hover:underline">Sign up now</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
