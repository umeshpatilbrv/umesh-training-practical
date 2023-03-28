import { useState,useEffect } from 'react';
import './App.css';

import Checkbox from './components/Checkbox';

function App() {
  const [passwordGen, setPasswordGen] = useState({
    length: 8,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [handelText, setHandelText] = useState('');
  const [copied, setCopied] = useState(false);
  const [passwordHistory, setPasswordHistory] = useState<any>([]);

  const handleChangeUppercase = ():void => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };

  const handleChangeNumbers = () => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeSymbols = () => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  const setPasswordLength = (val : number) => {
    setPasswordGen({
      ...passwordGen,
      length: val,
    });
  };

  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols  } = passwordGen;

    const generateTheWord = (
      length:number,
      uppercase:boolean,
      lowercase:boolean,
      numbers:boolean,
      symbols:boolean
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array:any) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandelText(characters.join(''));
      setPasswordHistory([...passwordHistory, characters.join('')]);
      if (passwordHistory.length >= 5) {
        setPasswordHistory(passwordHistory.slice(1));
      }
      return characters;
    };
    

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }
  const [showPasswordHistory, setShowPasswordHistory] = useState<boolean>(false);

  function handlePasswordHistoryClick() {
    setShowPasswordHistory(show => !show);
  }


  useEffect(() => {
    const interval = setInterval(generatePassword, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [generatePassword])

  return (
    <>
    <div className="wrapper">
      <div className="container wrapper-box">
        <h2>Password-Generator</h2>
        <div className="password-box">
          <input
            type="text"
            value={handelText}
            placeholder=""
            autoComplete="off"
            onChange={(e) => setHandelText(e.target.value)}
          />
          <button
            className="copy-button"
            onClick={() => {
              if (handelText.length > 0) {
                navigator.clipboard.writeText(handelText);
                setCopied(true);
                setInterval(() => {
                  setCopied(false);
                }, 2000);
              }
            }}
          >
            {copied ? 'Copied!' : 'Copy text'}
          </button>
        </div>
        <br />
        <div className="box">
          <div>
            <label>Password length</label>
          </div>
          <div>
            <input
              type="number"
              min="4"
              max="20"
              value={passwordGen.length}
              onChange={(e:React.FormEvent<HTMLInputElement>) => setPasswordLength(e.target.value)}
            />
          </div>
        </div>
        <div className="box">
          <div>
            <label>Include uppercase letters</label>
          </div>
          <div>
            <Checkbox
              value={passwordGen.uppercase}
              onChange={handleChangeUppercase}
            />
          </div>
        </div>
        <div className="box">
          <div>
            <label>Include lowercase letters</label>
          </div>
          <div>
            <Checkbox
              value={passwordGen.lowercase}
              onChange={handleChangeLowercase}
            />
          </div>
        </div>
        <div className="box">
          <div>
            <label>Include numbers</label>
          </div>
          <div>
            <Checkbox
              value={passwordGen.numbers}
              onChange={handleChangeNumbers}
            />
          </div>
        </div>
        <div className="box">
          <div>
            <label>Include symbols</label>
          </div>
          <div>
            <Checkbox
              value={passwordGen.symbols}
              onChange={handleChangeSymbols}
            />
          </div>
        </div>
        <div>
          <button className="generate-button" onClick={generatePassword}>
            Generate password
          </button>
        </div>
        <div>
  <button className="History-button" onClick={handlePasswordHistoryClick}>
    Password-History
  </button>
</div>
{showPasswordHistory && (
  <div>
    <h3>Previous last 5-Passwords:</h3>
    <ul>
      {passwordHistory.map(password => <li key={password}>{password}</li>).slice(0, 5)}
    </ul>
  </div>
)}
      </div>
    </div>
    </>
  );
}

export default App;