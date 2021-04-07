import React from 'react';

function App() {
  
  React.useEffect(() => {
    const headers = headers = { 'Content-Type': 'application/json' };
    fetch('https://api.npms.io/v2/search?q=react', { headers })
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
