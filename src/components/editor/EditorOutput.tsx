"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

interface IEditorOutput {
  content: any;
}

const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};

const CustomImageRenderer = ({ data }: any) => {
  const src = data.file.url;

  return (
    <div className="w-full min-h-[15rem] relative">
      <Image src={src} alt="image" className="object-contain" fill />
    </div>
  );
};

const CustomCodeRenderer = ({ data }: any) => {
  return (
    <pre className="bg-gray-800 p-4 rounded-md">
      <code className="text-gray-100 text-sm">{data.code}</code>
    </pre>
  );
};

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
};

const EditorOutput = ({ content }: IEditorOutput) => {
  return (
    <Output
      className="text-sm"
      renderers={renderers}
      style={style}
      data={content}
    />
  );
};

export default EditorOutput;
