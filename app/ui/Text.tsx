interface TextProps {
  content: string[];
}

export const Text = ({ content }: TextProps) => {
  return (
    <div className="flex flex-col gap-y-10">
      {content.map((e, i) => {
        return <div key={i} className="max-w-[800px] px-10 py-5 rounded-lg shadow-md  shadow-white border text-md md:text-lg">{e}</div>;
      })}
    </div>
  );
};
