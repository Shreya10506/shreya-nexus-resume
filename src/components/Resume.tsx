import { Mail, Phone, MapPin, Github, Linkedin, Award, Code, Briefcase, GraduationCap, User, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Resume = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border border-resume-section-border">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-resume-header-bg text-primary-foreground p-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Shreya Dhamankar</h1>
                <p className="text-xl opacity-90 mb-6">IT Engineering Student | AI & Web Enthusiast</p>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>shreyadhamankar3@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 79720 43747</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Pune, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/shreyadhamankar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>github.com/shreyadhamankar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left Column */}
              <div className="lg:col-span-1 bg-accent p-8 space-y-8">
                {/* Skills */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-lg font-semibold text-resume-text-primary">Technical Skills</h2>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-resume-text-primary mb-1">Programming</h4>
                      <p className="text-sm text-resume-text-secondary">C, C++, Python, SQL</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-resume-text-primary mb-1">Web Development</h4>
                      <p className="text-sm text-resume-text-secondary">HTML/CSS, Frontend Design</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-resume-text-primary mb-1">Data Science</h4>
                      <p className="text-sm text-resume-text-secondary">Pandas, NumPy, Hugging Face</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-resume-text-primary mb-1">Tools</h4>
                      <p className="text-sm text-resume-text-secondary">GitHub, Version Control</p>
                    </div>
                  </div>
                </section>

                {/* Soft Skills */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-lg font-semibold text-resume-text-primary">Soft Skills</h2>
                  </div>
                  <div className="space-y-2">
                    {['Leadership', 'Teamwork', 'Problem Solving', 'Adaptability', 'Communication'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-resume-text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-lg font-semibold text-resume-text-primary">Languages</h2>
                  </div>
                  <div className="space-y-2">
                    {[
                      { lang: 'English', level: 'Fluent' },
                      { lang: 'Hindi', level: 'Native' },
                      { lang: 'Marathi', level: 'Native' },
                      { lang: 'German', level: 'Basic' }
                    ].map((language) => (
                      <div key={language.lang} className="flex justify-between">
                        <span className="text-sm text-resume-text-primary">{language.lang}</span>
                        <span className="text-xs text-resume-text-secondary">{language.level}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Extracurricular */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-lg font-semibold text-resume-text-primary">Interests</h2>
                  </div>
                  <div className="space-y-2">
                    {['Dance', 'Drawing', 'Poetry', 'Creative Writing'].map((interest) => (
                      <div key={interest} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm text-resume-text-secondary">{interest}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 p-8 space-y-8">
                {/* Career Objective */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-xl font-semibold text-resume-text-primary border-b-2 border-resume-section-border pb-1">Career Objective</h2>
                  </div>
                  <p className="text-resume-text-secondary leading-relaxed">
                    IT Engineering undergraduate with hands-on experience in AI, data analysis, and web development. 
                    Known for combining technical precision with creative problem-solving to deliver impactful digital solutions. 
                    Seeking opportunities to contribute innovative ideas and strong teamwork skills to high-impact projects.
                  </p>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-xl font-semibold text-resume-text-primary border-b-2 border-resume-section-border pb-1">Education</h2>
                  </div>
                  <div className="bg-resume-highlight p-4 rounded-lg">
                    <h3 className="font-semibold text-resume-text-primary">Bachelor of Technology in Information Technology</h3>
                    <p className="text-resume-text-secondary">Pune, India</p>
                    <p className="text-sm text-resume-text-secondary">2024 – 2028</p>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-xl font-semibold text-resume-text-primary border-b-2 border-resume-section-border pb-1">Key Projects</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-resume-text-primary">Sentiment Analysis AI</h3>
                      <ul className="text-sm text-resume-text-secondary mt-2 space-y-1 list-disc list-inside">
                        <li>Developed using Hugging Face Transformers for natural language processing</li>
                        <li>Deployed on GitHub with comprehensive documentation</li>
                        <li>Designed frontend interface using HTML/CSS</li>
                        <li>Collaborated in a team of 3 developers</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="font-semibold text-resume-text-primary">College Parking Optimization Model</h3>
                      <ul className="text-sm text-resume-text-secondary mt-2 space-y-1 list-disc list-inside">
                        <li>Designed sustainable solution for efficient parking space usage</li>
                        <li>Integrated EV charging points for sustainable transportation</li>
                        <li>Enhanced security measures for user safety</li>
                        <li>Optimized space utilization through data-driven approach</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-xl font-semibold text-resume-text-primary border-b-2 border-resume-section-border pb-1">Certifications</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-medium text-resume-text-primary">Python Essentials</h3>
                        <p className="text-sm text-resume-text-secondary">Cisco Networking Academy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-medium text-resume-text-primary">SQL Certification</h3>
                        <p className="text-sm text-resume-text-secondary">Database Management & Queries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-medium text-resume-text-primary">Cisco Cybersecurity Certification</h3>
                        <p className="text-sm text-resume-text-secondary">Network Security Fundamentals</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Achievements */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-resume-icon-color" />
                    <h2 className="text-xl font-semibold text-resume-text-primary border-b-2 border-resume-section-border pb-1">Achievements</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-medium text-resume-text-primary">Leadership Roles in Academic Projects</h3>
                        <p className="text-sm text-resume-text-secondary">Led teams in various academic projects, demonstrating strong coordination and project management skills</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-medium text-resume-text-primary">Dance Competition Awards</h3>
                        <p className="text-sm text-resume-text-secondary">Recognition for artistic excellence and performance skills in various cultural competitions</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;