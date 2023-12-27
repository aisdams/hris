import React, { useState } from 'react';

interface ColorPickerProps {
  onChange: (newColors: Record<string, string>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const [colors, setColors] = useState<Record<string, string>>({
    '--background': '0 0% 100%',
    '--foreground': '240 10% 3.9%',
  });

  const handleColorChange = (variable: string, newValue: string) => {
    setColors((prevColors) => ({
      ...prevColors,
      [variable]: newValue,
    }));

    onChange(colors);
  };

  return (
    <div>
      <input
        type="color"
        value={colors['--background']}
        onChange={(e) => handleColorChange('--background', e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
