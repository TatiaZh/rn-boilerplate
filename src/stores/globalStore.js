import { useState } from 'react';

export default function globalStore() {
	const [testValue, setTestValue] = useState('initial test value');
	const update = (val) => setTestValue(val);
	return { testValue, update };
}
