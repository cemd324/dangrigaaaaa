import { useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://i.imgur.com/1DsLgN5.jpeg",
      title: "Sattelite view of the Port Structure",
    },
    {
      url: "https://i.imgur.com/9xfxGej.jpeg",
      title: "3D Model of the Port Structure",
    },
    {
      url: "https://i.imgur.com/4emRcvy.jpeg",
      title: "3D Model of the Port Entrance",
    },
    {
      url: "https://i.imgur.com/GNgIKWa.jpeg",
      title: "3D Model of the Port Structure 2.0",
    },
    {
      url: "https://i.imgur.com/f6icghB.jpeg",
      title: "3D Model of the Land Structure of the Port",
    },
    {
      url: "https://i.imgur.com/eo0Slzz.jpeg",
      title: "2D model of the Land Structure of the Port",
    },
    {
      url: "https://i.imgur.com/Flxf24o.jpeg",
      title: "2D zoomed Model of the Port Structure",
    },
    {
      url: "https://i.imgur.com/IomvG3J.jpeg",
      title: "2D model of the Port Structure",
    },
    {
      url: "https://i.imgur.com/GBxRtwQ.jpeg",
      title: "Estructura de Puerto en Español",
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">Media Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore visual updates of the Dangriga Cruise Port development
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Selected image"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;