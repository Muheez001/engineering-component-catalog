import React, { useEffect } from 'react';
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

const DetailModal = ({ component, onClose }) => {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!component) return null;

    const Icon = getIconForType(component.type, component.category);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-industrial-blue dark:border-slate-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-slate-900 border-b-2 border-industrial-accent dark:border-slate-700 p-6 flex justify-between items-start z-10">
                    <div className="flex-1">
                        {/* Component Icon */}
                        <div className="flex justify-center mb-4">
                            <Icon
                                className="w-20 h-20 text-industrial-blue dark:text-industrial-light"
                                strokeWidth={1.5}
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-industrial-blue dark:text-industrial-light font-mono text-center">
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
                    <button
                        onClick={onClose}
                        className="text-gray-500 dark:text-slate-400 hover:text-industrial-blue dark:hover:text-industrial-light transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 ml-4"
                        aria-label="Close modal"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                    {/* Component ID Badge */}
                    <div className="flex items-center gap-3">
                        <span className="inline-block bg-industrial-blue dark:bg-slate-700 text-white px-4 py-2 rounded text-sm font-mono font-semibold">
                            COMPONENT ID: {String(component.id).padStart(3, '0')}
                        </span>
                    </div>

                    {/* Technical Function */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-700 dark:text-slate-100 uppercase tracking-wider mb-3 border-b-2 border-industrial-light dark:border-slate-700 pb-2">
                            Technical Function
                        </h3>
                        <p className="text-base font-mono text-gray-800 dark:text-slate-200 leading-relaxed bg-gray-50 dark:bg-slate-800/50 p-4 rounded border-l-4 border-industrial-accent dark:border-industrial-light">
                            {component.function}
                        </p>
                    </div>

                    {/* Pinout Diagram Section */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-700 dark:text-slate-100 uppercase tracking-wider mb-3 border-b-2 border-industrial-light dark:border-slate-700 pb-2">
                            Pinout Configuration
                        </h3>
                        <div className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-slate-800/50 dark:to-slate-800/30 p-6 rounded-lg border-2 border-industrial-blue dark:border-slate-700">
                            <p className="text-base font-mono text-gray-900 dark:text-slate-100 leading-loose">
                                {component.pinout}
                            </p>
                        </div>
                    </div>

                    {/* Applications Section */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-700 dark:text-slate-100 uppercase tracking-wider mb-3 border-b-2 border-industrial-light dark:border-slate-700 pb-2">
                            Common Applications
                        </h3>
                        <ul className="space-y-3">
                            {component.applications && component.applications.map((app, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/50 p-3 rounded border-l-4 border-industrial-accent dark:border-industrial-light"
                                >
                                    <span className="inline-block mt-1 w-6 h-6 bg-industrial-blue dark:bg-slate-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="text-sm font-mono text-gray-800 dark:text-slate-100 leading-relaxed">
                                        {app}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-gray-50 dark:bg-slate-800 border-t-2 border-industrial-blue dark:border-slate-700 p-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-industrial-blue dark:bg-slate-700 text-white font-mono rounded hover:bg-industrial-accent dark:hover:bg-slate-600 transition-colors shadow-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;
