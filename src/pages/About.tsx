const About = () => {
  return (
    <div className="py-14 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-justify">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          About REGIOExplorer
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-indigo-600">REGIOExplorer</span> is a dynamic and interactive country explorer that fetches data from the{" "}
          <span className="font-semibold text-indigo-600">REST Countries API</span>. Our app lets you dive deep into comprehensive details about every nation on the planet.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you're a curious traveler, geography enthusiast, or just love exploring new cultures, GlobePeek offers a seamless way to browse information about{" "}
          <span className="font-medium">country names, capitals, populations, regions, flags, and even direct map links</span> — all in one place.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Built with <span className="font-semibold text-indigo-600">React</span> and styled using <span className="font-semibold text-indigo-600">Tailwind CSS</span>, this fully responsive web application ensures smooth navigation and a beautiful experience across devices. Powered by{" "}
          <span className="font-semibold text-indigo-600">React Router</span>, it provides instant access to country-level details without reloading pages.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          This project aims to blend functionality with simplicity — making global knowledge accessible to everyone through modern web technology.
        </p>
      </div>
    </div>
  );
};

export default About;
