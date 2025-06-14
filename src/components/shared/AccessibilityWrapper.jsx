import React from 'react';

const AccessibilityWrapper = ({ 
  children, 
  role, 
  ariaLabel, 
  ariaDescribedBy,
  tabIndex = 0,
  onKeyPress,
  className = ''
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onKeyPress?.(event);
    }
  };

  return (
    <div
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      tabIndex={tabIndex}
      onKeyPress={handleKeyPress}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </div>
  );
};

export default AccessibilityWrapper; 