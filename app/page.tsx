import Header from "./components/Header";
import Footer from "./components/Footer";
import Credentials from "./components/Credentials";

const paragraphStyle = {
  color: '#424242',
  lineHeight: '1.6'
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-4 md:px-16 py-4 md:py-8" style={{ backgroundColor: '#eeeeee', maxHeight: '100dvh' }}>
      <Header />
      
      <main className="flex-1 flex flex-col p-2 md:p-4 py-1 md:py-1 overflow-y-auto">
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div>
            <p style={paragraphStyle}>
              Hi, I'm Tom and I work with technology in our built environment.
            </p>
            <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
              I have a formal background in civil and structural engineering: studying in school for five years with a focus on architecture, followed by four years of professional practice. While practicing, I became increasingly interested in the role technology was playing in developing our physical environment, and began to spend more and more of my time trying to improve the tools we relied on to execute our work as design engineers.
            </p>
            <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
              After these years teaching myself what I could, learning how to build and ship software, I made a change and focused on this exclusively. Since then, I've worked in a breadth of spaces, helping the government [and some enterprise] solve some of their most mission critical problems with software. With these experiences, I've brought my focus back to how we can better construct and operate our built world with technology.
            </p>
            <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
              I live and work in New York City. Contact me at{' '}
              <a href="mailto:thomasshouler@gmail.com" style={{ color: '#424242', textDecoration: 'underline' }}>
                thomasshouler@gmail.com
              </a>.
            </p>
          </div>
          <Credentials />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}