import { RenderingPage } from "./rendering";
import { RoutingPage } from "./routing";

export default function ItemPage({ params }: { params: { item: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold capitalize">{params.item} Page</h1>

      <RenderingPage />
    </div>
  );
}
