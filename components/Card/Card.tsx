import type { NextPage } from 'next';
import Image from 'next/image';

interface ICard {
    key: string;
    cardEl: {
        id: string;
        src: string;
        title: string;
        description: string;
    };
}



const Card: NextPage<ICard> = ({ cardEl }) => {
    const { src, title, description } = cardEl;
    return (
        <div className="border border-gray-border text-lg bg-white-400 text-dark-gray-text rounded p-6 max-w-xs">
            <div className="img-shadow w-12 h-12 rounded-xl truncate">
                <Image
                    src={src}
                    alt="logo"
                    layout="fixed"
                    height={48}
                    width={48}
                />
            </div>
            <h3 className="font-bold mt-4">{title}</h3>
            <p className="text-xs text-gray-text">{description}</p>
        </div>
    );
};

export default Card;
