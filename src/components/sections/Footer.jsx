export const Footer = () => {
  return (
    <section
      id="footer"
      className="flex items-center justify-center py-10 bg-[rgba(10,10,10,0.8)]"
    >
      <div className="max-w-3xl text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:fabien06@my.yorku.ca"
            className="mx-8 text-blue-500 hover:underline"
          >
            fabienthich@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/fabienthich/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 text-blue-500 hover:underline"
          >
            linkedin.com/in/fabienthich
          </a>
          <a
            href="https://github.com/fabienthich"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 text-blue-500 hover:underline"
          >
            github.com/fabienthich
          </a>
        </div>
        <div className="mt-10 text-sm text-gray-300">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </section>
  );
};
