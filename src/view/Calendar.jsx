// src/pages/Calendar.jsx
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import BackButton from '../components/BackButton';

const joursSemaine = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

function genererCalendrier(mois, annee) {
  const premierJour = new Date(annee, mois, 1);
  const dernierJour = new Date(annee, mois + 1, 0);
  const nombreJours = dernierJour.getDate();

  const calendrier = Array.from({ length: 7 }, () => []); // 7 colonnes (jours)

  for (let jour = 1; jour <= nombreJours; jour++) {
    const date = new Date(annee, mois, jour);
    let indexJour = date.getDay(); // 0 = Dim, 1 = Lun, ..., 6 = Sam

    // Recaler pour que lundi soit 0
    indexJour = (indexJour + 6) % 7;

    calendrier[indexJour].push(jour);
  }

  const lignes = Math.max(...calendrier.map(col => col.length));
  return { calendrier, lignes };
}

const Calendar = () => {
  const mois = 7; // Août
  const annee = 2025;
  const { calendrier, lignes } = genererCalendrier(mois, annee);

  return (
    <div className="calendar-page" style={{ padding: '20px' }}>
      <BackButton to="/Home" label="Back" iconSize={18} />

      <div className="calendar-content" style={{ marginTop: '20px' }}>
        <center>
          <FaCalendarAlt size={80} color="#007BFF" />
          <h2>Calendar</h2>
        </center>
        <p style={{ textAlign: 'center' }}>
          Stay updated with all your events and important school dates.
        </p>

        <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Août 2025</h3>

        <div style={{ overflowX: 'auto', marginTop: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr>
                {joursSemaine.map((jour, i) => (
                  <th key={i} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f0f8ff' }}>
                    {jour}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(lignes)].map((_, ligneIdx) => (
                <tr key={ligneIdx}>
                  {calendrier.map((colonne, colIdx) => (
                    <td
                      key={colIdx + '-' + ligneIdx}
                      style={{
                        border: '1px solid #ddd',
                        padding: '12px',
                        height: '40px',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      {colonne[ligneIdx] || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
