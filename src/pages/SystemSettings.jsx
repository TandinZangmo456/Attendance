import React from 'react';

const SystemSettings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <h3>General Settings</h3>
        <p>
          Attendance Threshold (%): <input type="number" />
        </p>
        <p>
          Late Threshold (Minutes): <input type="number" />
        </p>
      </div>
      <div>
        <h3>Notification Preferences</h3>
        <p>
          <input type="checkbox" /> Enable Absence Alerts
        </p>
        <p>
          <input type="checkbox" /> Enable Late Attendance Alerts
        </p>
      </div>
      <div>
        <h3>Account Settings</h3>
        <p>Username: <input type="text" /></p>
        <p>Password: <input type="password" /></p>
      </div>
      <button>Save Settings</button>
    </div>
  );
};

export default SystemSettings;