'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import { cn } from 'zero-cnn';

interface PianokeyProps {
    sound: string;
    keyType?: 'key-black';
    className?: string;
    changeAudio: (sound: string) => void;
    selectedKey: string;
}

const PianoKey = ({
    sound,
    keyType,
    className,
    changeAudio,
    selectedKey,
}: PianokeyProps) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        changeAudio(sound);
    };

    return (
        <a
            href="#"
            onClick={handleClick}
            className={cn(
                'key',
                keyType,
                className,
                selectedKey === sound ? 'key-selected' : ''
            )}
        >
            <span className="text-white rounded-md px-4 py-2  uppercase bg-black/10 text-xl ">
                {sound}
            </span>
        </a>
    );
};

export default PianoKey;
