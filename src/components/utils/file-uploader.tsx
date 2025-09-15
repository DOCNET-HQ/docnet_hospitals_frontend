'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import {
    Dropzone,
    DropzoneContent,
    DropzoneEmptyState
} from '@/components/ui/dropzone';

const FileUploader = ({ id }: { id: string }) => {
    const [files, setFiles] = useState<File[] | undefined>();

    const handleDrop = (files: File[]) => {
        console.log(files, id);
        setFiles(files);

        // Optional: Show success toast
        if (files.length > 0) {
            toast.success(`Successfully uploaded ${files.length} file(s)`);
        }
    };

    const handleError = (error: Error) => {
        // Show error toast instead of just console.error
        toast.error(error.message || 'File upload failed');
        console.error('File upload error:', error);
    };

    return (
        <Dropzone
            maxSize={1024 * 1024 * 10} // 10MB limit
            minSize={1024} // 1KB minimum
            onDrop={handleDrop}
            onError={handleError}
            src={files}
            className="min-h-[150px] w-full border-dashed bg-muted hover:bg-muted/50 transition ease-in-out duration-200 cursor-pointer"
        >
            <DropzoneEmptyState />
            <DropzoneContent />
        </Dropzone>
    );
};

export { FileUploader };
