import React, { useState } from 'react';

const platforms = [
    {
        name: '小红书',
        value: 'xiaohongshu',
        getUrl: (keyword) => `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(keyword)}&source=web_explore_feed`,
    },
    {
        name: '抖音',
        value: 'douyin',
        getUrl: (keyword) => `https://www.douyin.com/search/${encodeURIComponent(keyword)}`,
    },
    {
        name: 'B站',
        value: 'bilibili',
        getUrl: (keyword) => `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`,
    },
];

export default function App() {
    const [platform, setPlatform] = useState(platforms[0].value);
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const selected = platforms.find((p) => p.value === platform);
        if (selected && keyword.trim()) {
            window.open(selected.getUrl(keyword.trim()), '_blank');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-pink-500">防沉迷搜索直达</h1>
                <form onSubmit={handleSearch} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">选择平台</label>
                        <select
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                        >
                            {platforms.map((p) => (
                                <option key={p.value} value={p.value}>{p.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">搜索内容</label>
                        <input
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="text"
                            placeholder="请输入你要查找的内容..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded transition"
                    >
                        一键直达
                    </button>
                </form>
                <p className="mt-6 text-xs text-gray-400 text-center">专注搜索，远离沉迷</p>
            </div>
        </div>
    );
} 