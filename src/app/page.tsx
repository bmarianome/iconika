import CTA from '~/components/CTA';
import Content from '~/components/Content';
import Footer from '~/components/Footer';
import Hero from '~/components/Hero';
import Stats from '~/components/Stats';
import Test from '~/components/Test';

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Content />
      <CTA />
      {/* <Test /> */}
      <Footer />
    </div>
  );
}

export default Home;





