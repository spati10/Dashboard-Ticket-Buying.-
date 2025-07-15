// src/components/DashboardCard.js
import React from 'react';

const DashboardCard = ({ title, value, color }) => {
  return (
    <div className={`shadow-lg rounded-lg p-6 w-44 text-white ${color}`}>
      <h3 className="text-md mb-2">{title}</h3>
      <p className="text-4xl font-bold text-center">{value}</p>
    </div>
  );
};

export default DashboardCard;
