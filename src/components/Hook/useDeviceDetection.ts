import { useState, useEffect } from 'react';
import { isMobile } from '../Utils/utility';

type DeviceType = 'handheld' | 'desktop';

function getDeviceType(): DeviceType {
	if (isMobile()) {
		return 'handheld';
	} else {
		return 'desktop';
	}
}

export const useDeviceDetection = () => {
	const [device, setDevice] = useState<DeviceType>(getDeviceType());

	useEffect(() => {
		const handleDevice = () => setDevice(getDeviceType());
		window.addEventListener('resize', handleDevice);
		return () => window.removeEventListener('resize', handleDevice);
	});

	return device;
};
