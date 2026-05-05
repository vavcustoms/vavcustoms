import BlueprintBg from "@/components/BlueprintBg";
import fullBathroom from "@/assets/images/grid-images/bathroom2.jpeg";
import bathroomVanity from "@/assets/images/grid-images/vanity1.jpg";
import bathroomMirror from "@/assets/images/grid-images/mirror1.jpg";

const CustomBuildPage = () => {
  return (
    <>
      <title>Custom Build | VAV Customs</title>
      <meta
        name="description"
        content="Have a custom build that you're looking for? Fill out the form below to get started!"
      />
      <meta name="keywords" content="custom, one-of-a-kind, high quality" />
      <meta name="author" content="VAV Customs" />
      <link rel="canonical" href={`${window.location.origin}/custom-build`} />

      <div className="relative mt-14 md:mt-16.5 bg-lightgray py-20 px-12 text-center">
        <BlueprintBg />
        <div className="relative">
          <p className="text-brand-500 text-sm uppercase tracking-widest mb-3">Handcrafted to Order</p>
          <h1 className="font-heading font-bold text-dark text-3xl md:text-6xl">Custom Build</h1>
          <p className="text-dark/70 mt-3">
            Have a custom build that you're looking for? Fill out the form below to get started!
          </p>
        </div>
      </div>
      <section className="py-28 px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="mb-8">
                <p className="section-label">Get Started</p>
                <h2 className="section-title text-4xl">Tell Us About Your Project</h2>
              </div>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-dark/80 text-xs tracking-widest uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full py-3 px-4 rounded-md border border-b-2 border-dark/30 text-sm focus:outline-none focus:border-b-dark/70 transition duration-150 ease-in-out"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-dark/80 text-xs tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full py-3 px-4 rounded-md border border-b-2 border-dark/30 text-sm focus:outline-none focus:border-b-dark/70 transition duration-150 ease-in-out"
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark/80 text-xs tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full h-68 py-3 px-4 rounded-md border border-b-2 border-dark/30 text-sm focus:outline-none focus:border-b-dark/70 transition duration-150 ease-in-out"
                    placeholder="Please let us know what you're looking for..."
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label htmlFor="image" className="block text-dark/80 text-xs tracking-widest uppercase mb-2">
                    Have some inspiration?
                  </label>
                  <input
                    id="image"
                    type="file"
                    className="block w-full py-3 px-4 text-sm rounded-md border border-b-2 border-dark/30 file:bg-lightbrown file:text-dark/80 file:text-xs file:px-4 file:py-1 file:border-none file:rounded-full focus:outline-none focus:border-b-dark/70 transition duration-150 ease-in-out"
                  />
                </div>
                <button className="btn btn-primary w-full">Submit My Request</button>
              </form>
            </div>
            <div>
              <div>
                <p className="section-label">Benefits</p>
                <h2 className="section-title text-4xl">Why Custom?</h2>
              </div>
              <div className="py-8 border-b border-dark-mid/30">
                <p className="text-xs text-brand-600 tracking-widest mb-3">01</p>
                <h3 className="font-heading font-bold text-xl mb-2.5">Uniquely Yours</h3>
                <p className="text-sm text-dark/70 leading-7">
                  If you're not looking for a pre-made piece, this option allows you to order a fully custom piece exactly
                  how you want. The options are endless as you are able to specify type of wood and duotone, and
                  specifications to name a few.
                </p>
              </div>
              <div className="py-8 border-b border-dark-mid/30">
                <p className="text-xs text-brand-600 tracking-widest mb-3">02</p>
                <h3 className="font-heading font-bold text-xl mb-2.5">More Options for Pieces</h3>
                <p className="text-sm text-dark/70 leading-7">
                  Our store offers a wide variety of pre-made peieces, however, you might not find exactly what you're
                  looking for. A custom order allows us to create pieces that you wouldn't otherwise find in our store. You
                  are able to choose the small details of your piece, from the type of wood, to the finish used.
                </p>
              </div>
              <div className="py-8">
                <p className="text-xs text-brand-600 tracking-widest mb-3">03</p>
                <h3 className="font-heading font-bold text-xl mb-2.5">Matching Wood Sets</h3>
                <p className="text-sm text-dark/70 leading-7">
                  Are you working on a DIY project redoing a part of your house? A tricky spot you can find yourself in, is
                  not finding a complete matching set for your needs. Custom orders allow us to create matching sets to help
                  you complete your project! You're able to receive pieces of the same style to seamlessly fit together,
                  completing your space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-12 bg-dark">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="section-title text-white mb-12">Custom Build Examples</h2>
          <div className="grid grid-cols-3 gap-1 max-h-150">
            <img className="aspect-4/5 object-cover" src={fullBathroom} alt="Full Bathroom" />
            <img className="aspect-4/5 object-cover" src={bathroomVanity} alt="Full Bathroom" />
            <img className="aspect-4/5 object-cover" src={bathroomMirror} alt="Full Bathroom" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomBuildPage;
