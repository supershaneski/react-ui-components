import React from 'react'

//import useElementWidth from './hooks/useElementWidth';

import Marquee from './components/Marquee';
import ChristmasText from './components/ChristmasText';

function App() {

  return (
    <div style={styles.container}>
      <div style={styles.contents}>
        <div style={styles.panel}>
          <Marquee>
            <ChristmasText>MERRY CHRISTMAS & HAPPY NEW YEAR 2023!</ChristmasText>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#333',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    backgroundImage: 'linear-gradient(to bottom, transparent, #FFD700)',
    position: 'relative',
    width: '80%',
    maxWidth: '500px',
    height: '2em',
    display: 'flex',
    alignItems: 'center',
  },
  panel: {
    //backgroundColor: 'olive',
    position: 'relative',
    width: '100%',
    height: '2em',
    overflow: 'hidden',
    fontSize: '2em',
    textShadow: '2px 2px 3px #3339',
  }
}

export default App;
