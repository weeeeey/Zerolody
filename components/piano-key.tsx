'use client';

import { Volume2 } from 'lucide-react';
import { MouseEvent } from 'react';
import { cn } from 'zero-cnn';

interface PianokeyProps {
    sound: string;
    keyType?: 'main-key-black';
    className?: string;
    changeAudio: (soundIdx: number) => void;
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

        changeAudio(idx);
    };

    return (
        <div
            style={
                {
                    top: keyType && `calc(${40 * idx - 190}% - 0.5rem)`,
                    '--_t': `${idx * 0.1}s`,
                } as React.CSSProperties
            }
            className={cn(
                'main-key-wrapper',
                keyType && `absolute left-[50%] `
            )}
        >
            <a
                href="#"
                onClick={handleClick}
                className={cn(
                    selectedKey === sound ? 'main-key-selected' : '',
                    'main-key',
                    keyType,
                    className
                )}
            >
                <span className="text-white rounded-md px-4 py-2  uppercase bg-black/10 text-xl ">
                    {sound}
                </span>
                {selectedKey === sound && <Volume2 className="size-5 ml-4" />}
            </a>
        </div>
    );
};

export default PianoKey;
