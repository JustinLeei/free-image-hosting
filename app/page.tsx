import { ImageUploader } from '@/components/image-uploader';
import { ImageList } from '@/components/image-list';

export default function ImageGalleryPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">图床</h1>
      <ImageUploader />
      <ImageList />
    </div>
  );
}
