import React from 'react';
import { BookOpen, MessageCircle, Sprout, Target, ArrowRight, GraduationCap } from 'lucide-react';

const lessons = [
  { icon: BookOpen, title: 'School Support', text: "Need some extra help? Let's work through difficult topics, strengthen the basics and turn those ‘I don't understand this’ moments into ‘I've got it!’" },
  { icon: MessageCircle, title: "Let's Talk English", text: 'Less worrying about perfect English. More actually speaking it. Build your vocabulary, pronunciation and confidence through conversation.' },
  { icon: Sprout, title: 'Improve Your English', text: 'Grammar, vocabulary, reading, writing, listening and speaking, combined into lessons designed around your level.' },
  { icon: Target, title: 'Your Goal, Your Lessons', text: "Have something specific in mind? Tell me what you'd like to achieve and we'll build the lessons around it." }
];

export default function App(){
 const scrollTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
 return <main>
  <nav><button className="brand" onClick={()=>scrollTo('home')}><GraduationCap/> Teacher Nicole</button><div className="navlinks"><button onClick={()=>scrollTo('about')}>About</button><button onClick={()=>scrollTo('lessons')}>Lessons</button><button className="pill solid" onClick={()=>scrollTo('contact')}>Let's talk</button></div></nav>
  <section id="home" className="hero"><div className="heroCopy"><span className="eyebrow">English lessons with a personal touch</span><h1>English doesn't have to feel like homework.</h1><p>Learn English with confidence in friendly, personalised lessons built around your level, your goals and your pace.</p><div className="actions"><button className="pill solid" onClick={()=>scrollTo('contact')}>Book a lesson <ArrowRight size={17}/></button><button className="pill outline" onClick={()=>scrollTo('lessons')}>Explore lessons</button></div></div><div className="photoWrap"><img src="/nicole.jpg" alt="Teacher Nicole outdoors in a flower field"/></div></section>
  <section id="about" className="about"><div className="narrow"><span className="sectionLabel">Meet Teacher Nicole</span><h2>A place to learn, practise and grow in confidence.</h2><p>Hi, I’m Nicole, and I help students become more confident using English, one lesson at a time.</p><p>My lessons are a place to learn, ask questions, practise, make mistakes and keep improving. We'll focus on the things that matter to <strong>you</strong>, with activities and explanations adapted to your level and goals.</p><p className="quote">Because the best English lesson isn't the one where you get everything right. It's the one where you leave wanting to speak a little more.</p></div></section>
  <section id="lessons" className="lessons"><span className="sectionLabel">Lessons</span><h2>How can I help?</h2><p className="lead">Choose a starting point. Every lesson can be adapted to suit your needs and learning goals.</p><div className="grid">{lessons.map(({icon:Icon,title,text})=><article className="card" key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section id="contact" className="contactWrap"><div className="contact"><h2>Ready to get started?</h2><p>Tell me a little about yourself, your English level and what you'd like to achieve. We'll find the right way to start.</p><a className="pill gold" href="mailto:hello@teachernicole.net">Let's talk <ArrowRight size={17}/></a><small>We'll replace this email with Nicole's real contact before launch.</small></div></section>
  <footer><span>© {new Date().getFullYear()} Teacher Nicole</span><span>English lessons with confidence, clarity and a little joy.</span></footer>
 </main>
}
