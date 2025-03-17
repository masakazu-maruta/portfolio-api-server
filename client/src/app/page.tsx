'use client';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:18080/");
                console.log(res)
                if (!res.ok) {
                    throw new Error('ネットワークエラー');
                }
                const textData = await res.text();
                setData(textData);
            } catch (err) {
                setError('データの取得に失敗しました');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // コンポーネントが最初にマウントされたときのみ実行

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <div>{data}</div>;
};

export default Page;
