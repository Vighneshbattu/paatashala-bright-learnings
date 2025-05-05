
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300",
      bio: "Former educator with 15+ years experience and a passion for hands-on learning."
    },
    {
      name: "Priya Patel",
      role: "Head of Curriculum Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
      bio: "PhD in Education with expertise in developing practical learning materials."
    },
    {
      name: "Amit Singh",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: "Engineer turned educator who believes in the power of technology in learning."
    },
    {
      name: "Neha Gupta",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=300",
      bio: "Ensures our kits and tutors reach schools efficiently and on schedule."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-paata-blue-light via-white to-paata-purple-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-700">
              Founded by educators passionate about reimagining learning, Paatashala was born from a simple observation: students learn best by doing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="paata-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Paatashala, we're on a mission to transform education by making hands-on learning accessible to every student, regardless of their school's resources or location.
              </p>
              <p className="text-lg text-gray-700">
                We believe that practical, experiential learning is the key to unlocking curiosity, critical thinking, and a lifelong love of learning. Through our carefully designed kits and expert support, we bring the joy of discovery into classrooms everywhere.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" 
                alt="Students engaged in hands-on learning" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="paata-section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Values" 
            subtitle="The principles that guide everything we do at Paatashala"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-white to-paata-blue-light border-none shadow-md">
              <div className="bg-paata-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Experiential Learning</h3>
              <p className="text-gray-600 text-center">
                We believe in learning by doing. Our kits transform abstract concepts into tangible experiences.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-paata-green-light border-none shadow-md">
              <div className="bg-paata-green w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Inclusive Education</h3>
              <p className="text-gray-600 text-center">
                Quality education should be accessible to all students, regardless of their school's resources.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-paata-orange-light border-none shadow-md">
              <div className="bg-paata-orange w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Continuous Innovation</h3>
              <p className="text-gray-600 text-center">
                We constantly evolve our kits and methods to reflect the latest educational research and technologies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="paata-section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The dedicated educators and professionals behind Paatashala"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative inline-block">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-paata-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
