import { useParams } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Primitives";
import { ProductCard } from "@/components/product/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function CategoryPage() {
  const { id } = useParams();

  // Clean fallback handling to prevent undefined properties
  const category = categories.find((c) => c.id === id) ?? categories[0];
  const items = products.filter((p) => p.category === category.name);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <PageHeader
        eyebrow="Collection"
        title={category.name}
        description={category.description}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: category.name },
        ]}
      />

      <section className="py-12">
        <Container className="max-w-6xl">
          {items.length > 0 ? (
            /* Standard Dynamic E-Commerce Product Matrix */
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            /* Premium Bordered Empty State Blueprint */
            <div className="text-center border border-dashed border-neutral-300 rounded-md p-10 bg-white/50 max-w-xl mx-auto">
              <p className="text-[13px] font-medium text-neutral-600 leading-relaxed">
                New pieces for this collection are currently being finished by
                hand in our workshop. Please check back shortly or explore our
                full active catalog.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
