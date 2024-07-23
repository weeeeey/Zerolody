import { useCallback, useEffect, useState } from 'react';

interface useAudioProps {
    sound: string[];
    enCommands: string[];
    korCommands: string[];
    publicSrc: string;
}

export const useAudio = ({
    sound,
    enCommands,
    korCommands,
    publicSrc,
}: useAudioProps) => {
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [selectedKey, setSelectedKey] = useState('');

    const changeAudio = useCallback(
        (soundIdx: number) => {
            audio && audio.pause();
            const s = sound[soundIdx];
            const newAudio = new Audio(`${publicSrc}-${s}.mp3`);

            setAudio(newAudio);
            setSelectedKey(s);
        },
        [audio, publicSrc, sound]
    );

    useEffect(() => {
        if (audio) {
            audio.play();
        }
        audio?.addEventListener('ended', (e) => {
            setSelectedKey('');
        });
    }, [audio]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const k = e.key.toLowerCase();
            if (enCommands.includes(k)) {
                changeAudio(enCommands.indexOf(k));
            } else if (korCommands.includes(k)) {
                changeAudio(korCommands.indexOf(k));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [changeAudio, korCommands, enCommands]);

    return {
        selectedKey,
        changeAudio,
    };
};
