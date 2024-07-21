import { useCallback, useEffect, useState } from 'react';

interface useAudioProps {
    soundKeys: string[];
    korSoundKeys: string[];
    publicSrc: string;
}

export const useAudio = ({
    soundKeys,
    korSoundKeys,
    publicSrc,
}: useAudioProps) => {
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [selectedKey, setSelectedKey] = useState('');

    const changeAudio = useCallback(
        (sound: string) => {
            audio && audio.pause();
            const newAudio = new Audio(`${publicSrc}-${sound}.mp3`);

            setAudio(newAudio);
            setSelectedKey(sound);
        },
        [audio, publicSrc]
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
            const k = e.key;
            if (soundKeys.includes(k)) {
                changeAudio(k);
            } else if (korSoundKeys.includes(k)) {
                const idx = korSoundKeys.indexOf(k);
                const enKey = soundKeys[idx];
                changeAudio(enKey);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [changeAudio, korSoundKeys, soundKeys]);

    return {
        selectedKey,
        changeAudio,
    };
};
