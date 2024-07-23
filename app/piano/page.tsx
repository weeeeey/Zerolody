'use client';

import { useAudio } from '@/hooks/useAudio';

import React from 'react';
import { cn } from 'zero-cnn';

const Keyboard = () => {
    // const {} = useAudio();
    return (
        <main className="main ">
            <div className="keyboard ">
                <div className="keyboard__front face-keyboard">
                    <div className="keyboard__f-top">
                        <div className="keyboard__speaker"></div>
                        <div className="keyboard__buttons">
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                        </div>
                        <div className="keyboard__led">
                            {[...Array(10)].map((_, i) => (
                                <div className="keyboard__line" key={i}>
                                    <div className="keyboard__dot"></div>
                                    <div className="keyboard__dot"></div>
                                    <div className="keyboard__dot"></div>
                                    <div className="keyboard__dot"></div>
                                    <div className="keyboard__dot"></div>
                                </div>
                            ))}
                        </div>
                        <div className="keyboard__buttons">
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                            <div className="keyboard__button"></div>
                        </div>
                        <div className="keyboard__speaker"></div>
                    </div>
                    <div className="keyboard__f-bottom">
                        {[...Array(21)].map((_, i) => (
                            <div className={`key`} key={i}>
                                <div
                                    className={`key__front face-key key__front-${
                                        i + 1
                                    }`}
                                ></div>
                                <div className="key__back face-key"></div>
                                <div className="key__right face-key"></div>
                                <div className="key__left face-key"></div>
                                <div className="key__top face-key"></div>
                                <div className="key__bottom face-key"></div>
                            </div>
                        ))}
                        {[...Array(14)].map((_, i) => (
                            <div
                                className={`key key--black key--black-${i + 1}`}
                                key={i + 21}
                            >
                                <div className="key__front face-key"></div>
                                <div className="key__back face-key"></div>
                                <div className="key__right face-key"></div>
                                <div className="key__left face-key"></div>
                                <div className="key__top face-key"></div>
                                <div className="key__bottom face-key"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="keyboard__back face-keyboard"></div>
                <div className="keyboard__right face-keyboard"></div>
                <div className="keyboard__left face-keyboard"></div>
                <div className="keyboard__top face-keyboard"></div>
                <div className="keyboard__bottom face-keyboard"></div>
            </div>
        </main>
    );
};

export default Keyboard;

const SOUND = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'a', 'a#', 'b', 'cc'];
const ENCOMMAND = [
    'a',
    'w',
    's',
    'e',
    'f',
    'j',
    'i',
    'k',
    'o',
    'l',
    'p',
    ';',
    '"',
];
const KORCOMMAND = [
    'ㅁ',
    'ㅈ',
    'ㄴ',
    'ㄷ',
    'ㄹ',
    'ㅓ',
    'ㅑ',
    'ㅏ',
    'ㅐ',
    'ㅣ',
    'ㅔ',
    ';',
    '"',
];
