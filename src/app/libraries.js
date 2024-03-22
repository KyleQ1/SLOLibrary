import * as React from "react";

const libraries = [
  {
    region: "North County Region",
    libraries: [
      "Atascadero Library",
      "Cambria Library", 
      "Creston Library",
      "San Miguel Library",
      "Shandon Library"
    ]
  },
  {
    region: "Coastal Region",
    libraries: [
      "San Luis Obispo Library",
      "Cayucos Library",
      "Los Osos Library", 
      "Morro Bay Library",
      "Santa Margarita Library"  
    ]
  },
  {
    region: "South County Region",
    libraries: [
      "Arroyo Grande Library",
      "Nipomo Library",
      "Oceano Library",
      "Shell Beach Library"
    ]
  }
];

function LibraryList({ region, libraries }) {
  return (
    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
        <h2 className="text-2xl">{region}</h2>
        {libraries.map((library, index) => (
          <div key={index} className="mt-4">{library}</div>
        ))}
      </div>
    </div>
  );
}

function Libraries() {
  return (
    <section className="px-10 py-9 bg-white max-w-[838px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {libraries.map((item, index) => (
          <LibraryList 
            key={index}
            region={item.region}
            libraries={item.libraries}
          />
        ))}
      </div>
    </section>
  );
}

export default Libraries;
