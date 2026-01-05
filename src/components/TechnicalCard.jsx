import React from 'react';
import { Cpu, Zap, Activity, Radio, Gauge, Box, CircuitBoard } from 'lucide-react';

const getIconForType = (type, category) => {
    // Map component types to icons
    if (type.includes('Microcontroller') || type.includes('MCU') || type.includes('Development') || category === 'Microcontrollers') {
        return Cpu;
    }
    if (type.includes('Sensor') || type.includes('IMU') || type.includes('Temperature') || category === 'Sensors') {
        return Activity;
    }
    if (type.includes('Power') || type.includes('Regulator') || type.includes('Converter') || category === 'Power Modules') {
        return Zap;
    }
    if (type.includes('Module') || type.includes('Transceiver') || type.includes('Bluetooth') || type.includes('WiFi')) {
        return Radio;
    }
    if (type.includes('IC') || type.includes('Amplifier') || type.includes('Driver') || category === 'Integrated Circuits') {
        return CircuitBoard;
    }
    if (category === 'Passive Components') {
        return Gauge;
    }
    // Default
    return Box;
};

const TechnicalCard = ({ component, onClick }) => {
    const Icon = getIconForType(component.type, component.category);

    return (
        <div
            className="bg-white dark:bg-slate-900 border-2 border-industrial-blue dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-industrial-accent dark:hover:border-industrial-light hover:scale-105 group"
            onClick={() => onClick(component)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick(component);
                }
            }}
        >
            {/* Component Icon */}
            <div className="flex justify-center mb-4">
                <Icon
                    className="w-16 h-16 text-industrial-blue dark:text-industrial-light transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:text-industrial-accent dark:group-hover:text-industrial-accent"
                    strokeWidth={1.5}
                />
            </div>

            {/* Component Header */}
            <div className="border-b-2 border-industrial-accent dark:border-industrial-light pb-3 mb-4">
                <h2 className="text-2xl font-bold text-industrial-blue dark:text-industrial-light font-mono text-center">
                    {component.name}
                </h2>
                <p className="text-sm text-industrial-accent dark:text-industrial-light font-semibold mt-1 uppercase tracking-wide text-center">
                    {component.type}
                </p>
                {component.category && (
                    <p className="text-xs text-gray-500 dark:text-slate-400 font-mono mt-1 text-center">
                        {component.category}
                    </p>
                )}
            </div>

            {/* Pinout Section */}
            <div className="mb-4">
                <h3 className="text-xs font-bold text-gray-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Pinout Configuration
                </h3>
                <p className="text-sm font-mono text-gray-800 dark:text-slate-200 leading-relaxed bg-gray-50 dark:bg-slate-800 p-3 rounded border border-gray-200 dark:border-slate-700">
                    {component.pinout}
                </p>
            </div>

            {/* Function Section */}
            <div>
                <h3 className="text-xs font-bold text-gray-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Technical Function
                </h3>
                <p className="text-sm font-mono text-gray-800 dark:text-slate-200 leading-relaxed bg-gray-50 dark:bg-slate-800 p-3 rounded border border-gray-200 dark:border-slate-700">
                    {component.function}
                </p>
            </div>

            {/* Component ID Badge */}
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-700 flex justify-between items-center">
                <span className="inline-block bg-industrial-blue dark:bg-slate-700 text-white px-3 py-1 rounded text-xs font-mono font-semibold">
                    ID: {String(component.id).padStart(3, '0')}
                </span>
                <span className="text-xs text-gray-500 dark:text-slate-400 font-mono">
                    Click for details →
                </span>
            </div>
        </div>
    );
};

export default TechnicalCard;
