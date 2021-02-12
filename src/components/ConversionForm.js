import { useState } from 'react';

import romanNumerals from '../helpers/romanNumerals';
const MODES = {
    FROM_ROMAN: 'FROM_ROMAN',
    TO_ROMAN: 'TO_ROMAN',
}

const styles = {
    mainWrapper: `min-h-screen bg-gray-100 flex flex-col justify-center`,
    input: `px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600`,
    icon: `h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono`,
    button: `bg-blue-500 w-full text-white py-3 rounded-md focus:outline-none`,
}

const ConversionForm = () => {
    const [mode, setMode] = useState(MODES.TO_ROMAN);
    const [inputValue, setInputValue] = useState('2021');

    const isToRomanMode = mode === MODES.TO_ROMAN;

    const handleModeChange = () => {
        const nextMode = isToRomanMode ? MODES.FROM_ROMAN : MODES.TO_ROMAN;
        setInputValue(nextMode === MODES.FROM_ROMAN ? 'MMXXI' : '2021'); 
        setMode(nextMode);
    }

    const resultValue = isToRomanMode ? romanNumerals.toRoman(inputValue) : romanNumerals.fromRoman(inputValue);

    return (
        <div className={styles.mainWrapper}>
          <div className="sm:max-w-xl sm:mx-auto">
            <div className="px-4 py-10 bg-white md:mx-8 shadow rounded-3xl">

                <div className="flex items-center space-x-5">
                  <div className={styles.icon}>i</div>
                  <div className="pl-2 font-semibold text-xl text-gray-700">
                    <h2 className="leading-relaxed">Number Converter</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">
                      Please enter {isToRomanMode ? 'Arabic' : 'Roman'} number format
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  <div className="py-8 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div>
                      <label className="leading-loose">
                          {isToRomanMode ? 'Arabic' : 'Roman'}
                      </label>
                      <input 
                        aria-label="number-input" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        className={styles.input} 
                      />
                    </div>
                    <div>
                      <label className="leading-loose">
                          {isToRomanMode ? 'Roman' : 'Arabic'}
                      </label>
                      <input 
                        aria-label="result-input" 
                        disabled 
                        value={resultValue} 
                        className={styles.input} 
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                      <button 
                        aria-label="change-mode-button" 
                        onClick={handleModeChange} 
                        className={styles.button}
                      >
                          Change mode
                      </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default ConversionForm;