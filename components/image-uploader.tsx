'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase-client';
import { useToast } from '@/components/ui/use-toast';

export function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    const fileName = `${Date.now()}-${file.name}`;

    try {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, file);

      if (error) throw error;

      toast({
        title: '上传成功',
        description: '图片已成功上传到 Supabase。',
      });
    } catch (error) {
      console.error('上传错误:', error);
      toast({
        title: '上传失败',
        description: '图片上传过程中出现错误，请重试。',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
      setFile(null);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={!file || isUploading}>
        {isUploading ? '上传中...' : '上传图片'}
      </Button>
    </div>
  );
}
