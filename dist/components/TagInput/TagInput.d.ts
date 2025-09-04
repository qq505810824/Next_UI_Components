import React from 'react';
interface TagInputProps {
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    className?: string;
}
declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLDivElement>>;
export default TagInput;
export type { TagInputProps };
//# sourceMappingURL=TagInput.d.ts.map