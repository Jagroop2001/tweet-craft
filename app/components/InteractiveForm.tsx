'use client';

import { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import Button from '@mui/material/Button';

export default function InteractiveForm() {
  const [tweet, setTweet] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const description = e.target.description.value;
    setLoading(true);

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.tweet) {
      setTweet(result.tweet);
    } else {
      console.error('Error:', result.error);
    }
  };

  const handleCopy = () => {
    if (tweet) {
      navigator.clipboard.writeText(tweet);
      alert('Tweet copied to clipboard!');
    }
  };

  const handleRegenerate = async () => {
    if (tweet) {
      setLoading(true);
      const description = tweet;
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.tweet) {
        setTweet(result.tweet);
      }
    }
  };

  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            id="description"
            name="description"
            rows={10}
            placeholder="Write your thoughts here..."
            className="
              block 
              w-full
              px-4 
              py-3 
              mt-4
              bg-[#1a1a1a]
              text-lg
              border 
              border-gray-300 
              text-white
              rounded-md 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-300 
              focus:border-transparent
            "
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="
              absolute 
              bottom-2 
              right-2 
              p-2 
              rounded-full 
              text-white 
              bg-transparent 
              hover:bg-gray-700
            "
            disabled={loading}
          >
            <BsArrowRightCircle size={30} />
          </Button>
        </div>
      </form>

      {tweet && (
        <div className="mt-6 text-white">
          <p className="text-lg">{tweet}</p>
          <div className="flex gap-4 mt-4">
            <Button
              onClick={handleCopy}
              variant="contained"
              color="primary"
              className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-400"
            >
              Copy
            </Button>
            <Button
              onClick={handleRegenerate}
              variant="contained"
              color="secondary"
              className="px-4 py-2 bg-green-500 rounded-full text-white hover:bg-green-400"
            >
              Regenerate
            </Button>
          </div>
        </div>
      )}

      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
          <span className="text-white">Generating tweet...</span>
        </div>
      )}
    </div>
  );
}
