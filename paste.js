import React from 'react';
// Udemy's code editor is a little weird... We do *not* need an 'import {useState}' line

function App() {
    const [text, setText] = useState('');
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    return (
        <div>
          <div>
            Enter some text
          </div>
          <input foo={text} onChange={handleChange}/>
          <h3>Your Text</h3>
          <p>
            {text}
          </p>
        </div>
    );
}

const useState = React.useState;
export default App;


// line 7 has to take (event) specifically