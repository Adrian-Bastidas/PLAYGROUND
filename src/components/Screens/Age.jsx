import React, { useState } from 'react';

function Age() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({});

  const calculateAge = () => {
    // Obtener la fecha actual y la fecha de nacimiento
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    // Calcular la edad en años
    const ageInYears = currentDate.getFullYear() - birthYear;

    // Calcular la edad en meses
    let ageInMonths = currentDate.getMonth();
    if (currentDate.getDate() < birthDay) {
      ageInMonths -= 1;
    }
    ageInMonths += (ageInYears * 12);

    // Calcular la edad en días
    let ageInDays = currentDate.getDate();
    if (currentDate.getMonth() < birthMonth || (currentDate.getMonth() === birthMonth && currentDate.getDate() < birthDay)) {
      ageInDays += (ageInYears * 365);
    }

    setAge({
      years: ageInYears,
      months: ageInMonths,
        days: ageInDays,
    });
    }

    return (
      <div className='container-calendario'>
        <div className="tarjeta-calendario">
          <div className='calendario'>
            <input
              type="date"
              value={birthDate}
              onChange={e => setBirthDate(new Date(e.target.value))}
            />
          </div>
          <button onClick={calculateAge}>Calculate</button>
          <br />
          {birthDate && <p>Fecha de nacimiento: {birthDate.toLocaleDateString()}</p>}
        </div>
        <div className='cuadros'>
        <div className='cuadro'>
          <div> <div className='letras'>
            {age.years}
          </div></div>
          <p>
            Years
          </p>
        </div>
        <div className='cuadro'>
          <div className='letras'>
            {age.months}
          </div>
          <p>
            Months
          </p>
        </div>
        <div className='cuadro'>
          <div> <div className='letras'>
            {age.days}

          </div>
            <p>
              Days
            </p>
          </div>

        </div>
        </div>
      </div>
    );
}

export default Age