import type { NextPage } from 'next';
import Image from 'next/image';
import Card from '../components/Card/Card';

const cards = [
    {
        id: '1',
        src: '/img/logo.svg',
        title: 'Al Article Intros',
        description:
            'Rephase your content in a different voice and style to appeal to different readers.',
    },
    {
        id: '2',
        src: '/img/logo.svg',
        title: 'Al Article Intros',
        description: 'Expand short centenes.',
    },
    {
        id: '3',
        src: '/img/logo.svg',
        title: 'Al Article Intros',
        description: 'Expand short centenes.',
    },
    {
        id: '4',
        src: '/img/logo_1.svg',
        title: 'Al Article Intros',
        description: 'Expand short centenes.',
    },
];

const Home: NextPage = () => {
    return (
        <div className="container grid gap-4 grid-cols-4 grid-rows-3">
            {cards.map((card) => (
                <Card key={card.id} cardEl={card} />
            ))}
        </div>
    );
};

export default Home;
