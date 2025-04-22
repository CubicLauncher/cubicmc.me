'use client';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
function Home() {
  return (
    <>
      <nav className='px-48 sm:px-12'>
        <Nav />
      </nav>
      <section>
        <Hero />
      </section> 
      <footer>
        <Footer />
      </footer>   
    </>
  );
}

export default Home;
