"use client";

import { MaskSvg } from '../libs/Mask/Mask';
import AllinBox from './AllinBox';
import ChooseSubject from './ChooseService';

export default function ClientSideInteractions() {
    const handleScrollToSection = (section: 'meta' | 'google' | 'web') => {
        const elementId = {
            meta: 'metaManage',
            google: 'googleManage',
            web: 'webManage',
        }[section];

        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full">
            <AllinBox onSubjectSelect={handleScrollToSection} />
            <MaskSvg />
            <ChooseSubject onSubjectSelect={handleScrollToSection} />
           
        </div>
    );
} 