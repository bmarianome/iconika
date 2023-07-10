import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    .onUploadComplete(({ file }) => {
      console.log('file', file)
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;