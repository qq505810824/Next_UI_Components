
import { X } from 'lucide-react';
import React, { KeyboardEvent, useState } from 'react';

interface TagInputProps {
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    className?: string;
}

const TagInput: React.FC<TagInputProps> = ({
    tags,
    onChange,
    placeholder = '输入标签后按回车添加',
    className = ''
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
            // 当输入框为空且按退格键时，删除最后一个标签
            removeTag(tags.length - 1);
        }
    };

    const addTag = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue && !tags.includes(trimmedValue)) {
            onChange([...tags, trimmedValue]);
            setInputValue('');
        }
    };

    const removeTag = (indexToRemove: number) => {
        onChange(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div
            className={`min-h-[40px] border border-gray-300 rounded-md p-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 ${className}`}
        >
            <div className="flex flex-wrap gap-2 items-center">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200"
                        >
                            <X size={12} />
                        </button>
                    </span>
                ))}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={addTag}
                    placeholder={tags.length === 0 ? placeholder : ''}
                    className="flex-1 min-w-[120px] outline-none bg-transparent"
                />
            </div>
        </div>
    );
};
TagInput.displayName = 'TagInput';
export default TagInput;
