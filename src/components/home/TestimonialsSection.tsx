
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Anita Sharma",
    role: "Principal, Delhi Public School",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    quote: "Paatashala has transformed our approach to science education. The hands-on kits engage students in a way that textbooks never could. Our students now look forward to science class!",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Science Teacher, Green Valley School",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    quote: "As a teacher, I've seen a remarkable difference in concept retention when students use Paatashala kits. The practical approach makes complex topics accessible and fun.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Mehta",
    role: "Parent of 7th Grader",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=100",
    quote: "My son struggled with science until he started using Paatashala kits. Now he's not only understanding the concepts but actually enjoying the learning process.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="paata-section bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What People Say About Us"
          subtitle="Don't just take our word for it—hear from the schools, teachers, and parents who've experienced our learning solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="paata-card p-8 relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-paata-yellow fill-paata-yellow' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
              <div className="absolute -top-4 -left-4 text-6xl text-paata-blue opacity-20 font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
