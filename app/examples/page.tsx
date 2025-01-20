import Link from "next/link";

const examples = [
  {
    title: "Ant Design",
    url: "/examples/ant-design",
  },
  {
    title: "Chakra UI",
    url: "/examples/chakra-ui",
  },
  {
    title: "Material UI",
    url: "/examples/material-ui",
  },
  {
    title: "React Spectrum",
    url: "/examples/react-spectrum",
  },
  {
    title: "shadcn/ui",
    url: "/examples/shadcn-ui",
  },
];

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold mb-4">Examples</h2>
        <ul className="gap-4 grid grid-cols-3">
          {examples.map((example) => (
            <li
              className="border border-gray-700 rounded-xl"
              key={example.title}
            >
              <Link className="block px-4 py-12 text-center" href={example.url}>
                {example.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
