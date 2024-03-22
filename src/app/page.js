'use client'
import * as React from "react";
import Page2 from "./page2";
import Libraries from "./libraries";
import Accessibility from "./accessibility";
import Languages from "./language";

const LibraryHoursOverlay = () => (
  <div className="fixed z-20 bg-white p-5 rounded-lg shadow-lg" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    {/* Display library hours information here */}
    <Libraries />
  </div>
);

const LibraryHours = ({ onClick }) => (
  <div className="justify-center px-px py-1.5 text-xl leading-6 text-white bg-cyan-900 rounded-md cursor-pointer" onClick={onClick}>
    Click for Library Hours
  </div>
);

const LanguageSelector = ({ onClick }) => (
  <div className="flex gap-1.5 items-center py-px pr-5 bg-white cursor-pointer" onClick={onClick}>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/436a7805634f06ea54969c91f76a3a357f48a42d659680e500a4b7ebbd7e31bc?apiKey=7514e013ba2246ffad87de0d7d9423f5&" alt="" className="shrink-0 self-stretch aspect-[1.2] w-[23px]" />
    <div className="flex gap-1 self-stretch my-auto">
      <div className="grow">Select Language</div>
      <div className="shrink-0 w-px h-4 bg-stone-500" />
    </div>
    <div className="self-stretch my-auto">▼</div>
  </div>
);

const NavLinks = () => (
  <div className="flex gap-5 px-5 mt-3.5 text-2xl font-medium leading-7 text-center uppercase text-slate-700 max-md:flex-wrap max-md:max-w-full">
    <div>Books & More</div>
    <div>Learning & Tech</div>
    <div className="flex-auto my-auto text-2xl leading-6">Services</div>
    <div className="flex-auto my-auto text-2xl leading-6">About Us</div>
  </div>
);

const AccountLinks = () => (
  <div className="flex shrink gap-1 self-start text-xl leading-6 text-center text-white uppercase basis-auto grow-0">
    <div className="justify-center px-5 py-4 bg-cyan-900 rounded-xl border border-black border-solid">
      My Account
    </div>
    <div className="justify-center px-9 py-4 whitespace-nowrap bg-cyan-900 rounded-xl border border-black border-solid max-md:px-5">
      Catalog
    </div>
  </div>
);

const CatalogSearch = () => (
  <div className="flex flex-auto gap-0 max-md:flex-wrap">
    <div className="flex gap-2 px-1.5 py-3 text-black rounded-xl border border-black border-solid shadow-sm bg-neutral-200">
      <div className="grow text-2xl font-medium leading-6">Catalog Search</div>
      <div className="my-auto text-sm leading-6 text-right">▼</div>
    </div>
    <div className="flex flex-auto gap-5 pl-4 text-2xl leading-6 bg-white rounded-none border border-black border-solid shadow-sm text-neutral-800 max-md:flex-wrap max-md:max-w-full">
      <input
        type="text"
        placeholder="Click to Search Catalog"
        className="flex-auto my-auto bg-transparent border-none focus:outline-none"
      />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1ac1ccbc8a9feb6ff8a02519f6aa2a410b0d7b6f76deb36414aa13cdab49758?apiKey=7514e013ba2246ffad87de0d7d9423f5&" alt="" className="shrink-0 border border-black border-solid aspect-square w-[46px]" />
    </div>
  </div>
);

const QuickLinks = () => {
  const links = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/637825cc343b410da025e02bddf667a9ef10df206e97755c0bd126b52e8e7360?apiKey=7514e013ba2246ffad87de0d7d9423f5&", alt: "", text: "Get A Card", aspectRatio: "aspect-[1.35]", width: "w-[109px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c92adb41408aa98ea29c26e5ae851b3d6609ace65082692288ed919e65587c3b?apiKey=7514e013ba2246ffad87de0d7d9423f5&", alt: "", text: "Library News", aspectRatio: "aspect-square", width: "w-[81px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1aa980339cdb8db3c46c9f8d064d8c4f9abda64639205ff4321ad3e3cf356485?apiKey=7514e013ba2246ffad87de0d7d9423f5&", alt: "", text: "Reserve A Room", aspectRatio: "aspect-[1.01]", width: "w-[90px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85db6583864f91d66f4efb437dbda545f1d7949137da3ae4697de2f1477ba4de?apiKey=7514e013ba2246ffad87de0d7d9423f5&", alt: "", text: "eResources", aspectRatio: "aspect-[0.87]", width: "w-[78px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/61fb234612b40116ba39d523d4ae01f36c9c92ba4fb7c32118ae407c4c5c7f00?apiKey=7514e013ba2246ffad87de0d7d9423f5&", alt: "", text: "Events", aspectRatio: "aspect-[1.08]", width: "w-[87px]" },
  ];

  return (
    <div className="flex gap-5 justify-between self-center px-5 mt-14 w-full text-xl leading-7 text-center uppercase max-w-[1221px] text-slate-700 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      {links.map(({ src, alt, text, aspectRatio, width }, index) => (
        <div key={index} className={`flex flex-col ${index < 2 ? "self-start mt-3.5" : index === 2 ? "" : "whitespace-nowrap"}`}>
          <img loading="lazy" src={src} alt={alt} className={`self-center ${aspectRatio} ${width}`} />
          <div className={`mt-${index < 2 ? "3" : "4"} ${index === 4 ? "my-auto" : ""}`}>{text}</div>
        </div>
      ))}
    </div>
  );
};

function MyComponent() {
  const [isLibraryHoursVisible, setIsLibraryHoursVisible] = React.useState(false);
  const [isAccessibilityVisible, setIsAccessibilityVisible] = React.useState(false);
  const [isLanguagesVisible, setIsLanguagesVisible] = React.useState(false);

  const toggleLibraryHours = () => setIsLibraryHoursVisible(!isLibraryHoursVisible);
  const toggleAccessibility = () => setIsAccessibilityVisible(!isAccessibilityVisible);
  const toggleLanguages = () => setIsLanguagesVisible(!isLanguagesVisible);
  return (
    <div className="flex flex-col relative">
      <div className="z-10 self-center w-full max-w-[1407px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ea3b0d4194eb61294ececf62c5120018c4bef6275c991a9f7b7e1404640054?apiKey=7514e013ba2246ffad87de0d7d9423f5&" alt="" className="grow w-full aspect-[3.57] max-md:mt-3 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between self-end">
                <div className="flex flex-col self-start">
                  <LibraryHours onClick={toggleLibraryHours} />
                  <div className="flex flex-col items-start pr-px pl-11 mt-1 text-sm leading-6 text-right text-black max-md:pl-5">
                    <div className="shrink-0 h-px bg-neutral-400 w-[156px]" />
                    <div className="flex gap-0">
                      <div className="shrink-0 self-start w-px bg-neutral-300 h-[21px]" />
                      <div className="flex flex-col">
                        <div className="flex gap-0">
                          <LanguageSelector onClick={toggleLanguages} />
                          <div className="shrink-0 w-px bg-neutral-300 h-[21px]" />
                        </div>
                        <div className="shrink-0 h-px bg-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>
                <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5a576d4628c5989870ac79519be63b5a104e090d7291c31d7c8948d1c5fd0ca?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
            alt="Accessibility Options"
            className="shrink-0 aspect-[1.06] w-[62px] cursor-pointer"
            onClick={toggleAccessibility}
          />
              </div>
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
      {isLibraryHoursVisible && <LibraryHoursOverlay />}
      {isAccessibilityVisible && <Accessibility />}
      {isLanguagesVisible && <Languages />}
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[350px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5239d8652dddb359876726b9e840f26e116b16be884dcfb15dcb3f6d10bd52?apiKey=7514e013ba2246ffad87de0d7d9423f5&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative gap-5 mt-20 mb-11 max-md:flex-wrap max-md:my-10">
          <AccountLinks />
          <CatalogSearch />
        </div>
      </div>
      <QuickLinks />
      <div className="mt-16 w-full bg-neutral-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <Page2 />
    </div>
  );
}

export default MyComponent;