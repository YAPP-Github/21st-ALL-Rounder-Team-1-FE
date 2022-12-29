import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
	children: React.ReactNode;
};

const ModalPortal = (props: Props) => {
	const { children } = props;
	const [element, setElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setElement(document.getElementById('modal-portal'));
	}, []);

	if (!element) {
		return <></>;
	}

	return createPortal(children, element);
};

export default ModalPortal;
