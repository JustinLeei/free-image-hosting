'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase-client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ImageItem {
  name: string;
  url: string;
}

export function ImageList() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from('images').list();

    if (error) {
      console.error('获取图片列表失败:', error);
      return;
    }

    const imageList = await Promise.all(
      data.map(async (item) => {
        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(item.name);
        return { name: item.name, url: publicUrl };
      })
    );

    setImages(imageList);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'URL 已复制',
      description: '图片 URL 已成功复制到剪贴板。',
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.name} className="flex flex-col space-y-2">
          <div className="relative aspect-square">
            <Image
              src={image.url}
              alt={image.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <Button onClick={() => copyUrl(image.url)} size="sm">
            复制 URL
          </Button>
        </div>
      ))}
    </div>
  );
}
