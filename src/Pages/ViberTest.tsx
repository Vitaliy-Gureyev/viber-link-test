import React from 'react';
import './viberTest.scss'

const viberLinks = [{
    title: 'viber 1',
    link: 'How%20to%20share%20any%20link%20on%20Viber%2C%20WhatsApp%20and%20more%20%C2%BB%20Amazing%20Tips247%20https%3A%2F%2Fwww.amazingtips247.co.uk%2F2016%2F04%2Fhow-to-share-any-link-with-viber.html'
},{
    title: 'viber 2',
    link: 'How%20to%20share%20any%20link%20on%20Viber%20https://www.amazingtips247.co.uk/2016/04/how-to-share-any-link-with-viber.html'
},{
    title: 'viber 3',
    link: 'https://www.amazingtips247.co.uk/2016/04/how-to-share-any-link-with-viber.html'
},{
    title: 'viber 4',
    link: 'https://www.dev2.briz.ua/ru/blog/russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkii-russkiirusskiirusskii-russkii-russkii#ankor-3'
}]

const ViberTest = () => {
    return (
        <div>
            <ul className="subscribe-email__list-socials">
                {viberLinks.map(el => {
                    return (
                        <li className="subscribe-email__item-social">
                            <a
                                href={`viber://forward?text=${encodeURIComponent(el.link)}`}
                                className="subscribe-email__link-social"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="subscribe-email__icon-social subscribe-email__icon-social--viber" />
                                <span className="subscribe-email__text-social">{el.title}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ViberTest;