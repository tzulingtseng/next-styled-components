// import Image from 'next/image';
import React, { Fragment } from 'react';

import { Inter } from 'next/font/google';
import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = (props) => {
    const { products } = props;
    // console.log('products', products);

    const { locale, locales, push } = useRouter();
    const changeLanguage = (l) => () => {
        // push('/', undefined, { locale: l });
        push('/about', undefined, { locale: l });
    };
    const { t } = useTranslation();
    return (
        <>
            {/* <ul>
                <li className="text-3xl font-bold underline">route</li>
                <li>
                    <Link href="/events">/events</Link>
                </li>
                <li>
                    <Link href="/events/123">/events/123</Link>
                </li>
                <li>
                    <Link href="/events/2021/12">/events/date</Link>
                </li>
            </ul>
            <ul>
                <li className="text-3xl font-bold underline">fetching data</li>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
            <hr></hr>
            <h1>locale:{locale}</h1> */}
            {/* <div>
                <h3>With useRouter</h3>
                <h1>Choose your locale:</h1>
                {locales.map((l) => (
                    <button key={l} onClick={changeLanguage(l)}>
                        {l}
                    </button>
                ))}
            </div> */}
            {/* <div>
                <h3>With Link</h3>
                <h1>Choose your locale:</h1>
                {locales.map((l) => (
                    <button key={l}>
                        <Link href={'/'} locale={l}>
                            {l}
                        </Link>
                    </button>
                ))}
            </div> */}
            {/* <div>
                <h3>Go to about page</h3>
                <h1>Choose your locale:</h1>
                {locales.map((l) => (
                    <button key={l}>
                        <Link href={'/about'} locale={l}>
                            {l}
                        </Link>
                    </button>
                ))}
            </div> */}
        </>
    );
};

export async function getStaticProps({ locale }) {
    const filePath = path.join(process.cwd(), 'data', 'backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    // console.log('data', data);
    return {
        props: {
            products: data.products,
            ...(await serverSideTranslations(locale, ['common', 'about'])),
        },
    };
}

export default Home;
