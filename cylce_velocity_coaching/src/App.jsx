
import styles from './style';
import { About, Contact, Button, Business, cardDeal, Clients, CTA, Feedback, Footer, Fundamentals, getStarted, Hero, Navbar, Status, 
Testamonials} from './components';

const App = () => (

    <div className="bg-primary w-full overflow-hidden">
    
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

        < Navbar />

        </div>       
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

        <Hero/>

        </div>       
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Status/>
        <Business/>
        <Fundamentals/>

        <About/>
        <Contact/>
 
        <cardDeal/>
        <Clients/>
        <CTA/>
        <Footer/>
  
        <getStarted/>
      
        </div>       
      </div>
    </div>
  );


export default App
