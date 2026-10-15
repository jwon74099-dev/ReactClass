import NavBar from '../Components/NavBar';
import Hero from '../Components/hero';
function Home() {
   const name = "john doe";
  return (
    <>
        <NavBar />
        <Hero Pagename = "Home Page" />
      <h1>Home Page</h1>
       <h3>Welcome, {name}!</h3>
    </>
  );
}

export default Home;