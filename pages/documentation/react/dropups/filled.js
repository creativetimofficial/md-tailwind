import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import DropdownsCode from 'components/Documentation/JavaScript/React/DropdownsCode';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function Buttons() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        <title>React Dropups | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="React Dropups"
                description="Beautiful dropups using React."
              />
              <SmallHeading title="Dropdown" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                placement="top-end"
                size="regular"
                rounded={false}
                buttonText="Dropup"
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Rounded Dropup" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                placement="top-end"
                size="regular"
                rounded={true}
                buttonText="Rounded Dropup"
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Small Dropups" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                placement="top-end"
                buttonType="filled"
                size="sm"
                rounded={false}
                buttonText="Small Dropups"
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Regular Dropups" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                placement="top-end"
                buttonType="filled"
                size="regular"
                rounded={false}
                buttonText="Regular Dropups"
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Large Dropups" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                placement="top-end"
                buttonType="filled"
                size="lg"
                rounded={false}
                buttonText="Large Dropups"
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              />
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
