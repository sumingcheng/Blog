import Layout from "@/layout";
import React from 'react';
import Typed from 'typed.js';

function IndexPage () {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
      // loop: true,
      // loopCount: 3,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <Layout>
        <span ref={el} className={`text-5xl`}/>
      </Layout>
  )
}

export default IndexPage
