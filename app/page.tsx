import Header from "./components/Header";
import Footer from "./components/Footer";
import Credentials from "./components/Credentials";

const paragraphStyle = {
  color: '#424242',
  lineHeight: '1.6'
};

export default function Home() {
  return (
    <div className="flex flex-col px-4 md:px-16 py-4 md:py-8" style={{ backgroundColor: '#eeeeee', height: '100dvh', maxHeight: '100dvh' }}>
      <Header />
      
      <main className="flex-1 flex flex-col p-2 md:p-4 py-1 md:py-1 overflow-y-auto">
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', flex: 1, paddingTop: '1rem' }}>
          <div>
            <p style={paragraphStyle}>
              I'm Tom, and I have a deep interest in how we construct and operate our built world with technology.
            </p>
            <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
              For the past ten years, I’ve worked with government agencies and businesses to solve some of their most mission critical problems with software. Often building from zero to one, but also scaling more mature products and teams.
            </p>
            <p style={{ ...paragraphStyle, marginTop: '1rem' }}>
              I have a formal background in structural engineering: studying in school for five years with a focus on architecture, followed by four years of professional practice. While practicing, I became increasingly interested in technology's role in shaping our physical environment, before shifting my focus entirely to what could be made possible with software. My initial development background is self-taught.
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