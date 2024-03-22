'use client'
import * as React from "react";
import Libraries from "./libraries";

function EventCard({ title, date, location }) {
  return (
    <>
      <div className="mt-5 text-blue-600">{title}</div>
      <div className="mt-1.5">{date}</div>
      <div className="mt-1">{location}</div>
    </>
  );
}

function CategoryButton({ children }) {
  return (
    <div className="justify-center px-4 py-4 whitespace-nowrap bg-white rounded-3xl">
      {children}
    </div>
  );
}

function Page2() {
  const events = [
    {
      title: "Black Excellence Scavenger Hunt",
      date: "February 20, All Day",
      location: "Children's Services",
    },
    {
      title: "First Presbyterian Church of DuPage Community Stop",
      date: "February 20, 5–7 p.m.",
      location: "First Presbyterian Church of DuPage - 180 N. Weber Road",
    },
    {
      title: "Storytime",
      date: "February 20, 6:30–7 p.m.",
      location: "Children's Storytime Room",
    },
    {
      title: "Open Mic Night",
      date: "February 20, 7–8 p.m.",
      location: "Meeting Room C",
    },
  ];

  const categories = [
    "Movies & TV",
    "Thrillers",
    "Romance",
    "History & Current Events",
    "Picture Books",
  ];

  // State to control the visibility of the overlay
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);

  // Ref for the overlay element
  const overlayRef = React.useRef(null);

  // Event listener to close the overlay when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsOverlayVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [overlayRef]);

  return (
    <div className="flex flex-col">
      <div className="self-center w-full max-w-[1337px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col text-5xl font-medium leading-10 text-center uppercase text-slate-700 max-md:mt-6 max-md:max-w-full max-md:text-4xl">
              <h1 className="max-md:max-w-full max-md:text-4xl">
                What's Happening At The Library
              </h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2fbb34273551709bc9406caa93df8eb9fbf5846a3db90a46368c02a0446092?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
                alt=""
                className="mt-9 w-full aspect-[2.22] max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76c6ec72840fe7164fca04edcc106d2fdfa301c2818641802db73baf5ec99539?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
                alt=""
                className="self-center mt-5 max-w-full aspect-[11.11] w-[126px]"
              />
            </header>
          </div>
          <aside className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-1.5 text-xl text-zinc-800 max-md:mt-7">
              <h2 className="text-4xl font-medium leading-10 uppercase text-slate-700">
                Upcoming Events
              </h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c982252c4332792430165663facbe505fad0fcf03209f00112cc3a27f1105f3?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
                alt=""
                className="mt-9 w-full border border-black border-solid aspect-[100] stroke-[1px] stroke-black"
              />
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
              <button className="justify-center px-10 py-4 mt-5 text-base text-center text-white bg-cyan-900 rounded-3xl border border-black border-solid max-md:px-5">
                View All Events
              </button>
            </div>
          </aside>
        </div>
      </div>
      <section className="px-16 py-8 mt-14 w-full bg-cyan-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
            <h2 className="self-stretch my-auto text-5xl font-medium text-white uppercase leading-[62.4px] max-md:mt-10 max-md:text-4xl">
              New Arrivals
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between text-base leading-6 uppercase text-sky-950 max-md:flex-wrap max-md:mt-10">
              <CategoryButton>Movies & TV</CategoryButton>
              {categories.slice(1).map((category, index) => (
                <CategoryButton key={index}>{category}</CategoryButton>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col self-center mt-9 w-full max-w-[1298px] max-md:max-w-full">
        <div className="flex gap-4 justify-between items-center self-center w-full max-w-[1014px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d72e3d8e7bd23435c62cbc36acf86b13424eff40fbeaa0bb1aaf77972a1eba2?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-[0.63] fill-black w-[22px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e114e61d285760007ae5b2f73d34c73807b96e127e87406d3c6844ca650670d6?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
            alt=""
            className="self-stretch w-full aspect-[3.45] max-md:max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c40b1eb4768d521bd1ca0a94cf5076d8f9f7139de68e3b2010d7269052a6d25?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-[0.63] fill-black w-[22px]"
          />
        </div>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <h2 className="text-2xl leading-6 uppercase text-slate-700">
                  Contact Us
                </h2>
                <address className="mt-9 text-base leading-6 text-zinc-800">
                  San Luis Obispo Public Library
                </address>
                <address className="mt-3.5 text-sm leading-6 text-cyan-700">
                  995 Palm Street San Luis Obispo, CA 93401
                </address>
                <div className="flex gap-2 mt-3.5 text-sm leading-6 whitespace-nowrap">
                  <div className="text-zinc-800">Phone:</div>
                  <a href="tel:805-781-5991" className="flex-auto text-cyan-700">
                    805-781-5991
                  </a>
                </div>
                <div className="flex gap-2 mt-3.5">
                  <div className="my-auto text-sm leading-6 text-zinc-800">
                    Email:
                  </div>
                  <a
                    href="mailto:slolibrary@example.com"
                    className="flex-auto text-base leading-6 text-cyan-700"
                  >
                    slo library email
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:mt-10">
          <h2 className="mx-4 text-2xl leading-6 uppercase text-slate-700 max-md:mx-2.5">
            Library Hours
          </h2>
          <button
            className="justify-center px-10 py-5 mt-8 text-xl leading-6 text-white bg-cyan-900 rounded-xl border border-black border-solid max-md:px-5"
            onClick={() => setIsOverlayVisible(true)}
          >
            Click for Hours
          </button>
          {isOverlayVisible && (
            <div
              ref={overlayRef}
              className="absolute z-10 bg-white p-5 rounded-lg shadow-lg"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              <Libraries />
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setIsOverlayVisible(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
            <div className="flex flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <h2 className="text-2xl leading-6 uppercase text-slate-700 max-md:max-w-full">
                  Stay Connected
                </h2>
                <div className="flex gap-5 justify-between items-start self-end mt-7 max-w-full w-[527px] max-md:flex-wrap">
                  <div className="flex gap-1 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d22d7c934631a0d4f3f8d520fc7b932d239130a469f7d0801a8d77334b88009?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
                      alt=""
                      className="shrink-0 aspect-square w-[39px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ffc1b089b904ce1d227cb37a8f23a5e9d18dc920bcc90187bab2f964b374d03?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
                      alt=""
                      className="shrink-0 aspect-square w-[39px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cabcce4dda910c26549f7e34e91688669cada49b6c8a58cc4a0c98b5a82058ae?apiKey=7514e013ba2246ffad87de0d7d9423f5&"
                      alt=""
                      className="shrink-0 aspect-square w-[39px]"
                    />
                  </div>
                  <button className="justify-center px-5 py-3 text-xl leading-6 text-white bg-cyan-900 rounded-xl border border-black border-solid">
                    Sign Up for Newsletters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="items-start pt-4 pr-16 pb-2.5 pl-32 mt-5 w-full text-sm leading-5 text-white bg-cyan-900 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
        © {new Date().getFullYear()} County of San Luis Obispo Public Libraries
        All Rights Reserved.
      </footer>
    </div>
  );
}

export default Page2;