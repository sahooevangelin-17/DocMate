import React, { useState } from 'react';
import './AppointmentBooking.css';

const doctors = [
  { id: 1, name: "Dr. Meera Sharma", specialization: "Cardiologist", slots: ["10:00 AM", "12:30 PM", "3:00 PM"] },
  { id: 2, name: "Dr. Rahul Jain", specialization: "Dermatologist", slots: ["11:00 AM", "1:00 PM", "4:00 PM"] },
  { id: 3, name: "Dr. Priya Desai", specialization: "Pediatrician", slots: ["9:00 AM", "1:30 PM", "5:00 PM"] },
];

const specializations = [...new Set(doctors.map(doc => doc.specialization))];

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');

  const filteredDoctors = doctors.filter(doc => doc.specialization === selectedSpecialization);

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>

      <div className="form-group">
        <label>Select Date:</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Select Specialization:</label>
        <select value={selectedSpecialization} onChange={(e) => {
          setSelectedSpecialization(e.target.value);
          setSelectedDoctor(null);
          setSelectedSlot('');
        }}>
          <option value="">-- Choose --</option>
          {specializations.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>

      {selectedSpecialization && (
        <div className="form-group">
          <label>Select Doctor:</label>
          <select value={selectedDoctor?.id || ''} onChange={(e) => {
            const doc = doctors.find(d => d.id === parseInt(e.target.value));
            setSelectedDoctor(doc);
            setSelectedSlot('');
          }}>
            <option value="">-- Choose --</option>
            {filteredDoctors.map(doc => (
              <option key={doc.id} value={doc.id}>{doc.name}</option>
            ))}
          </select>
        </div>
      )}

      {selectedDoctor && (
        <div className="form-group">
          <label>Select Time Slot:</label>
          <div className="slot-options">
            {selectedDoctor.slots.map((slot, idx) => (
              <button
                key={idx}
                className={selectedSlot === slot ? "slot selected" : "slot"}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedSlot && (
        <div className="confirmation">
          <h4>✅ Appointment Summary</h4>
          <p><strong>Date:</strong> {selectedDate}</p>
          <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
          <p><strong>Specialization:</strong> {selectedSpecialization}</p>
          <p><strong>Time:</strong> {selectedSlot}</p>
          <button className="confirm-btn">Confirm Appointment</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
