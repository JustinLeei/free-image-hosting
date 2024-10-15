# Image Hosting Application

[中文版 README](./README_CN.md)

## 🌟 Project Highlights

- 🚀 Modern web application built with Next.js 13 and App Router
- 🗃️ Secure and reliable image storage using Supabase
- 🎨 Beautiful and responsive interface design with Tailwind CSS and Shadcn UI components
- 📱 Mobile-first design approach for optimal experience across devices
- 🔒 Built-in image upload security measures to prevent malicious file uploads
- 🔗 One-click image link copying for easy sharing and use

## 📝 Project Description

This is a modern image hosting application built with Next.js 13 and Supabase. Users can easily upload images, and the system automatically generates accessible links. The interface is clean and intuitive, supporting image preview and one-click link copying. Tailwind CSS and Shadcn UI components ensure a great user experience and responsive design.

### Key Features:
1. Image upload and storage
2. Image gallery display
3. One-click image link copying
4. Responsive design for various devices

## 🛠️ Tech Stack

- Next.js 13 (App Router)
- React
- TypeScript
- Supabase
- Tailwind CSS
- Shadcn UI

## 🚀 Quick Start

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/image-hosting-app.git
   ```

2. Install dependencies
   ```bash
   cd image-hosting-app
   npm install
   ```

3. Set up environment variables
   Create a `.env.local` file and add the following Supabase configuration:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the application

## 📁 Project Structure

- `app/`: Next.js 13 App Router directory
  - `layout.tsx`: Application layout component
  - `page.tsx`: Main page component
- `components/`: React components
  - `image-uploader.tsx`: Image upload component
  - `image-list.tsx`: Image list display component
  - `ui/`: UI components (from Shadcn UI)
- `lib/`: Utility functions and configurations
  - `supabase-client.ts`: Supabase client configuration
- `public/`: Static assets

## 🖥️ Main Components

### ImageUploader

The image upload component allows users to select and upload image files.

Key functionalities:
- File selection
- Image upload to Supabase storage
- Upload status management
- Success/failure notifications

### ImageList

The image list component displays all uploaded images.

Key functionalities:
- Fetching image list from Supabase
- Displaying image thumbnails
- Providing functionality to copy image URLs

## 📝 Notes

- Ensure that a storage bucket named "images" is created in your Supabase project
- Image upload size may be subject to Supabase storage limitations
- Supabase domain is configured in `next.config.js` to support image optimization

## 📄 License

MIT
