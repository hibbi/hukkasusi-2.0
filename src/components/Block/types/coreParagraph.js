import parseHtml from "@/components/parser";

export default function ParagraphBlock({ content }) {
  return (
    <div className="col-span-4 md:col-span-5 md:col-start-3 md:row-start-2 py-8 text-sm leading-snug">
      {parseHtml(content)}
    </div>
  );
}
