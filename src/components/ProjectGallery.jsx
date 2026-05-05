import BlueprintBg from "@/components/BlueprintBg";
import kitchenShelf from "@/assets/images/grid-images/shelf2.jpg";
import bathroomVanity from "@/assets/images/grid-images/vanity1.jpg";
import coffeeTable from "@/assets/images/grid-images/table1.jpg";
import bathroomMirror from "@/assets/images/grid-images/mirror1.jpg";
import cuttingBoard from "@/assets/images/grid-images/cutting1.jpg";
import bathroomMirrorVanity from "@/assets/images/grid-images/bathroom1.jpg";
import stepStool from "@/assets/images/grid-images/step1.jpg";
import fullBathroom from "@/assets/images/grid-images/bathroom2.jpeg";
import upCloseShelf from "@/assets/images/grid-images/shelf1.jpg";

const ProjectGallery = () => {
  return (
    <section className="relative py-28 px-12 bg-lightgray" id="gallery">
      <BlueprintBg />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <div className="relative">
            <p className="section-label">Our Work</p>
            <h2 className="section-title text-dark">Project Gallery</h2>
          </div>
        </div>
        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-4">
          <div className="relative">
            <img className="w-full mb-4 aspect-video object-cover" src={kitchenShelf} alt="Wood Shelf" loading="lazy" />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Kitchen Shelf
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full mb-4 aspect-square object-cover"
              src={bathroomVanity}
              alt="Bathroom Vanity"
              loading="lazy"
            />
            <p className="font-semibold text-white/60 text-lg bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Bathroom Vanity
            </p>
          </div>
          <div className="relative">
            <img className="w-full mb-4 aspect-video object-cover" src={coffeeTable} alt="Coffee Table" loading="lazy" />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Coffee Table
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full mb-4 aspect-square object-cover"
              src={bathroomMirror}
              alt="Bathroom Mirror"
              loading="lazy"
            />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Bathroom Mirror
            </p>
          </div>
          <div className="relative">
            <img className="w-full mb-4 aspect-video object-cover" src={cuttingBoard} alt="Cutting Board" loading="lazy" />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Cutting Board
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full mb-4 aspect-square object-cover"
              src={bathroomMirrorVanity}
              alt="Bathroom Mirror & Vanity"
              loading="lazy"
            />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Bathroom Mirror & Vanity
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full mb-4 aspect-video object-cover object-top"
              src={stepStool}
              alt="Step Stool"
              loading="lazy"
            />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Step Stool
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full mb-4 aspect-square object-cover"
              src={fullBathroom}
              alt="Bathroom Towel Holder, Mirror, & Vanity"
              loading="lazy"
            />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Bathroom Towel Holder, Mirror, & Vanity
            </p>
          </div>
          <div className="relative">
            <img
              className="w-full mb-4 aspect-video object-cover"
              src={upCloseShelf}
              alt="Close up of Shelf"
              loading="lazy"
            />
            <p className="font-heading font-semibold text-white/60 bg-dark-mid px-4 py-2 absolute bottom-0 left-0">
              Kitchen Shelf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
