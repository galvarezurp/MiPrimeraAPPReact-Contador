import { useState } from "react"
import "./Counter.css"

export const Counter = () => {

    const [count, setCount] = useState<number>(0);
    
    const increaseBy = (value: number) => {
        setCount(count + value);
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <div className="counter-card">
                <div className="counter-header">
                    <h2 className="counter-title">Contador Moderno</h2>
                    <div className="counter-display">
                        <span className="counter-number">{count}</span>
                    </div>
                </div>
                
                <div className="counter-controls">
                    <button 
                        className="counter-btn counter-btn-decrease"
                        onClick={() => increaseBy(-1)}
                        disabled={count <= 0}
                    >
                        <span className="btn-icon">−</span>
                    </button>
                    
                    <button 
                        className="counter-btn counter-btn-reset"
                        onClick={resetCounter}
                    >
                        <span className="btn-icon">↺</span>
                    </button>
                    
                    <button 
                        className="counter-btn counter-btn-increase"
                        onClick={() => increaseBy(+1)}
                    >
                        <span className="btn-icon">+</span>
                    </button>
                </div>
                
                <div className="counter-info">
                    <p className="counter-status">
                        {count === 0 ? 'Inicia el conteo' : 
                         count > 0 ? 'Contando hacia arriba' : 'Contando hacia abajo'}
                    </p>
                </div>
            </div>
        </div>
    )
}

