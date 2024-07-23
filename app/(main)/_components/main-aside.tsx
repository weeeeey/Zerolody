'use client';
import PianoKey from '@/components/piano-key';
import { useAudio } from '@/hooks/useAudio';

const SOUND = ['a', 's', 'd', 'f', 'g', 'w', 'r'];
const KORSOUND = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅈ', 'ㄱ'];

const MusicURL = '/music/main-music';

const MainAside = () => {
    const { changeAudio, selectedKey } = useAudio({
        sound: SOUND,
        enCommands: SOUND,
        korCommands: KORSOUND,
        publicSrc: MusicURL,
    });

    return (
        <section className=" bg-black flex justify-center items-center text-white h-full py-20  min-h-[60vh]">
            <div className="flex flex-col justify-center pl-20 w-full h-full space-y-2 relative ">
                <PianoKey
                    idx={0}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#90C3CD] "
                    sound="a"
                />
                <PianoKey
                    idx={1}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#FAC670]"
                    sound="s"
                />
                <PianoKey
                    idx={2}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#F5E1BE]"
                    sound="d"
                />
                <PianoKey
                    idx={3}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#F27926]"
                    sound="f"
                />
                <PianoKey
                    idx={4}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    className="bg-[#C0A8E6]"
                    sound="g"
                />
                <PianoKey
                    idx={5}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    keyType="main-key-black"
                    sound="w"
                />
                <PianoKey
                    idx={6}
                    selectedKey={selectedKey}
                    changeAudio={changeAudio}
                    keyType="main-key-black"
                    sound="r"
                />
            </div>
        </section>
    );
};

export default MainAside;
