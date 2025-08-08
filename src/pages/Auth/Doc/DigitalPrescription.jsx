import React, { useState } from 'react';
import './DigitalPrescription.css';

const DigitalPrescription = () => {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [medicines, setMedicines] = useState(['']);
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');

  const allPatients = ['Aniket', 'Evangelin', 'Priya', 'Ravi']; // dummy list
  const allMedicines = ['Paracetamol', 'Amoxicillin', 'Ibuprofen', 'Cetirizine', 'Metformin'];

  const handleMedicineChange = (index, value) => {
    const updated = [...medicines];
    updated[index] = value;
    setMedicines(updated);
  };

  const addMedicineField = () => {
    setMedicines([...medicines, '']);
  };

  const handleSend = () => {
    if (!selectedPatient || medicines.some(m => m === '')) {
      setMessage('Please fill all fields');
      return;
    }
    setMessage(`Prescription sent to ${selectedPatient}`);
    setSelectedPatient('');
    setMedicines(['']);
    setNotes('');
  };

  return (
    <div className="prescription-container">
      <h2>Digital Prescription</h2>
      <label>Select Patient</label>
      <select value={selectedPatient} onChange={e => setSelectedPatient(e.target.value)}>
        <option value="">-- Select Patient --</option>
        {allPatients.map((patient, idx) => (
          <option key={idx} value={patient}>{patient}</option>
        ))}
      </select>

      {medicines.map((med, index) => (
        <div key={index}>
          <label>Medicine {index + 1}</label>
          <select value={med} onChange={e => handleMedicineChange(index, e.target.value)}>
            <option value="">-- Select Medicine --</option>
            {allMedicines.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>
      ))}

      <button className="add-btn" onClick={addMedicineField}>+ Add Medicine</button>

      <label>Additional Notes</label>
      <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Optional notes" />

      <button className="send-btn" onClick={handleSend}>Send Prescription</button>

      {message && <p className="success-msg">{message}</p>}
    </div>
  );
};

export default DigitalPrescription;
