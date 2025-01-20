import { parse } from "yaml";

import type { Spec } from "@/interfaces/Spec";

import specString from "../../../specs/ant-design/openui.yaml";
import { Preview } from "@/components/preview";
import { SpecTitle } from "@/components/spec-title";

const spec = parse(specString) as Spec;

export default function AntDesignSpecPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="Ant Design" showBadge={false} />
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ant Design is a design system for enterprise-level products. This
          specification showcases how Ant Design components are defined using
          the OpenUI standard.
        </p>
        <Preview spec={spec} specString={specString} />
      </main>
    </div>
  );
}
