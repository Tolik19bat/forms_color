import "./HexToRgbConverter.css"
import { useState } from 'react';


function HexToRgbConverter() {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState('');
    const [error, setError] = useState(false);

    const hexToRgb = (hex) => {
        let r = 0;
        let g = 0;
        let b = 0;

        if (hex.length === 7) {
            r = parseInt(hex.substring(1, 3), 16);
            g = parseInt(hex.substring(3, 5), 16);
            b = parseInt(hex.substring(5, 7), 16);
        }

        return `rgb(${r}, ${g}, ${b})`;
    };

    const handleChange = (e) => {
        setHex(e.target.value);
        // console.log(e.target.value)
    
        if (e.target.value.length === 7) {
            if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                setRgb(hexToRgb(e.target.value));
                setError(false);
                document.body.style.backgroundColor = e.target.value;
            } else {
                setError(true);
                document.body.style.backgroundColor = '#921515d6';
            }
        }
    };

    return (
        <div className="container">
            <input className="input-style" type="text" maxLength="7" value={hex} onChange={handleChange} placeholder="Введите HEX цвет" />
            {error && <p>Ошибка!</p>}
            {!error && <p>&nbsp;{rgb}</p>}
        </div>
    );
}

export default HexToRgbConverter;
