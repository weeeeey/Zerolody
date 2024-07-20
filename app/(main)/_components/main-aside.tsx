'use client';
import PianoKey from '@/components/piano-key';
import { useAudio } from '@/hooks/useAudio';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

const SOUND = ['a', 's', 'd', 'f', 'g', 'w', 'r'];
const KORSOUND = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅈ', 'ㄱ'];

const MusicURL = '/music/main-music';

const MainAside = () => {
    const { changeAudio, selectedKey } = useAudio({
        soundKeys: SOUND,
        korSoundKeys: KORSOUND,
        publicSrc: MusicURL,
    });
    // const [audio, setAudio] = useState<HTMLAudioElement>();
    // const [selectedKey, setSelectedKey] = useState('');

    // const changeAudio = useCallback(
    //     (sound: string) => {
    //         audio && audio.pause();
    //         const newAudio = new Audio(`${MusicURL}-${sound}.mp3`);

    //         setAudio(newAudio);
    //     },
    //     [audio]
    // );

    // useEffect(() => {
    //     if (audio) {
    //         audio.play();
    //     }
    //     audio?.addEventListener('ended', (e) => {
    //         setSelectedKey('');
    //     });
    // }, [audio]);

    // useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         const k = e.key;
    //         if (SOUND.includes(k)) {
    //             changeAudio(k);
    //             setSelectedKey(k);
    //         } else if (KORSOUND.includes(k)) {
    //             const idx = KORSOUND.indexOf(k);
    //             const enKey = SOUND[idx];
    //             changeAudio(enKey);
    //             setSelectedKey(enKey);
    //         }
    //     };
    //     window.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [changeAudio]);

    return (
        <section className=" bg-black flex justify-center items-center text-white h-full py-20  ">
            <div className="flex flex-col justify-center pl-20 w-full h-full space-y-2 relative ">
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#90C3CD]"
                    sound="a"
                />
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#FAC670]"
                    sound="s"
                />
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#F5E1BE]"
                    sound="d"
                />
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#F27926]"
                    sound="f"
                />
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#C0A8E6]"
                    sound="g"
                />
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    keyType="key-black"
                    sound="w"
                />
                <PianoKey
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    keyType="key-black"
                    sound="r"
                    className="top-[calc(60%-0.5rem)] "
                />
            </div>
        </section>
    );
};

export default MainAside;
