import React from 'react'

import useElementWidth from './hooks/useElementWidth';

function App() {

  const panelRef = React.useRef()

  const width = useElementWidth(panelRef)

  return (
    <div style={styles.container}>
      <div style={styles.contents}>
        <div ref={panelRef} style={styles.panel}>
          <span>Panel: {width}</span>
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
    backgroundColor: 'darkgreen',
    position: 'relative',
    width: '50%',
  },
  panel: {
    backgroundColor: 'olive',
    position: 'relative',
    width: '100%',
  }
}

export default App;
