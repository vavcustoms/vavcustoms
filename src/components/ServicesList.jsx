import shelf from "@/assets/images/grid-images/shelf2.jpg";
import bathroom from "@/assets/images/grid-images/bathroom1.jpg";

const ServicesList = () => {
  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <p className="section-label">Our Services</p>
          <h2 className="section-title">What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10">
            <div className="mb-8">
              <p className="font-mono text-xs text-brand-600 uppercase">01</p>
              <h3 className="font-heading text-4xl font-bold leading-tight">Custom Furniture</h3>
            </div>
            <p className="text-dark-mid leading-relaxed mb-6">
              Tables, benches, shelving units, and more. If it belongs in a home and is better made in wood, we build it.
              Each piece is sized, styled, and finished to your exact specification.
            </p>
            <ul className="space-y-2 mb-8 ml-6 list-disc text-dark-mid">
              <li>Dining & coffee tables</li>
              <li>Floating & wall-mounted shelving</li>
              <li>Step stools & accent pieces</li>
              <li>Matching sets for room renovations</li>
              <li>Cutting boards & charcuterie boards</li>
            </ul>
            <div className="flex items-baseline gap-2 pt-6 border-t border-mutedbrown/20">
              <p className="font-mono text-xs tracking-widest uppercase text-dark-mid">Starting from</p>
              <p className="text-2xl font-bold">$350</p>
            </div>
          </div>
          <div className="order-first lg:order-last relative overflow-hidden min-h-75 lg:min-h-125">
            <img className="h-full w-full object-cover" src={shelf} alt="Wood Shelf" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10">
            <div className="mb-8">
              <p className="font-mono text-xs text-brand-600 uppercase">02</p>
              <h3 className="font-heading text-4xl font-bold leading-tight">CNC Machining</h3>
            </div>
            <p className="text-dark-mid leading-relaxed mb-6">
              Tables, benches, shelving units, and more. If it belongs in a home and is better made in wood, we build it.
              Each piece is sized, styled, and finished to your exact specification.
            </p>
            <ul className="space-y-2 mb-8 ml-6 list-disc text-dark-mid">
              <li>Dining & coffee tables</li>
              <li>Floating & wall-mounted shelving</li>
              <li>Step stools & accent pieces</li>
              <li>Matching sets for room renovations</li>
              <li>Cutting boards & charcuterie boards</li>
            </ul>
            <div className="flex items-baseline gap-2 pt-6 border-t border-mutedbrown/20">
              <p className="font-mono text-xs tracking-widest uppercase text-dark-mid">Starting from</p>
              <p className="text-2xl font-bold">$350</p>
            </div>
          </div>
          <div className="order-first relative overflow-hidden min-h-full">
            <img
              className="absolute inset-0 h-full w-full object-cover object-bottom"
              src="https://images.unsplash.com/photo-1738709307364-3d0626677c9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Wood Shelf"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10">
            <div className="mb-8">
              <p className="font-mono text-xs text-brand-600 uppercase">03</p>
              <h3 className="font-heading text-4xl font-bold leading-tight">Vanities & Cabinets</h3>
            </div>
            <p className="text-dark-mid leading-relaxed mb-6">
              Tables, benches, shelving units, and more. If it belongs in a home and is better made in wood, we build it.
              Each piece is sized, styled, and finished to your exact specification.
            </p>
            <ul className="space-y-2 mb-8 ml-6 list-disc text-dark-mid">
              <li>Dining & coffee tables</li>
              <li>Floating & wall-mounted shelving</li>
              <li>Step stools & accent pieces</li>
              <li>Matching sets for room renovations</li>
              <li>Cutting boards & charcuterie boards</li>
            </ul>
            <div className="flex items-baseline gap-2 pt-6 border-t border-mutedbrown/20">
              <p className="font-mono text-xs tracking-widest uppercase text-dark-mid">Starting from</p>
              <p className="text-2xl font-bold">$350</p>
            </div>
          </div>
          <div className="order-first lg:order-last relative overflow-hidden min-h-75 lg:min-h-125">
            <img className="absolute inset-0  h-full w-full object-cover" src={bathroom} alt="Wood Shelf" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
