import React, { useState, useEffect } from 'react';

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
    {
        name: '知乎',
        value: 'zhihu',
        getUrl: (keyword) => `https://www.zhihu.com/search?q=${encodeURIComponent(keyword)}&search_source=History&utm_content=search_history&type=content`,
    },
];

export default function App() {
    const [platform, setPlatform] = useState(platforms[0].value);
    const [keyword, setKeyword] = useState('');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('searchHistory');
        if (stored) {
            setHistory(JSON.parse(stored));
        }
    }, []);

    const saveHistory = (newHistory) => {
        setHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    const handleSearch = (e, customKeyword, customPlatform) => {
        if (e) e.preventDefault();
        const searchKeyword = customKeyword !== undefined ? customKeyword : keyword;
        const searchPlatform = customPlatform !== undefined ? customPlatform : platform;
        const selected = platforms.find((p) => p.value === searchPlatform);
        if (selected && searchKeyword.trim()) {
            window.open(selected.getUrl(searchKeyword.trim()), '_blank');
            const newItem = { keyword: searchKeyword.trim(), platform: searchPlatform };
            const filtered = history.filter(h => !(h.keyword === newItem.keyword && h.platform === newItem.platform));
            const newHistory = [newItem, ...filtered].slice(0, 10);
            saveHistory(newHistory);
        }
    };

    const handleHistoryClick = (item) => {
        setPlatform(item.platform);
        setKeyword(item.keyword);
        handleSearch(null, item.keyword, item.platform);
    };

    const handleClearHistory = () => {
        saveHistory([]);
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
                {history.length > 0 && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-600">历史搜索</span>
                            <button
                                className="text-xs text-gray-400 hover:text-pink-500 transition"
                                onClick={handleClearHistory}
                            >清空</button>
                        </div>
                        <ul className="space-y-1 max-h-48 overflow-y-auto">
                            {history.map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        className="w-full text-left px-3 py-1 rounded hover:bg-pink-50 focus:outline-none focus:bg-pink-100 text-gray-700 flex items-center gap-2"
                                        onClick={() => handleHistoryClick(item)}
                                    >
                                        <span className="inline-block px-2 py-0.5 text-xs rounded bg-pink-100 text-pink-500 font-medium">{platforms.find(p => p.value === item.platform)?.name || item.platform}</span>
                                        <span className="truncate">{item.keyword}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <p className="mt-6 text-xs text-gray-400 text-center">专注搜索，远离沉迷</p>
            </div>
        </div>
    );
} 