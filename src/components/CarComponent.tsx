import React, { useState } from 'react';

interface CarProps {
    name: string;
    color: string;
}

const Car: React.FC<CarProps> = ({ name, color }) => {
    const [carName, setCarName] = useState(name);

    return (
        <div>
            <h2>Hi, I am Khusboo</h2>
            <input
                type="text"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                placeholder="Enter car name"
            />
            <p>My car name is {carName}</p>
            <p>Color: {color}</p>
        </div>
    );
};

export default Car;
