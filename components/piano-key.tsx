'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import { cn } from 'zero-cnn';

interface PianokeyProps {
    sound: string;
    keyType?: 'key-black';
    className?: string;
    changeAudio: (sound: string) => void;
    selectedKey: string;
    idx: number;
}

const PianoKey = ({
    idx,
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
        <div
            style={
                {
                    top: keyType && `calc(${40 * idx - 190}% - 0.5rem)`,
                    '--_t': `${idx * 0.1}s`,
                } as React.CSSProperties
            }
            className={cn('key-wrapper', keyType && `absolute left-[50%] `)}
        >
            <a
                href="#"
                onClick={handleClick}
                className={cn(
                    selectedKey === sound ? 'key-selected' : '',
                    'key',
                    keyType,
                    className
                )}
            >
                <span className="text-white rounded-md px-4 py-2  uppercase bg-black/10 text-xl ">
                    {sound}
                </span>
            </a>
        </div>
    );
};

export default PianoKey;
